# Static assets `_redirects` does not support domain-level redirects, so
# www.krrrr38.com -> krrrr38.com is handled by a zone-level Redirect Rule.
resource "cloudflare_ruleset" "redirect" {
  zone_id = local.zone_id
  name    = "default"
  kind    = "zone"
  phase   = "http_request_dynamic_redirect"

  rules = [
    {
      description = "www redirect"
      expression  = "(http.request.full_uri wildcard r\"https://www.*\")"
      action      = "redirect"
      action_parameters = {
        from_value = {
          status_code           = 301
          preserve_query_string = true
          target_url = {
            expression = "wildcard_replace(http.request.full_uri, r\"https://www.*\", r\"https://$${1}\")"
          }
        }
      }
    },
  ]
}
