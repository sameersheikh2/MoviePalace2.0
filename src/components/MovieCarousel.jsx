import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";
import { Link } from "react-router";

import "swiper/css";
import "swiper/css/navigation";

const MovieCarousel = ({ title, movies, typeKey }) => {
  if (!movies || movies.length === 0) return null;
  return (
    <div className="mb-16 w-full">
      <div className="flex justify-between mx-2 items-center mb-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        {typeKey ? (
          <Link to={`/discover/${typeKey}`}>
            <button className="btn btn-sm btn-outline border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white">
              View All
            </button>
          </Link>
        ) : null}
      </div>
      <div className="divider bg-gray-300 dark:bg-gray-600 h-[1px]"></div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1340: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        spaceBetween={10}
        slidesPerView={1}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movieData={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;
