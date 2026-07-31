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
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Property Not Found</h1>
        <p className="text-gray-500 mt-4">The property you're looking for doesn't exist.</p>
      </section>
    );
  }

  const agent = agents.find((item) => item.id === property.agentId);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Carousel */}
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        <Carousel />
      </div>

      <div className="mt-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">
              {property.title}
            </h1>
            <div className="flex items-center gap-3 mt-4 text-gray-600">
              <MapPin className="text-blue-600" size={22} />
              <span className="text-xl">{property.location}</span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-5xl font-bold text-blue-700 tracking-tighter">
              ${property.price.toLocaleString()}
            </div>
            <p className="text-gray-500 mt-1">One-time price</p>
          </div>
        </div>

        {/* Quick Info */}
        <div className="mt-10 flex flex-wrap gap-6 border-y border-gray-100 py-8">
          <div className="flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
            <div className="bg-blue-50 p-4 rounded-xl">
              <BedDouble className="text-blue-700" size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Bedrooms</p>
              <p className="text-2xl font-semibold">{property.bedrooms}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
            <div className="bg-blue-50 p-4 rounded-xl">
              <Bath className="text-blue-700" size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Bathrooms</p>
              <p className="text-2xl font-semibold">{property.bathrooms}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
            <div className="bg-blue-50 p-4 rounded-xl">
              <Ruler className="text-blue-700" size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Area</p>
              <p className="text-2xl font-semibold">{property.area}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
            <div className="bg-blue-50 p-4 rounded-xl">
              <Calendar className="text-blue-700" size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Listed</p>
              <p className="text-2xl font-semibold">2 days ago</p>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex gap-4 mt-8">
          <span className="bg-blue-700 text-white px-7 py-3 rounded-2xl font-semibold text-lg shadow-md shadow-blue-200">
            {property.status}
          </span>
          <span className="bg-white border border-gray-200 px-7 py-3 rounded-2xl font-semibold text-lg">
            {property.type}
          </span>
        </div>

        {/* Description */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-6">About this property</h3>
          <p className="text-gray-600 leading-relaxed text-[17.5px] max-w-4xl">
            {property.description}
          </p>
        </div>

        {/* Location Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8">Location</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2 bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-96 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
                <div className="text-center">
                  <MapPin className="mx-auto text-blue-700 mb-4" size={64} />
                  <p className="text-gray-700 font-semibold text-xl">Interactive Map</p>
                  <p className="text-gray-500 mt-2">Map view coming soon</p>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Navigation className="text-blue-700" size={28} />
                Address
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                  <MapPin className="text-blue-700 shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">
                      {property.location}
                    </p>
                    <p className="text-gray-600 mt-1">Property Address</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                  <Building2 className="text-blue-700 shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {property.type}
                    </p>
                    <p className="text-gray-600 mt-1">Property Type</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                  <Clock className="text-blue-700 shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Available Now
                    </p>
                    <p className="text-gray-600 mt-1">Move-in Ready</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-700 text-white py-4 rounded-2xl font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                <Navigation size={20} />
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* Special Features */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8">Special Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {property.specialFeatures.map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 bg-white border border-gray-100 hover:border-blue-300 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="bg-blue-700 text-white p-3 rounded-2xl group-hover:scale-110 transition-transform">
                  <Check size={26} />
                </div>
                <div className="pt-1">
                  <span className="font-semibold text-xl text-gray-800">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Section */}
        {agent && (
          <section className="mt-24">
            <h3 className="text-3xl font-bold mb-10">Meet Your Dedicated Agent</h3>

            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Gradient Header */}
              <div className="h-40 bg-linear-to-r from-blue-700 via-indigo-600 to-blue-800 relative">
                <div className="absolute -bottom-16 left-8">
                  <div className="relative">
                    <img
                      src={`/${agent.image}`}
                      alt={agent.name}
                      className="w-40 h-40 rounded-3xl border-[7px] border-white object-cover shadow-2xl"
                    />
                    <div className="absolute bottom-3 right-3 w-7 h-7 bg-green-500 border-[3px] border-white rounded-full ring-2 ring-white/70"></div>
                  </div>
                </div>
              </div>

              <div className="pt-20 pb-10 px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-end gap-8">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div>
                        <h2 className="text-4xl font-bold text-gray-900">
                          {agent.name}
                        </h2>
                        <p className="text-blue-600 font-semibold text-xl mt-1">
                          {agent.position}
                        </p>
                      </div>

                      <div className="ml-auto flex items-center gap-2 bg-amber-50 px-6 py-3 rounded-2xl">
                        <Star className="fill-amber-500 text-amber-500" size={26} />
                        <span className="font-bold text-3xl text-amber-500">
                          {agent.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mt-8 leading-relaxed text-[17px] max-w-2xl">
                      {agent.bio}
                    </p>
                  </div>

                  {/* Contact Stats */}
                  <div className="grid grid-cols-2 gap-4 lg:gap-6 lg:min-w-95">
                    <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 transition-colors">
                      <Briefcase className="text-blue-700 mx-auto mb-3" size={32} />
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="text-2xl font-bold mt-1">{agent.experience}</p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 transition-colors">
                      <Phone className="text-blue-700 mx-auto mb-3" size={32} />
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-semibold text-lg break-all mt-1">{agent.phone}</p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 transition-colors">
                      <Mail className="text-blue-700 mx-auto mb-3" size={32} />
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold text-lg break-all mt-1">{agent.email}</p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 transition-colors">
                      <MapPin className="text-blue-700 mx-auto mb-3" size={32} />
                      <p className="text-sm text-gray-500">Based in</p>
                      <p className="font-semibold text-lg mt-1">{agent.location}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-12">
                  <button className="flex-1 bg-linear-to-r from-blue-700 to-indigo-600 text-white py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:brightness-105 active:scale-[0.985] transition-all shadow-lg shadow-blue-200">
                    <MessageCircle size={24} />
                    Message {agent.name.split(" ")[0]}
                  </button>

                  <button className="flex-1 border-2 border-blue-700 text-blue-700 py-5 rounded-2xl font-semibold text-lg hover:bg-blue-700 hover:text-white transition-all">
                    View Full Profile
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export default PropertyDetails;