import { BsShieldFillCheck } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-between bg-black">

                {/* Left Side */}
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-gray-50 w-1/2 pt-20 pl-3"
                >

                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-blue-600 flex gap-2 mb-5 items-center"
                    >
                        <BsShieldFillCheck />
                        Trusted by Thousands
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-2xl text-black font-bold mb-3.5"
                    >
                        Discover Exceptional Properties Designed
                        <br />
                        for Your{" "}
                        <span className="text-blue-600">
                            Lifestyle
                        </span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-[14px]"
                    >
                        Your journey to finding the perfect property begins here.
                        Explore our
                        <br />
                        listings to find the home that matches your dreams.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex gap-5"
                    >
                        <motion.button
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => navigate("/properties")}
                            className="flex items-center gap-2 cursor-pointer px-5 py-4 rounded-md font-semibold border mt-10 text-white bg-blue-600"
                        >
                            Browse Properties

                            <motion.span
                                whileHover={{ x: 4 }}
                            >
                                <FaArrowRight className="text-sm" />
                            </motion.span>
                        </motion.button>

                        <motion.button
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => navigate("/about")}
                            className="cursor-pointer px-5 py-3 bg-blue-50 rounded-md font-semibold border mt-10 text-blue-600"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>

                    {/* Statistics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex gap-5"
                    >

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white border border-gray-200 rounded-xl mt-10 p-3 w-40 shadow-sm shadow-black"
                        >
                            <h2 className="text-3xl font-bold text-blue-600">
                                200+
                            </h2>

                            <p className="text-[15px] text-gray-600">
                                Happy Customers
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 border border-gray-200 rounded-xl mt-10 p-3 w-40 shadow-sm shadow-black"
                        >
                            <h2 className="text-3xl font-bold text-blue-600">
                                10+
                            </h2>

                            <p className="text-[15px] text-gray-600">
                                Properties for Clients
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 border border-gray-200 rounded-xl mt-10 p-3 w-40 shadow-sm shadow-black"
                        >
                            <h2 className="text-3xl font-bold text-blue-600">
                                16+
                            </h2>

                            <p className="text-[15px] text-gray-600">
                                Years of Experience
                            </p>
                        </motion.div>

                    </motion.div>

                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white w-1/2"
                >
                    <motion.img
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                        src="/Herosectionimg.png"
                        alt="Luxury property"
                        className="w-full"
                    />
                </motion.div>

            </div>
        </div>
    );
}

export default Hero;