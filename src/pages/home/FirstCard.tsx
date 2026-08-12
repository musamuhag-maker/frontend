import { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import {
  HiChevronRight,
  HiHeart,
  HiOutlineHeart,
  HiSparkles,
} from "react-icons/hi2";
import { MdVilla } from "react-icons/md";
import { TbBathFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import properties from "../../mock/properties.json";

function FirstCard() {
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const toggleLike = (propertyId: string) => {
    setLiked((prev) => ({
      ...prev,
      [propertyId]: !prev[propertyId],
    }));
  };

  return (
    <section className="w-full max-w-full overflow-x-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl min-w-0">

        {/* Section Label */}
        <div className="mt-2 flex items-center gap-2 text-blue-600">
          <HiSparkles className="shrink-0 text-xl sm:text-2xl" />

          <p className="text-xs font-bold tracking-wide sm:text-sm">
            HANDPICKED FOR YOU
          </p>
        </div>

        {/* Heading + Button */}
        <div className="mt-6 flex flex-col gap-5 sm:mt-8 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Featured Properties
          </h1>

          <Link
            to="/properties"
            className="group flex w-fit max-w-full items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 font-semibold text-blue-600 shadow-lg shadow-blue-100 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white sm:px-5"
          >
            <BiCameraMovie className="shrink-0 text-lg" />

            <span>View All Properties</span>

            <HiChevronRight className="shrink-0 text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:mt-7 sm:text-base">
          Explore our handpicked selection of featured properties. Each
          listing offers a glimpse into exceptional homes and investments
          available through Luxury Dwell.
        </p>

        {/* Cards */}
        <div className="mt-8 grid w-full min-w-0 grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {properties.slice(0, 3).map((property) => {
            const isLiked = liked[property.propertyId];

            return (
              <article
                key={property.propertyId}
                className="group relative min-w-0 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg shadow-gray-200/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/60"
              >

                {/* Property Image */}
                <div className="relative h-56 w-full overflow-hidden sm:h-60">
                  <img
                    src={property.images[0].img}
                    alt={property.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-60" />

                  {/* Status */}
                  <div className="absolute left-4 top-4 max-w-[70%] rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white shadow-lg sm:text-sm">
                    {property.status}
                  </div>

                  {/* Favourite */}
                  <button
                    type="button"
                    onClick={() => toggleLike(property.propertyId)}
                    aria-label={
                      isLiked
                        ? "Remove from favourites"
                        : "Add to favourites"
                    }
                    className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  >
                    {isLiked ? (
                      <HiHeart className="text-xl text-red-600" />
                    ) : (
                      <HiOutlineHeart className="text-xl text-gray-700" />
                    )}
                  </button>
                </div>

                {/* Property Info */}
                <div className="min-w-0 p-4 sm:p-5">
                  <h2 className="line-clamp-1 text-lg font-bold text-gray-900 sm:text-xl">
                    {property.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                    {property.description}{" "}
                    <Link
                      to={`/properties/${property.propertyId}`}
                      className="font-semibold text-blue-600 transition hover:text-blue-700"
                    >
                      Learn More
                    </Link>
                  </p>

                  {/* Property Details */}
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="flex min-w-0 items-center justify-center gap-1 rounded-lg bg-blue-50 px-2 py-2 text-xs font-semibold text-blue-600 sm:text-sm">
                      <FaBed className="shrink-0" />

                      <span className="truncate">
                        {property.bedrooms} Bed
                      </span>
                    </div>

                    <div className="flex min-w-0 items-center justify-center gap-1 rounded-lg bg-blue-50 px-2 py-2 text-xs font-semibold text-blue-600 sm:text-sm">
                      <TbBathFilled className="shrink-0" />

                      <span className="truncate">
                        {property.bathrooms} Bath
                      </span>
                    </div>

                    <div className="flex min-w-0 items-center justify-center gap-1 rounded-lg bg-blue-50 px-2 py-2 text-xs font-semibold text-blue-600 sm:text-sm">
                      <MdVilla className="shrink-0" />

                      <span className="truncate">
                        {property.type}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-5 flex flex-col gap-4 border-t border-gray-100 pt-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs text-gray-400">
                        Price
                      </p>

                      <h3 className="mt-1 text-xl font-bold text-blue-600">
                        ${property.price.toLocaleString()}
                      </h3>
                    </div>

                    <Link
                      to={`/properties/${property.propertyId}`}
                      className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-3 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 sm:w-auto"
                    >
                      View Property Details
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FirstCard;