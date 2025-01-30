import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Creating unique and memorable identities',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Crafting stunning and user-friendly experiences',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building fast and responsive websites.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Writing compelling content that engages and converts.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Optimizing for better search rankings.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true, // Enables dots pagination
      }}
      modules={[FreeMode, Pagination]} // Fixed array usage for modules
      className="h-[148px] sm:h-[248px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#ade5e9] transition-all duration-300">
              {/* icon */}
              <div className="text-3xl text-accent mb-2">{item.icon}</div>
              {/* title */}
              <div>
                <div className="font-semibold">{item.title}</div>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
