import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10 w-full lg:h-[25vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-4 lg:py-0">
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-start">
          
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2">
              <img src="luxury-dwell-logo.png" alt="" className="w-8 h-8 object-contain" />
              <h1 className="text-[22px] font-bold text-black tracking-tight">
                Luxury <span className="text-blue-700">Dwells</span>
              </h1>
            </div>
            <p className="text-gray-600 text-[13px] leading-5 mt-2">
              Modern real estate platform helping you find, buy, sell and rent properties with confidence.
            </p>
            <div className="flex gap-2 mt-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs hover:bg-blue-700 hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs hover:bg-blue-700 hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs hover:bg-blue-700 hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs hover:bg-blue-700 hover:text-white transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-bold text-[15px] text-black">Quick Links</h2>
            <div className="flex flex-col gap-1.5 mt-3 text-[13px]">
              <NavLink to="/" className="text-gray-600 hover:text-blue-700 transition">Home</NavLink>
              <NavLink to="/properties" className="text-gray-600 hover:text-blue-700 transition">Properties</NavLink>
              <NavLink to="/agents" className="text-gray-600 hover:text-blue-700 transition">Agents</NavLink>
              <NavLink to="/services" className="text-gray-600 hover:text-blue-700 transition">Services</NavLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-bold text-[15px] text-black">Services</h2>
            <div className="flex flex-col gap-1.5 mt-3 text-[13px]">
              <NavLink to="/buy" className="text-gray-600 hover:text-blue-700 transition">Buy Property</NavLink>
              <NavLink to="/rent" className="text-gray-600 hover:text-blue-700 transition">Rent Property</NavLink>
              <NavLink to="/sell" className="text-gray-600 hover:text-blue-700 transition">Sell Property</NavLink>
            </div>
          </div>

          {/* Support */}
          <div>
            <h2 className="font-bold text-[15px] text-black">Support</h2>
            <div className="flex flex-col gap-1.5 mt-3 text-[13px]">
              <NavLink to="/help" className="text-gray-600 hover:text-blue-700 transition">Help Center</NavLink>
              <NavLink to="/faq" className="text-gray-600 hover:text-blue-700 transition">FAQ</NavLink>
              <NavLink to="/privacy" className="text-gray-600 hover:text-blue-700 transition">Privacy Policy</NavLink>
              <NavLink to="/terms" className="text-gray-600 hover:text-blue-700 transition">Terms</NavLink>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-[15px] text-black">Newsletter</h2>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex flex-col gap-2">
              <input 
                type="email" 
                required
                placeholder="Enter your email" 
                className="w-full h-9 rounded-md border border-gray-300 px-3 text-[13px] outline-none focus:border-blue-700 transition" 
              />
              <button 
                type="submit"
                className="w-full h-9 rounded-md bg-blue-700 text-white font-medium text-[13px] hover:bg-blue-800 transition cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-100 mt-6 pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-gray-500">
          <p>© {new Date().getFullYear()} Luxury Dwells. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
