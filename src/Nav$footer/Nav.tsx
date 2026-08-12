import { useState } from "react";
import { NavLink, useNavigate, type NavLinkRenderProps } from "react-router-dom";
import {
  HiOutlineUser,
  HiArrowRight,
  HiOutlineLogout,
  HiOutlineShieldCheck,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "null");
  const admin = JSON.parse(localStorage.getItem("admin") || "null");

  const handleLogout = () => {
    // Remove user login
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Remove admin login
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    setIsMenuOpen(false);

    navigate("/");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getNavClass = ({ isActive }: NavLinkRenderProps) =>
    `relative rounded-lg px-4 py-2 font-semibold transition-all duration-300 ${
      isActive
        ? "text-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`;

  const getMobileNavClass = ({ isActive }: NavLinkRenderProps) =>
    `block w-full rounded-xl px-4 py-3 font-semibold transition-all duration-300 ${
      isActive
        ? "bg-blue-50 text-blue-600"
        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
    }`;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed left-0 top-0 z-50 w-full bg-white/95 shadow-lg backdrop-blur-md"
      >
        {/* Top accent */}
        <div className="h-1 bg-linear-to-r from-blue-500 via-blue-600 to-blue-700" />

        {/* Desktop / Mobile Header */}
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LOGO */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <motion.img
              whileHover={{
                rotate: 5,
                scale: 1.05,
              }}
              src="/luxury-dwell-logo.png"
              alt="Luxury Dwell"
              className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
            />

            <div className="min-w-0">
              <h1 className="truncate text-lg font-bold text-gray-900 sm:text-2xl">
                Luxury Dwell
              </h1>

              <p className="hidden text-[10px] uppercase tracking-widest text-gray-500 sm:block sm:text-xs">
                Luxury Real Estate
              </p>
            </div>
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-1 lg:flex">
            <NavLink to="/" end className={getNavClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={getNavClass}>
              About
            </NavLink>

            <NavLink to="/properties" className={getNavClass}>
              Properties
            </NavLink>

            <NavLink to="/agents" className={getNavClass}>
              Agents
            </NavLink>

            <NavLink to="/services" className={getNavClass}>
              Services
            </NavLink>
          </nav>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden items-center gap-3 lg:flex">

            {/* Welcome */}
            {(user || admin) && (
              <div className="mr-2 text-right">
                <p className="text-xs text-gray-400">
                  Welcome back
                </p>

                <p className="max-w-32 truncate font-semibold text-gray-800">
                  {admin ? admin.fullname : user.fullname}
                </p>
              </div>
            )}

            {/* ADMIN */}
            {admin ? (
              <>
                <NavLink
                  to="/admin/dashboard"
                  className="flex items-center gap-2 rounded-lg border border-blue-300 px-4 py-2 font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  <HiOutlineShieldCheck className="text-lg" />
                  Dashboard
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="flex cursor-pointer items-center gap-2 rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600"
                >
                  <HiOutlineLogout className="text-lg" />
                  Logout
                </button>
              </>
            ) : user ? (
              <>
                <NavLink
                  to="/profile"
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                >
                  <HiOutlineUser className="text-lg" />
                  Profile
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="flex cursor-pointer items-center gap-2 rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600"
                >
                  <HiOutlineLogout className="text-lg" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                >
                  <HiOutlineUser className="text-lg" />
                  Login
                </NavLink>

                <NavLink
                  to="/contact"
                  className="group flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
                >
                  Contact Us

                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiArrowRight />
                  </motion.span>
                </NavLink>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:border-blue-500 hover:text-blue-600 lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
            >
              <div className="mx-auto max-w-7xl px-4 pb-5 pt-4 sm:px-6">

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-1">
                  <NavLink
                    to="/"
                    end
                    onClick={closeMenu}
                    className={getMobileNavClass}
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/about"
                    onClick={closeMenu}
                    className={getMobileNavClass}
                  >
                    About
                  </NavLink>

                  <NavLink
                    to="/properties"
                    onClick={closeMenu}
                    className={getMobileNavClass}
                  >
                    Properties
                  </NavLink>

                  <NavLink
                    to="/agents"
                    onClick={closeMenu}
                    className={getMobileNavClass}
                  >
                    Agents
                  </NavLink>

                  <NavLink
                    to="/services"
                    onClick={closeMenu}
                    className={getMobileNavClass}
                  >
                    Services
                  </NavLink>
                </nav>

                {/* Mobile Account Section */}
                <div className="mt-4 border-t border-gray-100 pt-4">

                  {/* Welcome */}
                  {(user || admin) && (
                    <div className="mb-4 rounded-xl bg-gray-50 px-4 py-3">
                      <p className="text-xs text-gray-400">
                        Welcome back
                      </p>

                      <p className="truncate font-semibold text-gray-800">
                        {admin ? admin.fullname : user.fullname}
                      </p>
                    </div>
                  )}

                  {/* ADMIN */}
                  {admin ? (
                    <div className="flex flex-col gap-2">
                      <NavLink
                        to="/admin/dashboard"
                        onClick={closeMenu}
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-300 px-4 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
                      >
                        <HiOutlineShieldCheck className="text-lg" />
                        Dashboard
                      </NavLink>

                      <button
                        onClick={handleLogout}
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
                      >
                        <HiOutlineLogout className="text-lg" />
                        Logout
                      </button>
                    </div>
                  ) : user ? (
                    <div className="flex flex-col gap-2">
                      <NavLink
                        to="/profile"
                        onClick={closeMenu}
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-3 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                      >
                        <HiOutlineUser className="text-lg" />
                        Profile
                      </NavLink>

                      <button
                        onClick={handleLogout}
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
                      >
                        <HiOutlineLogout className="text-lg" />
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <NavLink
                        to="/login"
                        onClick={closeMenu}
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-3 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                      >
                        <HiOutlineUser className="text-lg" />
                        Login
                      </NavLink>

                      <NavLink
                        to="/contact"
                        onClick={closeMenu}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                      >
                        Contact Us

                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <HiArrowRight />
                        </motion.span>
                      </NavLink>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Navbar spacer */}
      <div className="h-20" />
    </>
  );
}

export default Nav;