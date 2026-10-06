# The apex AAAA record is created by the Worker Custom Domain (`domains` in
# site/cloudflare.config.ts) and is read-only, so it is not managed here.

resource "cloudflare_dns_record" "google_site_verification" {
  zone_id = local.zone_id
  name    = local.zone_name
  type    = "TXT"
  content = "\"google-site-verification=KowOUURnJN7DuhLaNZgsNOD6Bu26w8HuFnt5j0vS4-w\""
  ttl     = 1
}
