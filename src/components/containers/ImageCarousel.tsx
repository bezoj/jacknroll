import { carouselImages } from "../../mappers/ImageMapper";
import { useEffect, useState } from "react";

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000;

  // const prevSlide = () => {
  //   setCurrentIndex((prev) =>
  //     prev === 0 ? carouselImages.length - 1 : prev - 1
  //   );
  // };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="h-[1080px] w-full relative group">
      <div
        style={{
          backgroundImage: `url(${carouselImages[currentIndex].imgSrc})`,
        }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Refactor component a little and uncoment when needed in near future */}
      {/* <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} />
      </div> */}
      {/* <div className="flex top-4 justify-center py-2 gap-2 my-[-40px]">
        {carouselImages.map((slide, slideIndex) => (
          <div className="flex cursor-pointer">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-white"
              onClick={() => setCurrentIndex(slideIndex)}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}
