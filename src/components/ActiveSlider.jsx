import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const ActiveSlider = () => {
  return (
    <>
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: rgb(0, 188, 212);
          }
        `}
      </style>
      <div className="flex items-center justify-center flex-col border-b border-neutral-900 pb-4 lg:mb-35">
        <Swiper 
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 350,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 200,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col  mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
              <a href={item.href} target="_blank">  <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70" />
                <div className="relative flex flex-col gap-3">
                  <item.icon className="text-white group-hover:text-white w-[32px] h-[32px]" />
                  <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                  <p className="lg:text-[18px]">{item.content} </p>
                </div> </a> 
                <a href={item.href} target="_blank">
                  <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-white group-hover:rotate-45 duration-100" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ActiveSlider;
