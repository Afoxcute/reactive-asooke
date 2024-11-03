interface BannerProps {
  imageSrc?: string;
  showImage?: boolean;
  title?: string;
  showTitle?: boolean;
  buttonText?: string;
  showButton?: boolean;
  onButtonClick?: () => void;
}

const Banner: React.FC<BannerProps> = ({
  imageSrc = "/assets/banner.png",
  showImage = true,
  title = "Discover more at the marketplace",
  showTitle = true,
  buttonText = "Discover Now",
  showButton = true,
  onButtonClick = () => {},
}) => {
  return (
    <div className="bg-green-600 p-6 md:p-8 md:py-12 rounded-lg flex flex-col relative">
      {showImage && (
        <img
          src={imageSrc}
          alt="Banner Symbol"
          className="w-48 md:w-64 mb-4 absolute top-5 right-3 -rotate-12 transition-all duration-300 ease-in-out"
        />
      )}
      <div className="flex-1">
        {showTitle && (
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        )}
        {showButton && (
          <button
            className="mt-4 bg-white text-black px-6 py-2 rounded-lg"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
