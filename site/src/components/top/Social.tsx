const socialLinks = [
  { href: "https://www.facebook.com/k.kaizu38", title: "facebook", label: "Facebook" },
  { href: "https://twitter.com/krrrr38", title: "twitter", label: "Twitter" },
  { href: "https://github.com/krrrr38", title: "github", label: "GitHub" },
  { href: "http://instagram.com/krrrr38", title: "instagram", label: "Instagram" },
  { href: "https://www.linkedin.com/in/krrrr38/", title: "linkedin", label: "LinkedIn" },
  {
    href: "http://www.amazon.co.jp/registry/wishlist/1HEYQLQTW461W",
    title: "amazon",
    label: "Amazon",
  },
] as const;

export function Social() {
  return (
    <section className="social">
      <h2>Social</h2>
      <ul className="social-list">
        {socialLinks.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className="lsf-icon"
              title={link.title}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
