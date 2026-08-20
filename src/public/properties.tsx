import { useMemo, useState } from "react";
import properties from "../mock/properties.json";
import {
  BedDouble,
  Bath,
  Ruler,
  MapPin,
  Heart,
  Search,
  SlidersHorizontal,
  ArrowRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type FilterType = "all" | "sale" | "rent";

const FILTERS: { key: FilterType; label: string }[] = [
  { key: "all", label: "All Properties" },
  { key: "sale", label: "For Sale" },
  { key: "rent", label: "For Rent" },
];

function Properties() {
  const navigate = useNavigate();

  const [liked, setLiked] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("luxuryDwellsLiked");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [showFilters, setShowFilters] = useState(false);

  const toggleLike = (id: string) => {
    setLiked((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      try {
        localStorage.setItem("luxuryDwellsLiked", JSON.stringify(updated));
      } catch {
        // localStorage unavailable (e.g. private browsing) — fail silently
      }

      if (updated.includes(id)) {
        toast.success("Property saved", {
          description: "Added to your favourites.",
        });
      }

      return updated;
    });
  };

  const handleViewProperty = (propertyId: string) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (!token) {
      toast.error("Login required", {
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

  const filteredProperties = useMemo(() => {
    const query = search.trim().toLowerCase();

    return properties.filter((property) => {
      const matchesSearch =
        !query ||
        property.title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.type.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query);

      const status = property.status.toLowerCase();

      const matchesFilter =
        filter === "all" ||
        (filter === "sale" &&
          (status.includes("sale") || status.includes("sell"))) ||
        (filter === "rent" &&
          (status.includes("rent") || status.includes("lease")));

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const clearFilters = () => {
    setSearch("");
    setFilter("all");
    setShowFilters(false);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
              Luxury Dwells
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Find your next home.
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-500 sm:text-lg">
              Explore carefully selected properties for sale and rent in
              desirable locations.
            </p>
          </div>

          {/* =================================================
              SEARCH AREA
          ================================================= */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Search */}
            <div className="relative w-full flex-1">
              <Search
                size={19}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by property, location or type..."
                aria-label="Search properties"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-10 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            {/* Filters button */}
            <button
              type="button"
              onClick={() => setShowFilters((prev) => !prev)}
              aria-expanded={showFilters}
              className={`flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition ${
                showFilters
                  ? "bg-blue-700 text-white"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-blue-200 hover:text-blue-700"
              }`}
            >
              <SlidersHorizontal size={18} />
              Filters
            </button>
          </div>

          {/* =================================================
              FILTERS
          ================================================= */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mt-3 flex flex-wrap items-center gap-2"
              >
                {FILTERS.map(({ key, label }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFilter(key)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                      filter === key
                        ? "bg-blue-700 text-white"
                        : "border border-gray-200 bg-white text-gray-600 hover:border-blue-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}

                {(search || filter !== "all") && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="ml-1 flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-red-600"
                  >
                    <X size={15} />
                    Clear
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================
          PROPERTY SECTION
      ===================================================== */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-700">
                Explore
              </p>

              <h2 className="mt-1 text-3xl font-bold tracking-tight text-gray-950">
                Available Properties
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {filteredProperties.length}{" "}
                {filteredProperties.length === 1 ? "property" : "properties"}{" "}
                available
              </p>
            </div>
          </div>

          {/* =================================================
              CARDS
          ================================================= */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
              {filteredProperties.map((property, index) => {
                const isLiked = liked.includes(property.propertyId);
                const thumbnail = property.images?.[0]?.img;

                return (
                  <motion.article
                    key={property.propertyId}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: Math.min(index * 0.05, 0.25),
                    }}
                    className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden bg-gray-100">
                      {thumbnail ? (
                        <motion.img
                          src={thumbnail}
                          alt={property.title}
                          whileHover={{ scale: 1.04 }}
                          transition={{ duration: 0.45 }}
                          className="h-60 w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-60 w-full items-center justify-center text-sm text-gray-400">
                          No image available
                        </div>
                      )}

                      {/* Status */}
                      <div className="absolute left-4 top-4">
                        <span className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-gray-900 shadow-lg">
                          {property.status}
                        </span>
                      </div>

                      {/* Favourite */}
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.88 }}
                        onClick={() => toggleLike(property.propertyId)}
                        aria-label={
                          isLiked
                            ? "Remove from favourites"
                            : "Save property"
                        }
                        aria-pressed={isLiked}
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg transition hover:bg-gray-50"
                      >
                        <Heart
                          size={19}
                          className={
                            isLiked
                              ? "fill-red-500 text-red-500"
                              : "text-gray-600"
                          }
                        />
                      </motion.button>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="truncate text-xl font-bold text-gray-950">
                        {property.title}
                      </h3>

                      {/* Location */}
                      <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
                        <MapPin size={15} className="shrink-0 text-blue-600" />
                        <span className="truncate">{property.location}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                        {property.description}
                      </p>

                      {/* Features */}
                      <div className="mt-5 flex items-center gap-5 border-y border-gray-100 py-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <BedDouble size={17} className="text-blue-700" />
                          {property.bedrooms}
                          <span className="hidden sm:inline">Beds</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <Bath size={17} className="text-blue-700" />
                          {property.bathrooms}
                          <span className="hidden sm:inline">Baths</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <Ruler size={17} className="text-blue-700" />
                          {property.area}
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className="mt-5 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                            Price
                          </p>

                          <p className="mt-1 text-2xl font-bold text-gray-950">
                            ${property.price.toLocaleString()}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            handleViewProperty(property.propertyId)
                          }
                          className="flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                        >
                          View
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            /* Empty state */
            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-20 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                <Search size={25} className="text-blue-700" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-950">
                No properties found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                Try searching for another location or property type.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                View All Properties
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Properties;