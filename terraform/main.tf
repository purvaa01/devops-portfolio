terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.99.1"
    }
  }

  backend "s3" {
    bucket = "purva-terraform-state-bucket-123"
    key    = "portfolio/terraform.tfstate"
    region = "ap-south-1"
  }
}

# Provider
provider "aws" {
  region = "ap-south-1"
}

# Unique suffix
resource "random_id" "suffix" {
  byte_length = 4
}

# S3 Bucket
resource "aws_s3_bucket" "portfolio" {
  bucket = "purva-portfolio-${random_id.suffix.hex}"
}

# BLOCK PUBLIC ACCESS (UPDATED)
resource "aws_s3_bucket_public_access_block" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# CloudFront OAI (NEW)
resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "OAI for portfolio"
}

# Bucket Policy (ONLY CloudFront can access)
resource "aws_s3_bucket_policy" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          AWS = aws_cloudfront_origin_access_identity.oai.iam_arn
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.portfolio.arn}/*"
      }
    ]
  })
}

# Upload all files
resource "aws_s3_object" "portfolio_files" {
  for_each = fileset("../frontend/dist", "**/*")

  bucket = aws_s3_bucket.portfolio.id
  key    = each.value
  source = "../frontend/dist/${each.value}"

  etag = filemd5("../frontend/dist/${each.value}")

  content_type = lookup(
    {
      "html" = "text/html"
      "css"  = "text/css"
      "js"   = "application/javascript"
      "png"  = "image/png"
      "jpg"  = "image/jpeg"
      "svg"  = "image/svg+xml"
    },
    split(".", each.value)[length(split(".", each.value)) - 1],
    "application/octet-stream"
  )
}

# CloudFront Distribution (UPDATED with OAI)
resource "aws_cloudfront_distribution" "portfolio_cdn" {
  origin {
    domain_name = aws_s3_bucket.portfolio.bucket_regional_domain_name
    origin_id   = "s3-origin"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
    }
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    target_origin_id       = "s3-origin"
    viewer_protocol_policy = "redirect-to-https"

    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}