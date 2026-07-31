import { useState } from "react";
import properties from "../mock/properties.json";
import {
    BedDouble,
    Bath,
    Ruler,
    MapPin,
    Heart,
} from "lucide-react";
import { easeInOut, easeOut, motion } from "framer-motion";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


function Properties() {
    const navigate = useNavigate();
     
    const [liked, setLiked] = useState<string[]>([]);
    

    const toggleLike = (id: string) => {
        if (liked.includes(id)) {
            setLiked(liked.filter((item) => item !== id));
        } else {
            setLiked([...liked, id]);
        }
    };
    const handleViewProperty = (propertyId: string) => {
        const token = localStorage.getItem("token");

        if (!token) {
            toast.error("Login Required", {
                description: "Please login to view property details.",
                action: {
                    label: "Login",
                    onClick: () => navigate("/login"),
                },
            });

            return;
        }

        navigate(`/properties/${propertyId}`);
    };
    return (
        <div className="w-full bg-gray-50 py-14 px-10 mt-2">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-5 w200">
                <input type="text" placeholder="Search For A Property" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition" />

            </motion.div>
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeInOut }}

                className="w-full">

                <div className="max-w-7xl mx-auto">

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

                        {properties.map((property) => (
                            <div
                                key={property.propertyId}
                                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                {/* Card Image */}
                                <div className="relative overflow-hidden">

                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ ease: easeOut }}
                                        src={property.images[0].img}
                                        alt={property.title}
                                        className="w-full h-60 object-cover "
                                    />

                                    {/* for sale/for rent */}
                                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow">
                                        {property.status}
                                    </span>

                                    {/* Favourite button */}
                                    <motion.button

                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.9, y: 2 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                        onClick={() =>
                                            toggleLike(property.propertyId)
                                        }
                                        className="absolute top-4 right-4 w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
                                    >
                                        <Heart
                                            size={18}
                                            className={
                                                liked.includes(property.propertyId)
                                                    ? "fill-red-500 text-red-500"
                                                    : "text-gray-500"
                                            }
                                        />
                                    </motion.button>
                                </div>

                                {/* Card Details */}
                                <div className="p-5">

                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {property.title}
                                    </h2>

                                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                        {property.description}
                                    </p>

                                    {/* Property Info */}
                                    <div className="flex items-center justify-between mt-5 text-sm text-gray-700">

                                        <div className="flex items-center gap-1">
                                            <BedDouble
                                                size={17}
                                                className="text-blue-600"
                                            />
                                            <span>{property.bedrooms} Beds</span>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <Bath
                                                size={17}
                                                className="text-blue-600"
                                            />
                                            <span>{property.bathrooms} Baths</span>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <Ruler
                                                size={17}
                                                className="text-blue-600"
                                            />
                                            <span>{property.area}</span>
                                        </div>

                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center gap-2 mt-4 text-gray-700">

                                        <MapPin
                                            size={17}
                                            className="text-blue-600"
                                        />

                                        <span className="text-sm truncate">
                                            {property.location}
                                        </span>

                                    </div>

                                    {/* Price & Button */}
                                    <div className="flex justify-between items-end mt-6">

                                        <div>

                                            <p className="text-gray-500 text-sm">
                                                Price
                                            </p>

                                            <h3 className="text-3xl font-bold text-blue-600">
                                                $
                                                {property.price.toLocaleString()}
                                            </h3>

                                        </div>

                                        <button
                                            onClick={() => handleViewProperty(property.propertyId)}
                                            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                                        >
                                            View
                                        </button>

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </motion.section>
        </div>
    );
}

export default Properties;