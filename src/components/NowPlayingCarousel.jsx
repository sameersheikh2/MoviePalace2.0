import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

const NowPlayingCarousel = ({ movies }) => {
  const swiperRef = useRef(null);

  if (!movies || movies.length === 0) return null;

  const handlePrev = () => swiperRef.current?.swiper.slidePrev();
  const handleNext = () => swiperRef.current?.swiper.slideNext();

  return (
    <div className="mb-16 w-full">
      <div className="px-4 md:px-20 mb-4"></div>
      <div className="relative w-full">
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-full flex items-center justify-center shadow-lg transition-all"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-full flex items-center justify-center shadow-lg transition-all"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="now-playing-swiper w-full"
          style={{ borderRadius: "2rem", overflow: "hidden" }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <div className="cursor-pointer">
                  <div
                    className="aspect-video w-full relative overflow-hidden"
                    style={{ borderRadius: "2rem" }}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                      alt={movie?.title || "Movie Backdrop"}
                      style={{ borderRadius: "2rem" }}
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/100 to-transparent p-3 md:p-6"
                      style={{
                        borderBottomLeftRadius: "2rem",
                        borderBottomRightRadius: "2rem",
                      }}
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-bold text-white mb-1">
                        {movie?.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300">
                        {movie?.release_date
                          ? new Date(movie.release_date).getFullYear()
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NowPlayingCarousel;
