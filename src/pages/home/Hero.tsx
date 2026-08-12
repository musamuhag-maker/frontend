import { BsShieldFillCheck } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="w-full overflow-hidden">
      <div className="flex min-h-[calc(100vh-5rem)] flex-col lg:flex-row">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex w-full flex-col justify-center bg-gray-50 px-5 py-12 sm:px-8 sm:py-16 lg:w-1/2 lg:px-10 xl:px-16"
        >
          {/* Trusted */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-5 flex items-center gap-2 text-sm font-semibold text-blue-600 sm:text-base"
          >
            <BsShieldFillCheck className="shrink-0 text-lg sm:text-xl" />

            <span>Trusted by Thousands</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl"
          >
            Discover Exceptional Properties Designed for Your{" "}
            <span className="text-blue-600">
              Lifestyle
            </span>
            .
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-5 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7"
          >
            Your journey to finding the perfect property begins here.
            Explore our listings to find the home that matches your dreams.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/properties")}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700 sm:w-auto"
            >
              Browse Properties

              <motion.span whileHover={{ x: 4 }}>
                <FaArrowRight className="text-sm" />
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/about")}
              className="w-full cursor-pointer rounded-xl border border-blue-100 bg-blue-50 px-5 py-3.5 font-semibold text-blue-600 transition-colors hover:bg-blue-100 sm:w-auto"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:mt-10 sm:gap-4"
          >
            {/* Customers */}
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold text-blue-600 sm:text-3xl">
                200+
              </h2>

              <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                Happy Customers
              </p>
            </motion.div>

            {/* Properties */}
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold text-blue-600 sm:text-3xl">
                10+
              </h2>

              <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                Properties for Clients
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold text-blue-600 sm:text-3xl">
                16+
              </h2>

              <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                Years of Experience
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full overflow-hidden bg-white lg:w-1/2"
        >
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            src="/Herosectionimg.png"
            alt="Luxury property"
            className="h-72 w-full object-cover sm:h-96 lg:h-full lg:min-h-[calc(100vh-5rem)]"
          />

          {/* Image overlay */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;