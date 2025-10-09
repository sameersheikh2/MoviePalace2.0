import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";

import "swiper/css";
import "swiper/css/navigation";

const MovieCarousel = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;
  return (
    <div className="mb-16 w-full">
      <div className="flex justify-between mx-2 items-center mb-4">
        <h2 className="text-4xl font-bold">{title}</h2>
        <button className="btn btn-sm btn-outline btn-neutral ">
          View All
        </button>
      </div>
      <div className="divider bg-black h-[1px]"></div>
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
