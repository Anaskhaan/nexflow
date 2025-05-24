const CustomCarousel = ({ images }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Image container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto object-cover flex-shrink-0 "
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
