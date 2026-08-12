import { BiMessage } from "react-icons/bi";
import {
  BsArrowLeft,
  BsArrowRight,
  BsFileEarmarkText,
  BsSearch,
  BsTelephone,
} from "react-icons/bs";
import { HiOutlineArrowRight, HiStar } from "react-icons/hi2";
import { motion } from "framer-motion";

function Ourclient() {
  const testimonials = [
    {
      title: "Exceptional Service!",
      description:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      image: "/Agent.png",
    },
    {
      title: "Efficient and Reliable",
      description:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name: "Emelie Thomson",
      location: "USA, Florida",
      image: "/Agent2.png",
    },
    {
      title: "Trusted Advisors",
      description:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name: "John Mans",
      location: "USA, Nevada",
      image: "/Agent3.png",
    },
  ];

  const faqs = [
    {
      icon: <BsSearch />,
      title: "How do I search for properties on Luxury-Dwell?",
      description:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      icon: <BsFileEarmarkText />,
      title: "What documents do I need to sell my property through Estatein?",
      description:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      icon: <BsTelephone />,
      title: "How can I contact an Estatein agent?",
      description:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

      {/* ==================== TESTIMONIAL HEADER ==================== */}

      <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">

        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
            What Our Clients Say
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
        </div>

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-600 bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 sm:w-fit"
        >
          View All Testimonials
          <HiOutlineArrowRight className="text-lg" />
        </motion.button>

      </div>

      {/* ==================== TESTIMONIAL CARDS ==================== */}

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{ y: -6 }}
            className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 transition-shadow duration-300 hover:shadow-xl sm:p-8"
          >

            {/* Stars */}

            <div className="mb-5 flex items-center gap-1 text-blue-600 sm:mb-6">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <HiStar
                  key={starIndex}
                  className="text-lg sm:text-xl"
                />
              ))}
            </div>

            {/* Title */}

            <h3 className="text-lg font-bold text-black sm:text-xl">
              {testimonial.title}
            </h3>

            {/* Description */}

            <p className="mt-4 flex-1 text-sm leading-6 text-slate-600 sm:leading-7">
              {testimonial.description}
            </p>

            {/* Client */}

            <div className="mt-7 flex items-center gap-3 sm:mt-8">

              <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-slate-100 sm:h-12 sm:w-12">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <h4 className="truncate font-semibold text-black">
                  {testimonial.name}
                </h4>

                <p className="text-xs text-gray-500 sm:text-sm">
                  {testimonial.location}
                </p>
              </div>

            </div>

          </motion.article>
        ))}

      </div>

      {/* ==================== TESTIMONIAL CONTROLS ==================== */}

      <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5 text-sm text-gray-500 sm:mt-8">

        <span className="font-medium">
          01 <span className="text-gray-300">of</span> 10
        </span>

        <div className="flex items-center gap-2 sm:gap-3">

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonials"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 font-bold text-blue-600 transition hover:border-blue-600 hover:bg-blue-50 sm:h-11 sm:w-11"
          >
            <BsArrowLeft />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonials"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 font-bold text-blue-600 transition hover:border-blue-600 hover:bg-blue-50 sm:h-11 sm:w-11"
          >
            <BsArrowRight />
          </motion.button>

        </div>

      </div>

      {/* ==================== FAQ ICON ==================== */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-16 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 sm:mt-20"
      >
        <BiMessage className="text-3xl text-blue-600 sm:text-4xl" />
      </motion.div>

      {/* ==================== FAQ HEADER ==================== */}

      <div className="mt-5 mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">

        <div className="max-w-3xl">

          <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Find answers to common questions about Estatein's services,
            property listings, and the real estate process. We're here to
            provide clarity and assist you every step of the way.
          </p>

        </div>

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-600 bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 sm:w-fit"
        >
          View All FAQs
          <BsArrowRight className="text-lg" />
        </motion.button>

      </div>

      {/* ==================== FAQ CARDS ==================== */}

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

        {faqs.map((faq, index) => (
          <motion.article
            key={faq.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{ y: -6 }}
            className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 transition-shadow duration-300 hover:shadow-xl sm:p-8"
          >

            {/* Icon */}

            <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 sm:h-14 sm:w-14">
              <span className="text-2xl">
                {faq.icon}
              </span>
            </div>

            {/* Question */}

            <h3 className="text-lg font-bold leading-7 text-black sm:text-xl">
              {faq.title}
            </h3>

            {/* Answer */}

            <p className="mt-4 flex-1 text-sm leading-6 text-slate-600 sm:leading-7">
              {faq.description}
            </p>

            {/* Read More */}

            <motion.button
              whileHover={{ x: 3 }}
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600"
            >
              Read More
              <HiOutlineArrowRight className="text-lg" />
            </motion.button>

          </motion.article>
        ))}

      </div>

    </section>
  );
}

export default Ourclient;