import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type HeaderLinkProps = {
  to: string;
  children: ReactNode;
};

export function HeaderLink({ to, children }: HeaderLinkProps) {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : undefined)} end>
      {children}
    </NavLink>
  );
}
