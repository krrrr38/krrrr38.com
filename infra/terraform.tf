terraform {
  required_version = "~> 1.16"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "5.26.0"
    }
  }

  # Cloudflare R2 (S3 compatible). The endpoint contains the Account ID, so it is
  # passed by AWS_ENDPOINT_URL_S3 instead of being written here.
  backend "s3" {
    bucket = "krrrr38-com-tfstate"
    key    = "infra/terraform.tfstate"
    region = "auto"

    skip_credentials_validation = true
    skip_metadata_api_check     = true
    skip_region_validation      = true
    skip_requesting_account_id  = true
    skip_s3_checksum            = true
    use_path_style              = true
  }
}

# Authenticated by CLOUDFLARE_API_TOKEN
provider "cloudflare" {}
