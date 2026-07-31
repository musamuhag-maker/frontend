import {
    Home,
    Users,
    TrendingUp,
    ShieldCheck,
    Award,
    CalendarClock
} from "lucide-react";

const services = [
    {
        icon: <Home size={42} className="text-blue-600" />,
        title: "Property Sales",
        description: "Sell your property faster and at the best price with professional marketing and expert negotiation.",
        features: ["Professional Photography", "Virtual Tours", "Targeted Marketing", "Expert Negotiation"],
    },
    {
        icon: <Users size={42} className="text-blue-600" />,
        title: "Property Buying",
        description: "Find your dream home with dedicated support and access to exclusive listings.",
        features: ["Buyer Representation", "Market Analysis", "Property Inspections", "Smooth Closing"],
    },
    {
        icon: <CalendarClock size={42} className="text-blue-600" />,
        title: "Rental Management",
        description: "Full-service rental management so you can enjoy passive income without the hassle.",
        features: ["Tenant Screening", "Rent Collection", "Maintenance", "Legal Compliance"],
    },
    {
        icon: <TrendingUp size={42} className="text-blue-600" />,
        title: "Investment Advisory",
        description: "Strategic advice to help you make smart real estate investments and grow your portfolio.",
        features: ["ROI Analysis", "Market Forecasting", "Portfolio Strategy", "Investment Planning"],
    },
    {
        icon: <ShieldCheck size={42} className="text-blue-600" />,
        title: "Property Valuation",
        description: "Accurate, professional property valuations backed by real market data.",
        features: ["Certified Appraisers", "Detailed Reports", "Comparative Analysis", "Investment Insights"],
    },
    {
        icon: <Award size={42} className="text-blue-600" />,
        title: "Luxury Concierge",
        description: "White-glove service for high-end clients including relocation and premium support.",
        features: ["Private Viewings", "Relocation Help", "Interior Styling", "VIP Services"],
    },
];

function Services() {
    return (
        <section className="w-full bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-widest text-sm uppercase">OUR SERVICES</span>
                    <h1 className="text-5xl font-bold text-gray-900 mt-4">Premium Real Estate Solutions</h1>
                    <p className="text-black mt-4 text-lg max-w-2xl mx-auto">
                        Comprehensive services designed to make your real estate journey seamless and successful.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Icon Area */}
                            <div className="h-56 flex items-center justify-center bg-gray-50 border-b border-gray-100">
                                <div className="group-hover:scale-110 transition-transform duration-500">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h2>

                                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 line-clamp-3">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <div className="space-y-2.5 mb-8">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;