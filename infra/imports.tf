# One-off imports of the resources that already exist on Cloudflare.
# Remove this file after the first apply.
# Resource IDs are looked up instead of being written here.

data "cloudflare_dns_records" "google_site_verification" {
  zone_id = local.zone_id
  type    = "TXT"
  name = {
    exact = local.zone_name
  }
  content = {
    contains = "google-site-verification="
  }
}

import {
  to = cloudflare_dns_record.google_site_verification
  id = "${local.zone_id}/${one(data.cloudflare_dns_records.google_site_verification.result).id}"
}

data "cloudflare_rulesets" "zone" {
  zone_id = local.zone_id
}

import {
  to = cloudflare_ruleset.redirect
  id = "zones/${local.zone_id}/${one([for r in data.cloudflare_rulesets.zone.result : r.id if r.kind == "zone" && r.phase == "http_request_dynamic_redirect"])}"
}

import {
  to = cloudflare_zone_setting.always_use_https
  id = "${local.zone_id}/always_use_https"
}

import {
  to = cloudflare_zone_setting.security_header
  id = "${local.zone_id}/security_header"
}

data "cloudflare_web_analytics_sites" "this" {
  account_id = local.account_id
}

import {
  to = cloudflare_web_analytics_site.this
  id = "${local.account_id}/${one([for s in data.cloudflare_web_analytics_sites.this.result : s.site_tag if s.ruleset.zone_name == local.zone_name])}"
}
