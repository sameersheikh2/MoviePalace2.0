import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { movieImageLink } from "../utils/constant";
import "swiper/css";
import "swiper/css/navigation";

const MovieImagesCarousel = ({ backdrops }) => {
  if (!backdrops?.length) return null;
  return (
    <div className="w-full my-10">
      <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        className="w-full"
        style={{ borderRadius: "1.5rem", overflow: "hidden" }}
      >
        {backdrops.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={movieImageLink + img.file_path}
              alt={`Screenshot ${idx + 1}`}
              className="w-full h-full object-cover rounded-2xl"
              style={{ borderRadius: "1.5rem", width: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieImagesCarousel;
