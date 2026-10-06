# The Worker itself (script, static assets, Custom Domain, observability) is deployed by
# the cf CLI from site/cloudflare.config.ts. This module manages the zone-level settings.

locals {
  zone_name = "krrrr38.com"

  # Looked up by name to keep the Zone ID and Account ID out of this public repository
  zone_id    = data.cloudflare_zone.this.id
  account_id = data.cloudflare_zone.this.account.id
}

data "cloudflare_zone" "this" {
  filter = {
    name = local.zone_name
  }
}
