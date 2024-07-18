import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
  return (
    <div className="bg-gray-700 min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
