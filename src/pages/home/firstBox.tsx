import { motion } from "framer-motion";
import { BsSunFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import { TbBuildingSkyscraper } from "react-icons/tb";

function FirstBox() {
  const cards = [
    {
      icon: FaHome,
      title: "Find your dream home",
    },
    {
      icon: IoPricetags,
      title: "Unlock Property Value",
    },
    {
      icon: TbBuildingSkyscraper,
      title: "Effortless Property Management",
    },
    {
      icon: BsSunFill,
      title: "Smart Investments, Informed Decisions",
    },
  ];

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-4 py-6 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:px-8">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group w-full min-w-0"
          >
            <div className="flex min-h-40 w-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-gray-200/70 transition-all duration-300 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/60 sm:min-h-44 sm:p-6">

              {/* Top */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
                  <Icon className="text-xl text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-50 transition-all duration-300 group-hover:bg-blue-600">
                  <LuArrowUpRight className="h-5 w-5 text-blue-600 transition-all duration-300 group-hover:rotate-45 group-hover:text-white" />
                </div>
              </div>

              {/* Title */}
              <p className="mt-6 max-w-full break-words text-sm font-semibold leading-6 text-gray-800 sm:text-base">
                {card.title}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default FirstBox;