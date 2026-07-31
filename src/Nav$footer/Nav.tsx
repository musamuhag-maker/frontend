import { NavLink, useNavigate, type NavLinkRenderProps } from "react-router-dom";
import {
  HiOutlineUser,
  HiArrowRight,
  HiOutlineLogout,
} from "react-icons/hi";
import { motion } from "framer-motion";

function Nav() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const getNavClass = ({ isActive }: NavLinkRenderProps) =>
    `relative rounded-lg px-4 py-2 font-semibold transition-all duration-300 ${isActive
      ? "text-blue-600"
      : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-lg"
      >
        <div className="h-1 bg-linear-to-r from-blue-500 via-blue-600 to-blue-700" />

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

          {/* Logo */}

          <NavLink
            to="/"
            className="flex items-center gap-3"
          >
            <motion.img
              whileHover={{ rotate: 5, scale: 1.05 }}
              src="/luxury-dwell-logo.png"
              alt="Luxury Dwell"
              className="h-12 w-12"
            />

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Luxury Dwell
              </h1>

              <p className="text-xs uppercase tracking-widest text-gray-500">
                Luxury Real Estate
              </p>
            </div>
          </NavLink>

          {/* Navigation */}

          <nav className="flex items-center gap-2">

            <NavLink
              to="/"
              end
              className={getNavClass}
            >
              {({ isActive }) => (
                <>
                  Home

                  {isActive && (
                    <motion.span
                      layoutId="active"
                      className="absolute left-3 right-3 bottom-0 0.75 rounded-full bg-blue-600"
                    />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/about"
              className={getNavClass}
            >
              {({ isActive }) => (
                <>
                  About

                  {isActive && (
                    <motion.span
                      layoutId="active"
                      className="absolute left-3 right-3 bottom-0 0.75 rounded-full bg-blue-600"
                    />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/properties"
              className={getNavClass}
            >
              {({ isActive }) => (
                <>
                  Properties

                  {isActive && (
                    <motion.span
                      layoutId="active"
                      className="absolute left-3 right-3 bottom-0 h-0.75 rounded-full bg-blue-600"
                    />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/agents"
              className={getNavClass}
            >
              {({ isActive }) => (
                <>
                  Agents

                  {isActive && (
                    <motion.span
                      layoutId="active"
                      className="absolute left-3 right-3 bottom-0 0.75 rounded-full bg-blue-600"
                    />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/services"
              className={getNavClass}
            >
              {({ isActive }) => (
                <>
                  Services

                  {isActive && (
                    <motion.span
                      layoutId="active"
                      className="absolute left-3 right-3 bottom-0 0.75 rounded-full bg-blue-600"
                    />
                  )}
                </>
              )}
            </NavLink>

          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-3">

            {user && (
              <div className="hidden lg:block text-right mr-2">
                <p className="text-xs text-gray-400">
                  Welcome back
                </p>

                <p className="font-semibold text-gray-800">
                  {user.fullname}
                </p>
              </div>
            )}

            {user ? (
              <>
                <NavLink
                  to="/profile"
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                >
                  <HiOutlineUser />

                  Profile
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="flex cursor-pointer items-center gap-2 rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600"
                >
                  <HiOutlineLogout />

                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                >
                  <HiOutlineUser />

                  Login
                </NavLink>

                <NavLink
                  to="/contact"
                  className="group flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
                >
                  Contact Us

                  <motion.span whileHover={{ x: 5 }}>
                    <HiArrowRight />
                  </motion.span>
                </NavLink>
              </>
            )}

          </div>

        </div>
      </motion.header>

      <div className="h-20" />
    </>
  );
}

export default Nav;