import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <span>ElectronVite</span>
      <Link to="/">Home</Link>
      <Link to="/other">Other</Link>
    </header>
  );
}
