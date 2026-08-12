import {
    Search,
    UserRound,
    CalendarDays,
    House,
    MapPin,
    Headphones,
    Target,
    Eye,
} from "lucide-react";

import { HiLocationMarker } from "react-icons/hi";

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
        <section className="mt-5 w-full overflow-x-hidden bg-white text-gray-800">

            {/* ========================================================= */}
            {/* HERO SECTION */}
            {/* ========================================================= */}

            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:justify-between lg:gap-12 lg:px-8 lg:py-20">

                {/* Left Side */}

                <div className="w-full lg:w-1/2">

                    <h3 className="text-lg font-bold text-blue-800 sm:text-xl">
                        About Luxury Dwell
                    </h3>

                    <h1 className="mt-5 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Building Trust Through{" "}
                        <br className="hidden sm:block" />

                        <span className="text-blue-800">
                            Exceptional Real Estate
                        </span>{" "}

                        <br className="hidden sm:block" />

                        Services
                    </h1>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-black sm:text-base">
                        At Luxury Dwells, we believe finding the perfect property
                        should be exciting, stress-free, and rewarding. Whether
                        you're searching for your dream home, a luxury apartment,
                        commercial property, or an investment opportunity, we're
                        committed to providing a seamless experience backed by
                        trust, professionalism, and innovation.
                    </p>

                    <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row">

                        <button
                            onClick={() => navigate("/properties")}
                            className="w-full cursor-pointer rounded-md bg-blue-700 px-5 py-3 font-bold text-white transition duration-300 hover:bg-blue-800 sm:w-auto"
                        >
                            Browse Properties
                        </button>

                        <button
                            onClick={() => navigate("/contact")}
                            className="w-full cursor-pointer rounded-md border border-blue-200 px-5 py-3 font-bold text-blue-700 transition duration-300 hover:bg-blue-50 sm:w-40"
                        >
                            Contact Us
                        </button>

                    </div>

                </div>

                {/* Right Side */}

                <div className="w-full lg:w-1/2">

                    <img
                        src="/Abouthero.png"
                        alt="Luxury Dwell property"
                        className="h-auto w-full rounded-xl object-cover shadow-xl"
                    />

                </div>

            </div>


            {/* ========================================================= */}
            {/* STORY */}
            {/* ========================================================= */}

            <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">

                <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">

                    <div className="w-full">

                        <img
                            src="/Aboutimg.png"
                            alt="Luxury Dwell story"
                            className="h-auto w-full rounded-3xl object-cover shadow-xl"
                        />

                    </div>

                    <div className="w-full">

                        <h3 className="mt-2 text-xl font-bold text-blue-700">
                            Our Story
                        </h3>

                        <h1 className="mt-3 text-3xl font-bold leading-tight text-black sm:text-4xl">
                            A Journey Built on Trust{" "}
                            <br className="hidden sm:block" />
                            and Excellence
                        </h1>

                        <p className="mt-5 text-sm leading-7 text-black sm:text-base">
                            Luxury Dwells was founded with one simple goal—to make
                            buying, selling, and renting properties easier for
                            everyone. We understand that real estate is one of life's
                            biggest decisions, and that's why we combine modern
                            technology with experienced professionals to ensure every
                            client receives outstanding service.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-black sm:text-base">
                            Over the years we've helped hundreds of families,
                            businesses, and investors find properties that perfectly
                            match their needs while maintaining transparency,
                            integrity, and excellence throughout every transaction.
                        </p>

                    </div>

                </div>

            </div>


            {/* ========================================================= */}
            {/* FIRST STATISTICS CARDS */}
            {/* ========================================================= */}

            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">

                {/* Card 1 */}

                <div className="flex w-full items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-700 sm:h-16 sm:w-16">
                        <HiHome className="text-2xl text-white sm:text-3xl" />
                    </div>

                    <div className="min-w-0">

                        <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl">
                            500+
                        </h2>

                        <h3 className="mt-1 text-sm font-bold text-black">
                            Premium Properties
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-black sm:text-[13px]">
                            Carefully verified listings across prime locations.
                        </p>

                    </div>

                </div>


                {/* Card 2 */}

                <div className="flex w-full items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-700 sm:h-16 sm:w-16">
                        <HiUsers className="text-2xl text-white sm:text-3xl" />
                    </div>

                    <div className="min-w-0">

                        <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl">
                            200+
                        </h2>

                        <h3 className="mt-1 text-sm font-bold text-black">
                            Expert Agents
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-black sm:text-[13px]">
                            Experienced professionals ready to help every client.
                        </p>

                    </div>

                </div>


                {/* Card 3 */}

                <div className="flex w-full items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-700 sm:h-16 sm:w-16">
                        <HiUserGroup className="text-2xl text-white sm:text-3xl" />
                    </div>

                    <div className="min-w-0">

                        <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl">
                            10K+
                        </h2>

                        <h3 className="mt-1 text-sm font-bold text-black">
                            Happy Clients
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-black sm:text-[13px]">
                            Thousands of satisfied buyers, sellers and investors.
                        </p>

                    </div>

                </div>


                {/* Card 4 */}

                <div className="flex w-full items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-700 sm:h-16 sm:w-16">
                        <HiLocationMarker className="text-2xl text-white sm:text-3xl" />
                    </div>

                    <div className="min-w-0">

                        <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl">
                            15+
                        </h2>

                        <h3 className="mt-1 text-sm font-bold text-black">
                            Cities Covered
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-black sm:text-[13px]">
                            Providing premium real estate services nationwide.
                        </p>

                    </div>

                </div>

            </div>


            {/* ========================================================= */}
            {/* LUXURY DWELLS EXPERIENCE */}
            {/* ========================================================= */}

            <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

                <div className="text-center">

                    <span className="font-bold uppercase tracking-widest text-blue-800">
                        Our Process
                    </span>

                    <h2 className="mt-2 text-3xl font-bold text-black sm:text-4xl">
                        Navigating the Luxury Dwells Experience
                    </h2>

                    <p className="mx-auto mt-3 w-full max-w-3xl text-sm leading-7 text-black sm:text-base">
                        Our streamlined process is designed to make buying,
                        renting, or selling property simple and stress-free.
                        From discovering the perfect home to completing your
                        transaction, we're with you every step of the way.
                    </p>

                </div>


                <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

                    {/* Card 1 */}

                    <div className="flex min-h-80 w-full flex-col rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300">

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-[11px] font-semibold text-white">
                            01
                        </div>

                        <div className="mt-3 flex justify-center">
                            <Search
                                size={38}
                                strokeWidth={2}
                                className="text-blue-700"
                            />
                        </div>

                        <h3 className="mt-4 text-center text-[15px] font-semibold leading-5 text-black">
                            Discover <br />
                            Properties
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-black">
                            Browse through our carefully verified collection of premium homes,
                            apartments, commercial buildings, and investment properties in top
                            locations.
                        </p>

                    </div>


                    {/* Card 2 */}

                    <div className="flex min-h-80 w-full flex-col rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300">

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-[11px] font-semibold text-white">
                            02
                        </div>

                        <div className="mt-3 flex justify-center">
                            <UserRound
                                size={38}
                                strokeWidth={2}
                                className="text-blue-700"
                            />
                        </div>

                        <h3 className="mt-4 text-center text-[15px] font-semibold leading-5 text-black">
                            Connect with <br />
                            Agents
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-black">
                            Speak directly with our experienced real estate professionals who
                            will answer your questions and help you make informed decisions.
                        </p>

                    </div>


                    {/* Card 3 */}

                    <div className="flex min-h-80 w-full flex-col rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300">

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-[11px] font-semibold text-white">
                            03
                        </div>

                        <div className="mt-3 flex justify-center">
                            <CalendarDays
                                size={38}
                                strokeWidth={2}
                                className="text-blue-700"
                            />
                        </div>

                        <h3 className="mt-4 text-center text-[15px] font-semibold leading-5 text-black">
                            Schedule <br />
                            a Visit
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-black">
                            Book a property inspection at your convenience and experience the
                            home, neighborhood, and amenities before making your decision.
                        </p>

                    </div>


                    {/* Card 4 */}

                    <div className="flex min-h-80 w-full flex-col rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300">

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-[11px] font-semibold text-white">
                            04
                        </div>

                        <div className="mt-3 flex justify-center">
                            <House
                                size={38}
                                strokeWidth={2}
                                className="text-blue-700"
                            />
                        </div>

                        <h3 className="mt-4 text-center text-[15px] font-semibold leading-5 text-black">
                            Close the <br />
                            Deal
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-black">
                            Finalize your purchase or rental with confidence through secure
                            transactions and professional guidance from our dedicated team.
                        </p>

                    </div>


                    {/* Card 5 */}

                    <div className="flex min-h-80 w-full flex-col rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300">

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-[11px] font-semibold text-white">
                            05
                        </div>

                        <div className="mt-3 flex justify-center">
                            <MapPin
                                size={38}
                                strokeWidth={2}
                                className="text-blue-700"
                            />
                        </div>

                        <h3 className="mt-4 text-center text-[15px] font-semibold leading-5 text-black">
                            Explore <br />
                            Communities
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-black">
                            Discover neighborhoods with excellent schools, shopping centres,
                            transport links, healthcare, and recreational facilities.
                        </p>

                    </div>


                    {/* Card 6 */}

                    <div className="flex min-h-80 w-full flex-col rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300">

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-[11px] font-semibold text-white">
                            06
                        </div>

                        <div className="mt-3 flex justify-center">
                            <Headphones
                                size={38}
                                strokeWidth={2}
                                className="text-blue-700"
                            />
                        </div>

                        <h3 className="mt-4 text-center text-[15px] font-semibold leading-5 text-black">
                            Get Expert <br />
                            Support
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-black">
                            Receive dedicated assistance from our professional support team
                            throughout your buying, renting, or selling experience.
                        </p>

                    </div>

                </div>

            </div>


            {/* ========================================================= */}
            {/* WHY CHOOSE LUXURY DWELLS */}
            {/* ========================================================= */}

            <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

                <div className="text-center">

                    <span className="font-bold uppercase tracking-widest text-blue-700">
                        WHY CHOOSE US
                    </span>

                    <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl">
                        Why Thousands Trust Luxury Dwells
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                        We combine innovation, market expertise, and exceptional customer
                        service to deliver an unmatched real estate experience for buyers,
                        sellers, and investors.
                    </p>

                </div>


                <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

                    {/* Card 1 */}

                    <div className="flex min-h-70 w-full flex-col rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div className="flex justify-center">
                            <BadgeCheck
                                size={42}
                                strokeWidth={2}
                                className="text-blue-700"
                            />
                        </div>

                        <h3 className="mt-5 text-center text-lg font-semibold text-black">
                            Verified Properties
                        </h3>

                        <p className="mt-4 text-center text-[13px] leading-6 text-gray-500">
                            Every property listed on our platform is carefully verified to
                            ensure authenticity, quality, and complete transparency.
                        </p>

                    </div>


                    {/* Card 2 */}

                    <div className="flex min-h-70 w-full flex-col rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div className="flex justify-center">
                            <Users
                                size={42}
                                strokeWidth={2}
                                className="text-blue-700"
                            />
                        </div>

                        <h3 className="mt-5 text-center text-lg font-semibold text-black">
                            Trusted Experts
                        </h3>

                        <p className="mt-4 text-center text-[13px] leading-6 text-gray-500">
                            Our experienced real estate professionals guide you through every
                            stage of buying, renting, or selling a property.
                        </p>

                    </div>


                    {/* Card 3 */}

                    <div className="flex min-h-70 w-full flex-col rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div className="flex justify-center">
                            <Zap
                                size={42}
                                strokeWidth={2}
                                className="text-blue-700"
                            />
                        </div>

                        <h3 className="mt-5 text-center text-lg font-semibold text-black">
                            Fast & Secure
                        </h3>

                        <p className="mt-4 text-center text-[13px] leading-6 text-gray-500">
                            We make property transactions simple, secure, and hassle-free using
                            modern technology and professional support.
                        </p>

                    </div>


                    {/* Card 4 */}

                    <div className="flex min-h-70 w-full flex-col rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div className="flex justify-center">
                            <MapPin
                                size={42}
                                strokeWidth={2}
                                className="text-blue-700"
                            />
                        </div>

                        <h3 className="mt-5 text-center text-lg font-semibold text-black">
                            Prime Locations
                        </h3>

                        <p className="mt-4 text-center text-[13px] leading-6 text-gray-500">
                            Browse homes in highly desirable neighborhoods with access to
                            schools, healthcare, shopping centers, and transportation.
                        </p>

                    </div>


                    {/* Card 5 */}

                    <div className="flex min-h-70 w-full flex-col rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div className="flex justify-center">
                            <Gem
                                size={42}
                                strokeWidth={2}
                                className="text-blue-700"
                            />
                        </div>

                        <h3 className="mt-5 text-center text-lg font-semibold text-black">
                            Premium Quality
                        </h3>

                        <p className="mt-4 text-center text-[13px] leading-6 text-gray-500">
                            From luxury villas to affordable apartments, we offer properties
                            that meet the highest standards of quality and value.
                        </p>

                    </div>


                    {/* Card 6 */}

                    <div className="flex min-h-70 w-full flex-col rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div className="flex justify-center">
                            <Heart
                                size={42}
                                strokeWidth={2}
                                className="text-blue-700"
                            />
                        </div>

                        <h3 className="mt-5 text-center text-lg font-semibold text-black">
                            Customer First
                        </h3>

                        <p className="mt-4 text-center text-[13px] leading-6 text-gray-500">
                            Everything we do is focused on helping our clients achieve their
                            property goals with confidence and complete satisfaction.
                        </p>

                    </div>

                </div>

            </div>


            {/* ========================================================= */}
            {/* MISSION & VISION */}
            {/* ========================================================= */}

            <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

                <div className="text-center">

                    <span className="font-semibold uppercase tracking-widest text-blue-700">
                        Our Purpose
                    </span>

                    <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl">
                        Our Mission & Vision
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        At Luxury Dwells, we're passionate about helping people
                        discover homes and investment opportunities that improve
                        their lives while building lasting relationships based on
                        trust, integrity, and excellence.
                    </p>

                </div>


                <div className="mt-12 grid w-full gap-8 lg:grid-cols-2 lg:gap-10">

                    {/* Mission */}

                    <div className="w-full rounded-3xl border border-blue-100 bg-white p-6 shadow-lg sm:p-8 lg:p-10">

                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-white">
                            <Target size={35} />
                        </div>

                        <h3 className="mt-8 text-2xl font-bold text-black sm:text-3xl">
                            Our Mission
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                            Our mission is to make buying, selling, and renting
                            properties simple, transparent, and enjoyable.
                            We achieve this by combining cutting-edge technology,
                            trusted real estate professionals, and exceptional
                            customer service to deliver an experience our clients
                            can always rely on.
                        </p>

                    </div>


                    {/* Vision */}

                    <div className="w-full rounded-3xl border border-blue-100 bg-white p-6 shadow-lg sm:p-8 lg:p-10">

                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-white">
                            <Eye size={35} />
                        </div>

                        <h3 className="mt-8 text-2xl font-bold text-black sm:text-3xl">
                            Our Vision
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                            We envision a future where finding the perfect home
                            is effortless for everyone. Luxury Dwells aims to be
                            one of the most trusted real estate platforms by
                            continuously innovating, expanding our services,
                            and exceeding customer expectations.
                        </p>

                    </div>

                </div>

            </div>


            {/* ========================================================= */}
            {/* CALL TO ACTION */}
            {/* ========================================================= */}

            <div className="relative w-full overflow-hidden border-y border-blue-600 bg-blue-700 bg-[url('/cta-bg.png')] bg-cover bg-center py-10 sm:py-12 lg:py-0">

                <div className="pointer-events-none absolute inset-0 bg-blue-900/20" />

                <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 lg:h-45 lg:flex-row lg:px-8">

                    <div className="flex w-full flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left lg:items-center">

                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/30 shadow-lg backdrop-blur-sm sm:h-20 sm:w-20">

                            <img
                                src="/luxury-dwell-logo.png"
                                alt="Luxury Dwells Logo"
                                className="w-9 object-contain sm:w-11"
                            />

                        </div>

                        <div>

                            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[28px]">
                                Ready to Find Your{" "}
                                <br className="hidden sm:inline" />
                                Dream Property?
                            </h2>

                            <p className="mt-1.5 max-w-xl text-sm font-normal leading-relaxed text-blue-100 opacity-90">
                                Whether you're buying your first home, upgrading to a luxury
                                residence, or searching for your next investment, Luxury Dwells
                                is here to guide you every step of the way.
                            </p>

                        </div>

                    </div>


                    <div className="flex w-full shrink-0 flex-col gap-4 sm:w-auto sm:flex-row">

                        <button
                            onClick={() => navigate("/properties")}
                            className="h-13 w-full cursor-pointer rounded-lg bg-white px-5 text-[15px] font-bold text-blue-700 shadow-sm transition duration-200 hover:bg-gray-50 sm:w-52"
                        >
                            Browse Properties
                        </button>

                        <button
                            onClick={() => navigate("/contact")}
                            className="h-13 w-full cursor-pointer rounded-lg border border-white/80 px-5 text-[15px] font-semibold text-white transition duration-200 hover:bg-white/10 sm:w-40"
                        >
                            Contact Us
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;