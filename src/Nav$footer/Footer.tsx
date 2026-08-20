import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const { pathname } = useLocation();

  // Automatically scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `group relative w-fit text-sm transition-all duration-200 ${
      isActive
        ? "font-semibold text-blue-700"
        : "text-gray-500 hover:text-blue-700"
    }`;

  return (
    <footer className="mt-16 w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-8">

        {/* =========================
            TOP FOOTER
        ========================== */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">

          {/* =========================
              BRAND
          ========================== */}
          <div className="lg:col-span-2">
            <NavLink
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 hover:scale-105 hover:ring-blue-200">
                <img
                  src="/luxury-dwell-logo.png"
                  alt="Luxury Dwells"
                  className="h-8 w-8 object-contain"
                />
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-tight text-gray-900">
                  Luxury{" "}
                  <span className="text-blue-700">
                    Dwells
                  </span>
                </h1>

                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-400">
                  Real Estate
                </p>
              </div>
            </NavLink>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
              Discover exceptional properties and connect with
              trusted professionals to find a place you'll love
              to call home.
            </p>

            {/* =========================
                SOCIALS
            ========================== */}
            <div className="mt-6 flex items-center gap-2.5">

              <a
                href="#"
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:shadow-md"
              >
                <FaFacebookF size={13} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                onClick={(e) => e.preventDefault()}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:shadow-md"
              >
                <FaInstagram size={13} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                onClick={(e) => e.preventDefault()}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:shadow-md"
              >
                <FaTwitter size={13} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                onClick={(e) => e.preventDefault()}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:shadow-md"
              >
                <FaLinkedinIn size={13} />
              </a>

            </div>
          </div>

          {/* =========================
              COMPANY
          ========================== */}
          <div>
            <h2 className="text-sm font-bold text-gray-900">
              Company
            </h2>

            <div className="mt-5 flex flex-col gap-3">

              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>

              <NavLink to="/about" className={linkClass}>
                About Us
              </NavLink>

              <NavLink to="/agents" className={linkClass}>
                Our Agents
              </NavLink>

              <NavLink to="/contactus" className={linkClass}>
                Contact
              </NavLink>

            </div>
          </div>

          {/* =========================
              PROPERTIES
          ========================== */}
          <div>
            <h2 className="text-sm font-bold text-gray-900">
              Properties
            </h2>

            <div className="mt-5 flex flex-col gap-3">

              <NavLink
                to="/properties"
                className={linkClass}
              >
                All Properties
              </NavLink>

              <NavLink
                to="/buy"
                className={linkClass}
              >
                Buy Property
              </NavLink>

              <NavLink
                to="/rent"
                className={linkClass}
              >
                Rent Property
              </NavLink>

              <NavLink
                to="/sell"
                className={linkClass}
              >
                Sell Property
              </NavLink>

            </div>
          </div>

          {/* =========================
              SUPPORT
          ========================== */}
          <div>
            <h2 className="text-sm font-bold text-gray-900">
              Support
            </h2>

            <div className="mt-5 flex flex-col gap-3">

              <NavLink
                to="/services"
                className={linkClass}
              >
                Services
              </NavLink>

              <NavLink
                to="/faq"
                className={linkClass}
              >
                FAQ
              </NavLink>

              <NavLink
                to="/privacy"
                className={linkClass}
              >
                Privacy Policy
              </NavLink>

              <NavLink
                to="/terms"
                className={linkClass}
              >
                Terms & Conditions
              </NavLink>

            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Luxury Dwells.
            All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />

            <p className="text-xs text-gray-400">
              Your next home starts here.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;