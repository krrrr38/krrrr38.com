import { HeaderLink } from "./HeaderLink";

export function Header() {
  return (
    <header>
      <nav>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/cv/en">CV - en</HeaderLink>
        <HeaderLink to="/cv/ja">CV - ja</HeaderLink>
      </nav>
    </header>
  );
}
