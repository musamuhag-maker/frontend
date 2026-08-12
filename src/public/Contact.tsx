import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineChatAlt2,
} from "react-icons/hi";

function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // Name validation
    if (name.length < 3) {
      toast.error("Invalid name", {
        description: "Your name must be at least 3 characters long.",
      });
      return;
    }

    if (name.length > 50) {
      toast.error("Name is too long", {
        description: "Your name cannot be more than 50 characters.",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Invalid email", {
        description: "Please enter a valid email address.",
      });
      return;
    }

    // Message validation
    if (message.length < 10) {
      toast.error("Message is too short", {
        description: "Your message must be at least 10 characters long.",
      });
      return;
    }

    if (message.length > 500) {
      toast.error("Message is too long", {
        description: "Your message cannot be more than 500 characters.",
      });
      return;
    }

    // Success
    toast.success("Message sent successfully!", {
      description:
        "Thank you for contacting Luxury Dwell. We'll get back to you soon.",
      duration: 4000,
    });

    form.reset();
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gray-100 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl sm:-left-32 sm:-top-32 sm:h-80 sm:w-80" />

        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-blue-300/30 blur-3xl sm:-bottom-32 sm:-right-32 sm:h-80 sm:w-80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-3xl"
      >
        <div className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl shadow-blue-200/50 sm:rounded-3xl">
          {/* Top accent */}
          <div className="h-1 w-full bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 sm:h-1.5" />

          <div className="p-5 sm:p-8 md:p-10 lg:p-12">
            {/* Header */}
            <div className="mb-8 text-center sm:mb-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm sm:h-14 sm:w-14 sm:rounded-2xl"
              >
                <HiOutlineMail className="text-2xl sm:text-3xl" />
              </motion.div>

              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Contact <span className="text-blue-600">Us</span>
              </h1>

              <p className="mx-auto mt-3 max-w-xl px-1 text-sm leading-6 text-gray-500 sm:text-base">
                We'd love to hear from you. Send us a message and our team
                will get back to you as soon as possible.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 sm:gap-6"
            >
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 sm:text-base">
                  <HiOutlineUser className="shrink-0 text-lg text-blue-600" />
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  minLength={3}
                  maxLength={50}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:py-3.5 sm:text-base"
                />

                <p className="text-xs text-gray-400">
                  3–50 characters
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 sm:text-base">
                  <HiOutlineMail className="shrink-0 text-lg text-blue-600" />
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:py-3.5 sm:text-base"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 sm:text-base">
                  <HiOutlineChatAlt2 className="shrink-0 text-lg text-blue-600" />
                  Your Message
                </label>

                <textarea
                  name="message"
                  placeholder="Tell us how we can help..."
                  required
                  minLength={10}
                  maxLength={500}
                  rows={5}
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:py-3.5 sm:text-base"
                />

                <p className="text-xs text-gray-400">
                  10–500 characters
                </p>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-1 w-full rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-300 sm:py-4 sm:text-base"
              >
                Send Message
              </motion.button>
            </form>

            {/* Bottom note */}
            <p className="mx-auto mt-5 max-w-lg text-center text-[11px] leading-5 text-gray-400 sm:mt-6 sm:text-xs">
              Your information is kept private and will only be used to
              respond to your message.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;