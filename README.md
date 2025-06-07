
# GCP Infrastructure as Code (IaC) - Terraform

This Terraform code uses modular code to create and manage GCP resources:

- **IAM Service Account and Permissions** to securely manage access.
- **Google Cloud Storage Bucket** with versioning and lifecycle management.
- **Cloud Run Service** to deploy containerized apps with autoscaling.


## Project Structure
```
IaC/
├── main.tf
├── provider.tf
├── variables.tf

├── modules/
│   ├── gcs_bucket/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │
│   ├── cloud_run/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │
│   └── iam/
│       ├── main.tf
│       ├── variables.tf
|

```

## Modules Overview

- **gcs_bucket**: Creates a GCS bucket with versioning, lifecycle rules, and labels.  
- **cloud_run**: Deploys a container image to Cloud Run with resource limits and autoscaling.  
- **iam**: Creates a service account and assigns roles for Cloud Run invoker and GCS bucket access.


## Usage

Initialize Terraform:

```bash
terraform init
```


## Variables
```
| Name                     | Description                      | Default                                     | Required |
| ------------------------ | -------------------------------- | ------------------------------------------- | -------- |
| `project_id`             | GCP Project ID                   | —                                           | Yes      |
| `region`                 | Default region for resources     | -                                           | No       |
| `bucket_name`            | Name of the GCS bucket           | `my-terraform-bucket`                       | No       |
| `location`               | Region for the bucket            | `us-central1`                               | No       |
| `environment`            | Deployment environment label     | `dev`                                       | No       |
| `cloud_run_service_name` | Name of the Cloud Run service    | `my-cloudrun-service`                       | No       |
| `container_image`        | Docker image URL for Cloud Run   | `gcr.io/my-project/my-image`                | No       |
| `iam_sa_name`            | Service Account ID               | `app-service-account`                       | No       |
| `iam_sa_display_name`    | Display name for Service Account | `App Service Account for Cloud Run and GCS` | No       |
| `bucket_role`            | IAM role for GCS bucket access   | `roles/storage.objectAdmin`                 | No       |

```


## Notes
- Designed with modular Terraform best practices for reusability and maintainability.

- IAM roles adhere to principle of least privilege.

- Cloud Run and GCS bucket are configured with public access roles; review and adjust for production use.

## Support
For any issues or questions, please contact


```
rameshkanna841@gmail.com
```
