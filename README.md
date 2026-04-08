#  DevOps-Powered Portfolio Deployment

## Description
A fully automated DevOps project that deploys a personal portfolio website using Infrastructure as Code (Terraform) and a CI/CD pipeline (GitHub Actions) on AWS.  
The system eliminates manual deployment by automating build, upload, and cache invalidation.

---
## Live Demo:
Link : https://d2k58avw000f5j.cloudfront.net

## Project Overview
- Built and deployed a static portfolio website on AWS S3
- Configured CloudFront for global content delivery and caching
- Implemented Terraform for infrastructure provisioning
- Designed a CI/CD pipeline using GitHub Actions
- Automated cache invalidation after every deployment
- Eliminated manual upload and deployment steps

---
##  Architecture

GitHub → GitHub Actions → Terraform → AWS S3 → CloudFront → Users

##  Flow (How It Works)

1. Developer pushes code to GitHub
2. GitHub Actions pipeline is triggered
3. Pipeline performs:
    - Install dependencies
    - Build project (`npm run build`)
4. Terraform provisions/updates AWS infrastructure (S3 + CloudFront)
5. Built files are uploaded to S3 bucket
6. CloudFront cache invalidation is triggered
7. Updated website is served globally via CloudFront

---

## Tech Stack

| Category              | Tools/Technologies |
|---------------------|------------------|
| Frontend            | React, Tailwind CSS |
| Cloud               | AWS S3, CloudFront |
| Infrastructure IaC  | Terraform |
| CI/CD               | GitHub Actions |
| Version Control     | Git, GitHub |
| Scripting           | YAML |

---

## What is Covered in This Project

- Static website hosting on AWS S3
- CDN configuration using CloudFront
- Infrastructure provisioning using Terraform
- CI/CD pipeline automation
- Cache invalidation handling
- End-to-end deployment automation
- Real-world DevOps workflow (Code → Build → Deploy → Serve)

---

## Future Improvements

1. Add custom domain with HTTPS (Route 53 + ACM)
2. Implement monitoring & logging (CloudWatch / alerts)

---

## Folder Structure
    devops-portfolio/
    │
    ├── .github/
    │   └── workflows/
    │       └── deploy.yaml        # GitHub Actions CI/CD pipeline
    │
    ├── aws/                       # AWS-related configs/scripts (if any)
    ├── frontend/                  # React frontend application
    ├── terraform/                 # Infrastructure as Code (Terraform)
    │
    ├── .gitignore
    ├── awscliv2.zip               # AWS CLI (local setup reference)
    ├── README.md


---

## How to Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git

cd your-repo-name

```
## Conclusion

This project demonstrates a complete DevOps workflow by integrating
Infrastructure as Code with CI/CD automation to achieve a fully hands-off deployment process.

Every code push triggers an automated pipeline that builds, deploys, and updates the application
without any manual intervention — showcasing real-world DevOps practices.
---

 Built as part of my DevOps learning journey to gain hands-on experience with real-world deployment automation.