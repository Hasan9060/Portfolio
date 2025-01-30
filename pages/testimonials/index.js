import TestimonialSlider from '../../components/TestimonialSlider';

const Testimonials = () => {
  return (
    <div className="xl:mt-[25px] h-full bg-primary/30 py-16 sm:py-24 md:py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* Title */}
        <h2 className="h2 mb-8 sm:mb-12 md:mb-6">
          What clients <span className="text-accent">say</span>
        </h2>
        {/* Slider */}
        <div className="max-w-lg sm:max-w-2xl mx-auto">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
