import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { useParams } from "react-router-dom"; import propertiesData from "../mock/properties.json";
import { Camera } from "lucide-react";

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const { propertyId } = useParams();

  const property = propertiesData.find(
    (item) => item.propertyId === propertyId
  );

  if (!property) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12 max-w-xl w-full text-center">

          <div className="w-24 h-24 mx-auto rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-5xl">🏠</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mt-8">
            Property Not Found
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed">
            The property you're looking for doesn't exist, may have been removed,
            or the link is incorrect.
          </p>

          <div className="flex justify-center gap-4 mt-8">

            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
            >
              Go Back
            </button>

            <a
              href="/properties"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Browse Properties
            </a>

          </div>

        </div>
      </section>
    );
  }

  const images = property.images;
  return (
    <section className="max-w-7xl mx-auto px-10 py-8">

      {/* Top Section */}
      <div className="flex items-start gap-12">

        {/* LEFT */}
        <div className="w-[60%] h-115 relative">

          <div className="w-full h-full overflow-hidden rounded-3xl bg-black">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover flex"
              style={{
                backgroundImage: `url(${images[currentImage].img})`,
              }}
            >
              <div
                onClick={() =>
                  setCurrentImage((prev) => Math.max(prev - 1, 0))
                }
                className="flex-10 flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center cursor-pointer hover:bg-black/70 transition">
                  <BiLeftArrowAlt className="text-white text-3xl" />
                </div>
              </div>

              <div className="flex-60 h-full"></div>

              <div
                onClick={() =>
                  currentImage < images.length - 1 &&
                  setCurrentImage(currentImage + 1)
                }
                className="flex-1 flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center cursor-pointer hover:bg-black/70 transition">
                  <BiRightArrowAlt className="text-white text-3xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Photo Counter */}
          <div className="absolute bottom-5 right-5 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
            <Camera size={18} className="text-blue-600" />
            <span className="font-semibold text-gray-700">
              {currentImage + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-[40%] flex flex-col gap-6">

          {images.slice(1, 3).map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrentImage(index + 1)}
              className={`overflow-hidden rounded-3xl cursor-pointer border-4 transition-all duration-300 ${currentImage === index + 1
                ? "border-blue-600 shadow-xl"
                : "border-transparent shadow-md"
                }`}
            >
              <img
                src={image.img}
                alt=""
                className="w-full h-52.25 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}

        </div>

      </div>
      {/* Bottom Gallery */}
      <div className="mt-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-5 w-max pb-2">
          {images.slice(3).map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrentImage(index + 3)}
              className={`shrink-0 w-52 overflow-hidden rounded-2xl cursor-pointer border-4 transition-all duration-300 ${currentImage === index + 3
                ? "border-blue-600"
                : "border-transparent"
                }`}
            >
              <img
                src={image.img}
                alt=""
                className="w-full h-36 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Carousel;