import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../mock/properties.json";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const { propertyId } = useParams();

  const property = propertiesData.find(
    (item) => item.propertyId === propertyId
  );

  if (!property) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 p-6 sm:p-10 md:p-12 max-w-xl w-full text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-4xl sm:text-5xl">🏠</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-6 sm:mt-8">
            Property Not Found
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
            The property you're looking for doesn't exist, may have been
            removed, or the link is incorrect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-7 sm:mt-8">
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
            >
              Go Back
            </button>

            <a
              href="/properties"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-center"
            >
              Browse Properties
            </a>
          </div>
        </div>
      </section>
    );
  }

  const images = property.images;

  const goToPrevious = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7 lg:py-10">
      {/* =========================
          MAIN GALLERY
      ========================== */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 sm:gap-5 lg:gap-6">
        {/* =========================
            MAIN IMAGE
        ========================== */}
        <div className="relative w-full h-[280px] sm:h-[400px] md:h-[480px] lg:h-[560px]">
          <div className="w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl bg-black shadow-xl">
            <img
              src={images[currentImage].img}
              alt={`Property image ${currentImage + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none rounded-2xl sm:rounded-3xl" />

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              aria-label="Previous image"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/45 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/70 active:scale-95 transition-all shadow-lg"
            >
              <BiLeftArrowAlt className="text-2xl sm:text-3xl md:text-4xl" />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              aria-label="Next image"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/45 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/70 active:scale-95 transition-all shadow-lg"
            >
              <BiRightArrowAlt className="text-2xl sm:text-3xl md:text-4xl" />
            </button>

            {/* Mobile Image Counter */}
            <div className="absolute bottom-3 left-3 sm:hidden bg-black/60 backdrop-blur-md text-white rounded-lg px-3 py-1.5 flex items-center gap-2">
              <Camera size={15} />
              <span className="text-xs font-semibold">
                {currentImage + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Desktop Counter */}
          <div className="hidden sm:flex absolute bottom-4 right-4 md:bottom-5 md:right-5 bg-white/95 backdrop-blur-md rounded-xl shadow-lg px-3 md:px-4 py-2 items-center gap-2">
            <Camera size={17} className="text-blue-600" />

            <span className="font-semibold text-gray-700 text-sm md:text-base">
              {currentImage + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* =========================
            SIDE IMAGES
        ========================== */}
        <div className="hidden lg:grid grid-rows-2 gap-5">
          {images.slice(1, 3).map((image, index) => {
            const imageIndex = index + 1;

            return (
              <button
                key={imageIndex}
                onClick={() => setCurrentImage(imageIndex)}
                className={`relative overflow-hidden rounded-3xl cursor-pointer border-4 transition-all duration-300 ${
                  currentImage === imageIndex
                    ? "border-blue-600 shadow-xl"
                    : "border-transparent shadow-md hover:shadow-xl"
                }`}
              >
                <img
                  src={image.img}
                  alt={`Property preview ${imageIndex + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition" />
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================
          MOBILE QUICK THUMBNAILS
      ========================== */}
      <div className="lg:hidden mt-4">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative shrink-0 w-20 h-16 sm:w-24 sm:h-20 overflow-hidden rounded-xl border-2 transition-all ${
                currentImage === index
                  ? "border-blue-600 shadow-md"
                  : "border-transparent"
              }`}
            >
              <img
                src={image.img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {currentImage === index && (
                <div className="absolute inset-0 bg-blue-600/10" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* =========================
          DESKTOP BOTTOM GALLERY
      ========================== */}
      <div className="hidden lg:block mt-6">
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-3">
            {images.slice(3).map((image, index) => {
              const imageIndex = index + 3;

              return (
                <button
                  key={imageIndex}
                  onClick={() => setCurrentImage(imageIndex)}
                  className={`group relative shrink-0 w-48 xl:w-56 h-32 xl:h-36 overflow-hidden rounded-2xl cursor-pointer border-4 transition-all duration-300 ${
                    currentImage === imageIndex
                      ? "border-blue-600 shadow-xl"
                      : "border-transparent shadow-md hover:shadow-xl"
                  }`}
                >
                  <img
                    src={image.img}
                    alt={`Property gallery ${imageIndex + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================
          MOBILE SWIPE HINT
      ========================== */}
      <div className="flex lg:hidden justify-center items-center gap-2 mt-3 text-xs text-gray-400">
        <ChevronLeft size={14} />
        <span>Swipe to view photos</span>
        <ChevronRight size={14} />
      </div>
    </section>
  );
}

export default Carousel;