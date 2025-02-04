import { carouselImages } from "../../mappers/ImageMapper";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

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
    <div className="max-w-[1920px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{
          backgroundImage: `url(${carouselImages[currentIndex].imgSrc})`,
        }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} />
      </div>
      <div className="flex top-4 justify-center py-2 gap-2 my-[-40px]">
        {carouselImages.map((slide, slideIndex) => (
          <div className="flex cursor-pointer">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-white"
              onClick={() => setCurrentIndex(slideIndex)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
