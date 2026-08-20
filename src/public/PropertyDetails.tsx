import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import {
  BedDouble,
  Phone,
  Mail,
  Star,
  Briefcase,
  MessageCircle,
  Bath,
  Ruler,
  MapPin,
  Check,
  Calendar,
  Navigation,
  Clock,
  Building2,
  ArrowRight,
} from "lucide-react";
import properties from "../mock/properties.json";
import agents from "../mock/agents.json";

function PropertyDetails() {
  const { propertyId } = useParams();

  const property = properties.find(
    (item) => item.propertyId === propertyId
  );

  if (!property) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 py-16 bg-gray-50">
        <div className="w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 p-7 sm:p-10 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-4xl">🏠</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-6">
            Property Not Found
          </h1>

          <p className="text-gray-500 mt-4 leading-relaxed text-sm sm:text-base">
            The property you're looking for doesn't exist or may have been
            removed.
          </p>

          <button
            onClick={() => window.history.back()}
            className="mt-7 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
          >
            Go Back
          </button>
        </div>
      </section>
    );
  }

  const agent = agents.find((item) => item.id === property.agentId);

  return (
    <main className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-10">
        {/* =========================
            IMAGE CAROUSEL
        ========================== */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
          <Carousel />
        </div>

        {/* =========================
            PROPERTY HEADER
        ========================== */}
        <div className="mt-8 sm:mt-10 lg:mt-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">
            {/* Title */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm sm:text-base mb-3">
                <Building2 size={18} />
                <span>{property.type}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                {property.title}
              </h1>

              <div className="flex items-start gap-2 sm:gap-3 mt-4 text-gray-600">
                <MapPin
                  className="text-blue-600 shrink-0 mt-0.5"
                  size={20}
                />

                <span className="text-base sm:text-lg lg:text-xl">
                  {property.location}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="lg:text-right">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-400 font-semibold">
                Property Price
              </p>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700 tracking-tight mt-1">
                ${property.price.toLocaleString()}
              </div>

              <p className="text-gray-500 mt-1 text-sm">
                One-time price
              </p>
            </div>
          </div>

          {/* =========================
              STATUS BADGES
          ========================== */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-blue-700 text-white px-5 sm:px-6 py-2.5 rounded-xl font-semibold text-sm sm:text-base shadow-md shadow-blue-100">
              {property.status}
            </span>

            <span className="bg-gray-50 border border-gray-200 px-5 sm:px-6 py-2.5 rounded-xl font-semibold text-sm sm:text-base">
              {property.type}
            </span>
          </div>

          {/* =========================
              QUICK INFO
          ========================== */}
          <div className="mt-8 sm:mt-10 border-y border-gray-100 py-5 sm:py-7">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Bedrooms */}
              <div className="group flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                <div className="bg-blue-50 p-2.5 sm:p-3 rounded-xl shrink-0">
                  <BedDouble
                    className="text-blue-700"
                    size={22}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Bedrooms
                  </p>

                  <p className="text-lg sm:text-xl font-bold text-gray-900 mt-0.5">
                    {property.bedrooms}
                  </p>
                </div>
              </div>

              {/* Bathrooms */}
              <div className="group flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                <div className="bg-blue-50 p-2.5 sm:p-3 rounded-xl shrink-0">
                  <Bath
                    className="text-blue-700"
                    size={22}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Bathrooms
                  </p>

                  <p className="text-lg sm:text-xl font-bold text-gray-900 mt-0.5">
                    {property.bathrooms}
                  </p>
                </div>
              </div>

              {/* Area */}
              <div className="group flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                <div className="bg-blue-50 p-2.5 sm:p-3 rounded-xl shrink-0">
                  <Ruler
                    className="text-blue-700"
                    size={22}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Area
                  </p>

                  <p className="text-lg sm:text-xl font-bold text-gray-900 mt-0.5 truncate">
                    {property.area}
                  </p>
                </div>
              </div>

              {/* Listed */}
              <div className="group flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                <div className="bg-blue-50 p-2.5 sm:p-3 rounded-xl shrink-0">
                  <Calendar
                    className="text-blue-700"
                    size={22}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Listed
                  </p>

                  <p className="text-lg sm:text-xl font-bold text-gray-900 mt-0.5">
                    2 days ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              ABOUT PROPERTY
          ========================== */}
          <section className="mt-12 sm:mt-16 lg:mt-20">
            <div className="max-w-4xl">
              <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">
                Property Overview
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                About this property
              </h2>

              <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg mt-5">
                {property.description}
              </p>
            </div>
          </section>

          {/* =========================
              LOCATION
          ========================== */}
          <section className="mt-14 sm:mt-18 lg:mt-20">
            <div className="mb-6 sm:mb-8">
              <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">
                Explore the Area
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Location
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-7">
              {/* Map */}
              <div className="lg:col-span-2 bg-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-[280px] sm:h-[380px] lg:h-[430px] relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
                  <div className="text-center px-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center">
                      <MapPin
                        className="text-blue-700"
                        size={34}
                      />
                    </div>

                    <p className="text-gray-800 font-bold text-lg sm:text-xl mt-5">
                      Interactive Map
                    </p>

                    <p className="text-gray-500 mt-2 text-sm sm:text-base">
                      Map integration coming soon
                    </p>
                  </div>
                </div>
              </div>

              {/* Location details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-5 sm:p-7 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3 mb-5 sm:mb-6">
                  <Navigation
                    className="text-blue-700"
                    size={24}
                  />
                  Address
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-2xl">
                    <MapPin
                      className="text-blue-700 shrink-0 mt-1"
                      size={21}
                    />

                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900">
                        {property.location}
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        Property Address
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl">
                    <Building2
                      className="text-blue-700 shrink-0 mt-1"
                      size={21}
                    />

                    <div>
                      <p className="font-semibold text-gray-900">
                        {property.type}
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        Property Type
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl">
                    <Clock
                      className="text-blue-700 shrink-0 mt-1"
                      size={21}
                    />

                    <div>
                      <p className="font-semibold text-gray-900">
                        Available Now
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        Move-in Ready
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-5 bg-blue-700 text-white py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:bg-blue-800 active:scale-[0.99] transition flex items-center justify-center gap-2">
                  <Navigation size={19} />
                  Get Directions
                </button>
              </div>
            </div>
          </section>

          {/* =========================
              SPECIAL FEATURES
          ========================== */}
          <section className="mt-14 sm:mt-18 lg:mt-20">
            <div className="mb-6 sm:mb-8">
              <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">
                What You Get
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Special Features
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {property.specialFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 bg-white border border-gray-100 hover:border-blue-300 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="bg-blue-700 text-white p-2.5 sm:p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                    <Check size={21} />
                  </div>

                  <span className="font-semibold text-base sm:text-lg text-gray-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* =========================
              AGENT
          ========================== */}
          {agent && (
            <section className="mt-16 sm:mt-20 lg:mt-24">
              <div className="mb-7 sm:mb-10">
                <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">
                  Your Property Specialist
                </p>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  Meet Your Dedicated Agent
                </h2>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Agent Cover */}
                <div className="h-28 sm:h-36 lg:h-40 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_35%)]" />

                  {/* Avatar */}
                  <div className="absolute left-5 sm:left-8 bottom-[-45px] sm:bottom-[-55px]">
                    <div className="relative">
                      <img
                        src={`/${agent.image}`}
                        alt={agent.name}
                        className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl sm:rounded-3xl border-4 sm:border-[7px] border-white object-cover shadow-2xl"
                      />

                      <div className="absolute bottom-1 right-1 sm:bottom-3 sm:right-3 w-5 h-5 sm:w-7 sm:h-7 bg-green-500 border-2 sm:border-[3px] border-white rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="pt-16 sm:pt-20 pb-7 sm:pb-10 px-5 sm:px-8 lg:px-12">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Agent Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                            {agent.name}
                          </h3>

                          <p className="text-blue-600 font-semibold text-base sm:text-lg lg:text-xl mt-1">
                            {agent.position}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 bg-amber-50 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl w-fit">
                          <Star
                            className="fill-amber-500 text-amber-500"
                            size={21}
                          />

                          <span className="font-bold text-xl sm:text-2xl text-amber-500">
                            {agent.rating}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 mt-5 sm:mt-7 leading-7 text-base max-w-2xl">
                        {agent.bio}
                      </p>
                    </div>

                    {/* Contact Stats */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:w-[430px]">
                      <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 text-center hover:bg-blue-50 transition-colors">
                        <Briefcase
                          className="text-blue-700 mx-auto mb-2"
                          size={27}
                        />

                        <p className="text-xs sm:text-sm text-gray-500">
                          Experience
                        </p>

                        <p className="text-lg sm:text-xl font-bold mt-1">
                          {agent.experience}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 text-center hover:bg-blue-50 transition-colors">
                        <Phone
                          className="text-blue-700 mx-auto mb-2"
                          size={27}
                        />

                        <p className="text-xs sm:text-sm text-gray-500">
                          Phone
                        </p>

                        <p className="font-semibold text-sm sm:text-base break-all mt-1">
                          {agent.phone}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 text-center hover:bg-blue-50 transition-colors">
                        <Mail
                          className="text-blue-700 mx-auto mb-2"
                          size={27}
                        />

                        <p className="text-xs sm:text-sm text-gray-500">
                          Email
                        </p>

                        <p className="font-semibold text-sm sm:text-base break-all mt-1">
                          {agent.email}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 text-center hover:bg-blue-50 transition-colors">
                        <MapPin
                          className="text-blue-700 mx-auto mb-2"
                          size={27}
                        />

                        <p className="text-xs sm:text-sm text-gray-500">
                          Based in
                        </p>

                        <p className="font-semibold text-sm sm:text-base mt-1">
                          {agent.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Agent Actions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
                    <button className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2.5 hover:brightness-105 active:scale-[0.985] transition-all shadow-lg shadow-blue-100">
                      <MessageCircle size={21} />
                      Message {agent.name.split(" ")[0]}
                    </button>

                    <button className="border-2 border-blue-700 text-blue-700 py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-blue-700 hover:text-white transition-all flex items-center justify-center gap-2">
                      View Full Profile
                      <ArrowRight size={19} />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}

export default PropertyDetails;