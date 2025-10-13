import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";
import "swiper/css";
import "swiper/css/navigation";

const SimilarMoviesCarousel = ({ movies }) => {
  if (!movies?.length) return null;
  return (
    <div className="w-full my-10">
      <h2 className="text-2xl font-bold mb-4">Similar Movies</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        className="w-full"
        style={{ borderRadius: "1.5rem", overflow: "hidden" }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1340: { slidesPerView: 4, spaceBetween: 50 },
        }}
      >
        {movies.map((sim) => (
          <SwiperSlide key={sim.id}>
            <MovieCard movieData={sim} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarMoviesCarousel;
