import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiHome, HiArrowLeft } from "react-icons/hi";

function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-100 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-xl rounded-3xl bg-white p-10 text-center shadow-2xl"
            >
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    src="/luxury-dwell-logo.png"
                    alt="Luxury Dwells"
                    className="mx-auto mb-6 h-20 w-20"
                />

                <h1 className="text-8xl font-extrabold text-blue-600">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-4 text-gray-600 leading-7">
                    The page you're looking for doesn't exist, may have been moved,
                    or the URL might be incorrect.
                </p>

                <div className="mt-10 flex justify-center gap-4">
                    <Link
                        to="/"
                        className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        <HiHome />
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                    >
                        <HiArrowLeft />
                        Go Back
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default NotFound;