import { NavLink } from "react-router-dom";

const items = [
  { to: "/", label: "ようこそ" },
  { to: "/home", label: "Home" },
  { to: "/weekly", label: "Weekly" },
  { to: "/evidence", label: "Evidence" },
  { to: "/settings", label: "設定" }
];

export default function TopNav() {
  return (
    <nav className="topnav" aria-label="主要ナビゲーション">
      {items.map(i => (
        <NavLink key={i.to} to={i.to} className="topnav-link">
          {i.label}
        </NavLink>
      ))}
    </nav>
  );
}
