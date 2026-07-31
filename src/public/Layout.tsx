import { Outlet } from "react-router-dom";
import Nav from "../Nav$footer/Nav";
import Footer from "../Nav$footer/Footer"

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout