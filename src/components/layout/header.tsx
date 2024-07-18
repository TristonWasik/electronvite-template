import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-screen flex justify-between p-6 border-b bg-gray-800 shadow-md shadow-gray-400">
      <span className="text-xl text-white font-semibold">
        ElectronVite Template
      </span>
      <nav className="flex gap-2">
        <Link className="text-blue-400 hover:text-blue-200" to="/">
          Home
        </Link>
        <Link className="text-blue-400 hover:text-blue-200" to="/other">
          Other
        </Link>
      </nav>
    </header>
  );
}
