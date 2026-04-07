terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.99.1"
    }
  }

  backend "s3" {
    bucket = "purva-terraform-state-bucket"   # create manually once
    key    = "portfolio/terraform.tfstate"
    region = "ap-south-1"
  }
}
provider "aws" {
    region = "ap-south-1"
}
//for the sake of s3 uniqueness
resource "random_id" "suffix" {
  byte_length = 4
}
//added s3 bucket
resource "aws_s3_bucket" "portfolio" {
  bucket = "purva-portfolio-${random_id.suffix.hex}"
}

//enabling static web hosting
resource "aws_s3_bucket_website_configuration" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  index_document {
    suffix = "index.html"
  }
}

//making bucket public
resource "aws_s3_bucket_public_access_block" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  block_public_acls = false
  block_public_policy = false
  ignore_public_acls = false
  restrict_public_buckets = false
}

// adding bucket policy
resource "aws_s3_bucket_policy" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = "*"
        Action = ["s3:GetObject"]
        Resource = [
        "${aws_s3_bucket.portfolio.arn}/*"
        ]
      }
    ]
  })
}

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
resource "aws_cloudfront_distribution" "portfolio_cdn" {
  origin {
    domain_name = aws_s3_bucket.portfolio.bucket_regional_domain_name
    origin_id   = "s3-origin"
  }

  enabled = true

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