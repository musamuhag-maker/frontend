import {
    Search,
    UserRound,
    CalendarDays,
    House,
    MapPin,
    Headphones,
    Target,
    Eye,
} from "lucide-react"; import { HiLocationMarker } from "react-icons/hi";
import {
    BadgeCheck,
    Users,
    Zap,
    Gem,
    Heart,
} from "lucide-react";
import { HiHome, HiUserGroup, HiUsers } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
function About() {
    const navigate = useNavigate();

    return (
        <section className="bg-white text-gray-800 mt-5">

            <div className="flex justify-between ">
                <div className="ml-10 mt-20 ">
                    <h3 className="text-blue-800 font-bold text-[20px]">
                        About Luxury Dwell

                    </h3>
                    <h1 className="mt-5 text-4xl font-bold text-black">
                        Building Trust Through <br />
                        <span className="text-blue-800">Exceptional Real Estate</span> <br />
                        Services
                    </h1>

                    <p className="text-sm text-black mt-5">
                        At Luxury Dwells, we believe finding the perfect property should be <br />
                        exciting, stress-free, and rewarding. Whether you're searching for your <br />
                        dream home, a luxury apartment, commercial property, or an investment <br />
                        opportunity, we're committed to providing a seamiess experience <br />
                        backed by trust, professionalism, and innovation.
                    </p>
                    <div className="mt-8">
                        <button onClick={() => navigate("/properties")} className="p-3 rounded-md font-bold cursor-pointer bg-blue-700 text-white">Browse Properties</button>
                        <button className="p-3 w-40 ml-5 rounded-md font-bold cursor-pointer text-blue-700 border">Contact us</button>
                    </div>
                </div>

                <div className="mr-10 mt-5">
                    <img src="Abouthero.png" alt="" className="w-160 rounded-xl " />
                </div>

            </div>

            {/* Story */}

            <div className="max-w-7xl mx-auto px-6 py-28">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>

                        <img
                            src="Aboutimg.png"
                            alt=""
                            className="rounded-3xl shadow-xl"
                        />

                    </div>

                    <div>

                        <h3 className="text-xl mt-8 text-blue-700 font-bold">
                            Our Story
                        </h3>
                        <h1 className="text-4xl mt-3 font-bold text-black">
                            A Journey Built on Trust <br />
                            and Excellence
                        </h1>

                        <p className="text-black mt-5 text-sm leading-6">
                            Luxury Dwells was founded with one simple goal—to make
                            buying, selling, and renting properties easier for
                            everyone. We understand that real estate is one of life's
                            biggest decisions, and that's why we combine modern
                            technology with experienced professionals to ensure every
                            client receives outstanding service.
                        </p>

                        <p className="text-black mt-5 text-sm leading-6">
                            Over the years we've helped hundreds of families,
                            businesses, and investors find properties that perfectly
                            match their needs while maintaining transparency,
                            integrity, and excellence throughout every transaction.
                        </p>

                    </div>

                </div>

            </div>
            {/* First Cards */}

            <div className="grid grid-cols-4 gap-2 mt-10 my-20">

                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-4 flex items-center gap-4">

                    <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                        <HiHome className="text-white text-3xl" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-blue-700">
                            500+
                        </h2>

                        <h3 className="text-sm font-bold text-black mt-1">
                            Premium Properties
                        </h3>

                        <p className="text-black text-[13px] leading-5 mt-2 w-[170]">
                            Carefully verified listings across prime locations.
                        </p>
                    </div>

                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-4 flex items-center gap-4">

                    <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                        <HiUsers className="text-white text-3xl" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-blue-700">
                            200+
                        </h2>

                        <h3 className="text-sm font-bold text-black mt-1">
                            Expert Agents
                        </h3>

                        <p className="text-black text-[13px] leading-5 mt-2 w-[170]">
                            Experienced professionals ready to help every client.
                        </p>
                    </div>

                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-4 flex items-center gap-4">

                    <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                        <HiUserGroup className="text-white text-3xl" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-blue-700">
                            10K+
                        </h2>

                        <h3 className="text-sm font-bold text-black mt-1">
                            Happy Clients
                        </h3>

                        <p className="text-black text-[13px] leading-5 mt-2 w-[170]">
                            Thousands of satisfied buyers, sellers and investors.
                        </p>
                    </div>

                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-4 flex items-center gap-4">

                    <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                        <HiLocationMarker className="text-white text-3xl" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-blue-700">
                            15+
                        </h2>

                        <h3 className="text-sm font-bold text-black mt-1">
                            Cities Covered
                        </h3>

                        <p className="text-black text-[13px] leading-5 mt-2 w-[170]">
                            Providing premium real estate services nationwide.
                        </p>
                    </div>

                </div>

            </div>
            {/* Luxury Dwells Experience */}

            <div className="max-w-7xl mx-auto px-6 py-24">

                <div className="text-center">

                    <span className="text-blue-800 font-bold uppercase tracking-widest">
                        Our Process
                    </span>

                    <h2 className="text-4xl text-black font-bold mt-2">
                        Navigating the Luxury Dwells Experience
                    </h2>

                    <p className="text-black w-3xl mx-auto mt-3">
                        Our streamlined process is designed to make buying,
                        renting, or selling property simple and stress-free.
                        From discovering the perfect home to completing your
                        transaction, we're with you every step of the way.
                    </p>

                </div>

                <div className="grid grid-cols-6 gap-5 mt-16">

                    {/* Card 1 */}
                    <div className="w-45 h-80 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-black px-4 py-4 transition-all duration-300">

                        <div className="w-8 h-8 rounded-full bg-blue-700 text-white text-[11px] font-semibold flex items-center justify-center">
                            01
                        </div>

                        <div className="flex justify-center mt-3">
                            <Search size={38} strokeWidth={2} className="text-blue-700" />
                        </div>

                        <h3 className="mt-4 text-[15px] font-semibold leading-5 text-center text-black">
                            Discover <br />
                            Properties
                        </h3>

                        <p className="mt-2 text-[12px] text-black leading-6">
                            Browse through our carefully verified collection of premium homes,
                            apartments, commercial buildings, and investment properties in top
                            locations.
                        </p>

                    </div>

                    {/* Card 2 */}
                    <div className="w-45 h-80 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-black px-4 py-4 transition-all duration-300">

                        <div className="w-8 h-8 rounded-full bg-blue-700 text-white text-[11px] font-semibold flex items-center justify-center">
                            02
                        </div>

                        <div className="flex justify-center mt-3">
                            <UserRound size={38} strokeWidth={2} className="text-blue-700" />
                        </div>

                        <h3 className="mt-4 text-[15px] font-semibold leading-5 text-center text-black">
                            Connect with <br />
                            Agents
                        </h3>

                        <p className="mt-2 text-[12px] text-black leading-6">
                            Speak directly with our experienced real estate professionals who
                            will answer your questions and help you make informed decisions.
                        </p>

                    </div>

                    {/* Card 3 */}
                    <div className="w-45 h-80 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-black px-4 py-4 transition-all duration-300">

                        <div className="w-8 h-8 rounded-full bg-blue-700 text-white text-[11px] font-semibold flex items-center justify-center">
                            03
                        </div>

                        <div className="flex justify-center mt-3">
                            <CalendarDays size={38} strokeWidth={2} className="text-blue-700" />
                        </div>

                        <h3 className="mt-4 text-[15px] font-semibold leading-5 text-center text-black">
                            Schedule <br />
                            a Visit
                        </h3>

                        <p className="mt-2 text-[12px] text-black leading-6">
                            Book a property inspection at your convenience and experience the
                            home, neighborhood, and amenities before making your decision.
                        </p>

                    </div>

                    {/* Card 4 */}
                    <div className="w-45 h-80 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-black px-4 py-4 transition-all duration-300">

                        <div className="w-8 h-8 rounded-full bg-blue-700 text-white text-[11px] font-semibold flex items-center justify-center">
                            04
                        </div>

                        <div className="flex justify-center mt-3">
                            <House size={38} strokeWidth={2} className="text-blue-700" />
                        </div>

                        <h3 className="mt-4 text-[15px] font-semibold leading-5 text-center text-black">
                            Close the <br />
                            Deal
                        </h3>

                        <p className="mt-2 text-[12px] text-black leading-6">
                            Finalize your purchase or rental with confidence through secure
                            transactions and professional guidance from our dedicated team.
                        </p>

                    </div>

                    {/* Card 5 */}
                    <div className="w-45 h-80 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-black px-4 py-4 transition-all duration-300">

                        <div className="w-8 h-8 rounded-full bg-blue-700 text-white text-[11px] font-semibold flex items-center justify-center">
                            05
                        </div>

                        <div className="flex justify-center mt-3">
                            <MapPin size={38} strokeWidth={2} className="text-blue-700" />
                        </div>

                        <h3 className="mt-4 text-[15px] font-semibold leading-5 text-center text-black">
                            Explore <br />
                            Communities
                        </h3>

                        <p className="mt-2 text-[12px] text-black leading-6">
                            Discover neighborhoods with excellent schools, shopping centres,
                            transport links, healthcare, and recreational facilities.
                        </p>

                    </div>

                    {/* Card 6 */}
                    <div className="w-45 h-80 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-black px-4 py-4 transition-all duration-300">

                        <div className="w-8 h-8 rounded-full bg-blue-700 text-white text-[11px] font-semibold flex items-center justify-center">
                            06
                        </div>

                        <div className="flex justify-center mt-3">
                            <Headphones size={38} strokeWidth={2} className="text-blue-700" />
                        </div>

                        <h3 className="mt-4 text-[15px] font-semibold leading-5 text-center text-black">
                            Get Expert <br />
                            Support
                        </h3>

                        <p className="mt-2 text-[12px] text-black leading-6">
                            Receive dedicated assistance from our professional support team
                            throughout your buying, renting, or selling experience.
                        </p>

                    </div>

                </div>

            </div>
            {/* Why Choose Luxury Dwells */}

            <div className="max-w-7xl mx-auto px-6 py-24">

                <div className="text-center">

                    <span className="text-blue-700 font-bold uppercase tracking-widest">
                        WHY CHOOSE US
                    </span>

                    <h2 className="text-4xl font-bold text-black mt-3">
                        Why Thousands Trust Luxury Dwells
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-7">
                        We combine innovation, market expertise, and exceptional customer
                        service to deliver an unmatched real estate experience for buyers,
                        sellers, and investors.
                    </p>

                </div>

                <div className="grid grid-cols-6 gap-5 mt-16">

                    {/* Card 1 */}
                    <div className="w-43.74 h-70 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 px-5 py-6">

                        <div className="flex justify-center">
                            <BadgeCheck size={42} strokeWidth={2} className="text-blue-700" />
                        </div>

                        <h3 className="mt-5 text-center text-[18px] font-semibold text-black">
                            Verified Properties
                        </h3>

                        <p className="mt-4 text-[13px] text-center leading-6 text-gray-500">
                            Every property listed on our platform is carefully verified to
                            ensure authenticity, quality, and complete transparency.
                        </p>

                    </div>

                    {/* Card 2 */}
                    <div className="w-43.74 h-70 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 px-5 py-6">

                        <div className="flex justify-center">
                            <Users size={42} strokeWidth={2} className="text-blue-700" />
                        </div>

                        <h3 className="mt-5 text-center text-[18px] font-semibold text-black">
                            Trusted Experts
                        </h3>

                        <p className="mt-4 text-[13px] text-center leading-6 text-gray-500">
                            Our experienced real estate professionals guide you through every
                            stage of buying, renting, or selling a property.
                        </p>

                    </div>

                    {/* Card 3 */}
                    <div className="w-43.74 h-70 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 px-5 py-6">

                        <div className="flex justify-center">
                            <Zap size={42} strokeWidth={2} className="text-blue-700" />
                        </div>

                        <h3 className="mt-5 text-center text-[18px] font-semibold text-black">
                            Fast & Secure
                        </h3>

                        <p className="mt-4 text-[13px] text-center leading-6 text-gray-500">
                            We make property transactions simple, secure, and hassle-free using
                            modern technology and professional support.
                        </p>

                    </div>

                    {/* Card 4 */}
                    <div className="w-43.74 h-70 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 px-5 py-6">

                        <div className="flex justify-center">
                            <MapPin size={42} strokeWidth={2} className="text-blue-700" />
                        </div>

                        <h3 className="mt-5 text-center text-[18px] font-semibold text-black">
                            Prime Locations
                        </h3>

                        <p className="mt-4 text-[13px] text-center leading-6 text-gray-500">
                            Browse homes in highly desirable neighborhoods with access to
                            schools, healthcare, shopping centers, and transportation.
                        </p>

                    </div>

                    {/* Card 5 */}
                    <div className="w-43.74 h-70 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 px-5 py-6">

                        <div className="flex justify-center">
                            <Gem size={42} strokeWidth={2} className="text-blue-700" />
                        </div>

                        <h3 className="mt-5 text-center text-[18px] font-semibold text-black">
                            Premium Quality
                        </h3>

                        <p className="mt-4 text-[13px] text-center leading-6 text-gray-500">
                            From luxury villas to affordable apartments, we offer properties
                            that meet the highest standards of quality and value.
                        </p>

                    </div>

                    {/* Card 6 */}
                    <div className="w-43.74 h-70 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 px-5 py-6">

                        <div className="flex justify-center">
                            <Heart size={42} strokeWidth={2} className="text-blue-700" />
                        </div>

                        <h3 className="mt-5 text-center text-[18px] font-semibold text-black">
                            Customer First
                        </h3>

                        <p className="mt-4 text-[13px] text-center leading-6 text-gray-500">
                            Everything we do is focused on helping our clients achieve their
                            property goals with confidence and complete satisfaction.
                        </p>

                    </div>

                </div>

            </div>
            {/* Mission & Vision */}

            <div className="max-w-7xl mx-auto px-6 py-24">

                <div className="text-center">

                    <span className="text-blue-700 font-semibold uppercase tracking-widest">
                        Our Purpose
                    </span>

                    <h2 className="text-4xl font-bold mt-3">
                        Our Mission & Vision
                    </h2>

                    <p className="text-gray-600 max-w-3xl mx-auto mt-5 leading-8">
                        At Luxury Dwells, we're passionate about helping people
                        discover homes and investment opportunities that improve
                        their lives while building lasting relationships based on
                        trust, integrity, and excellence.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-10 mt-16">

                    {/* Mission */}

                    <div className="bg-white border border-blue-100 rounded-3xl shadow-lg p-10">

                        <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center text-white text-3xl">
                            <Target size={35} />
                        </div>

                        <h3 className="text-3xl text-black font-bold mt-8">
                            Our Mission
                        </h3>

                        <p className="text-gray-600 leading-8 mt-5">
                            Our mission is to make buying, selling, and renting
                            properties simple, transparent, and enjoyable.
                            We achieve this by combining cutting-edge technology,
                            trusted real estate professionals, and exceptional
                            customer service to deliver an experience our clients
                            can always rely on.
                        </p>

                    </div>

                    {/* Vision */}

                    <div className="bg-white border border-blue-100 rounded-3xl shadow-lg p-10">

                        <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center text-white text-3xl">
                            <Eye size={35} />
                        </div>

                        <h3 className="text-3xl text-black font-bold mt-8">
                            Our Vision
                        </h3>

                        <p className="text-gray-600 leading-8 mt-5">
                            We envision a future where finding the perfect home
                            is effortless for everyone. Luxury Dwells aims to be
                            one of the most trusted real estate platforms by
                            continuously innovating, expanding our services,
                            and exceeding customer expectations.
                        </p>

                    </div>

                </div>

            </div>

            {/* Call To Action */}

            <div className="relative bg-blue-700 bg-[url('/cta-bg.png')] bg-cover bg-center border-y border-blue-600 py-8 lg:py-0 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto lg:h-45 px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">

                    <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-6 text-center sm:text-left">

                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-500/30 border border-blue-400/20 flex items-center justify-center shadow-lg backdrop-blur-sm shrink-0">
                            <img
                                src="luxury-dwell-logo.png"
                                alt="Luxury Dwells Logo"
                                className="w-9 sm:w-11 object-contain"
                            />
                        </div>
                        <div>
                            <h2 className="text-white text-2xl sm:text-3xl lg:text-[28px] font-bold leading-tight">
                                Ready to Find Your{" "}
                                <br className="hidden sm:inline" />
                                Dream Property?
                            </h2>
                            <p className="text-blue-100 text-[14px] lg:text-[14px] mt-1.5 leading-relaxed max-w-xl opacity-90 font-normal">
                                Whether you're buying your first home, upgrading to a luxury
                                residence, or searching for your next investment, Luxury Dwells
                                is here to guide you every step of the way.
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
                        <button
                            onClick={() => navigate("/properties")}
                            className="w-full sm:w-52 h-13 rounded-lg bg-white text-blue-700 font-bold hover:bg-gray-50 transition duration-200 cursor-pointer text-[15px] shadow-sm"
                        >
                            Browse Properties
                        </button>

                        <button
                            onClick={() => navigate("/contact")}
                            className="w-full sm:w-40 h-13 rounded-lg border border-white/80 text-white font-semibold hover:bg-white/10 transition duration-200 cursor-pointer text-[15px]"
                        >
                            Contact Us
                        </button>
                    </div>

                </div>
            </div>
            );


        </section>
    );
}

export default About;