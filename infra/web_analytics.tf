# Web Analytics. The beacon is injected by Cloudflare at the edge (auto_install).
resource "cloudflare_web_analytics_site" "this" {
  account_id   = local.account_id
  zone_tag     = local.zone_id
  auto_install = true
}
