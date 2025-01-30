import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';

// Testimonial data
const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Khalid Ali',
    position: 'Customer',
    message:
      'Hasan Rafay is a true professional. His graphic designing skills transformed my brand s visuals into something truly unique. Hes creative, communicative, and always delivers on time. Highly recommend working with him!',
  },
  {
    image: '/t-avt-2.jpg',
    name: 'Rehan',
    position: 'Customer',
    message:
      'I hired Hasan for video editing and was blown away by his attention to detail. He took my raw footage and turned it into a compelling story. His passion for his craft shines through in every project.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Asif',
    position: 'Customer',
    message:
      'Hasan expertise in UI design and development brought my app to life. His designs are intuitive, modern, and perfectly aligned with my brand. I couldnt have asked for a better collaborator! His ability to turn ideas into functional,impressive.',
  },
];

const TestimonialSlider = () => {
  return (
    <div className="flex justify-center">
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
      >
        {testimonialSlider.map((person, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="flex flex-col items-center text-center bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 cursor-pointer">
                {/* Avatar */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-accent mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  <Image
                    src={person.image}
                    width={128}
                    height={128}
                    alt={person.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Name and Position */}
                <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-5">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">{person.name}</h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">{person.position}</p>
                </div>
                {/* Quote */}
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white italic">
                &quot;{person.message}&quot;
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  
};

export default TestimonialSlider;
