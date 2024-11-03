// import anakaraImage from "/assets/fabric1.png";
export const NFTCard = ({ image }: { image: string }) => {
  return (
    <div className="md:w-[500px] max-w-full mt-10 md:mt-0 ml-4 flex justify-end relative">
      <div className="md:w-[465px] h-[540px] rounded-lg">
        <img
          src={image}
          className="h-full w-full rounded-xl "
          alt="Ankara"
        />
      </div>

      <div className="absolute md:w-full h-[540px] flex items-end justify-end p-0">
        <div className="backdrop-blur-lg bg-black/30 border border-white/30 rounded-lg shadow-lg p-4 w-full flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <img className="w-[40px]" src="/assets/avatar.png" alt="" />
            </div>

            <div className="ml-5">
              <h3 className="text-2xl text-white font-bold ">Weary Artwork</h3>
              <p className="text-[#A1A2AF]">Darwin Shaffer</p>
            </div>
          </div>

          <div className="flex ml-5 items-center bg-white text-[#38C947] text-xl p-2 rounded-xl md:text-lg md:p-1 sm:text-base sm:p-0.5">
            <svg
              width="30"
              height="30"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_108_2218)">
                <path
                  opacity="0.4"
                  d="M5.38441 6.31148L8.52827 4.98632C8.66668 4.93006 8.82486 4.93006 8.95668 4.98632L12.1071 6.31148C12.384 6.43024 12.641 6.11145 12.4499 5.88643L9.15441 2.06723C8.93032 1.8047 8.56123 1.8047 8.33714 2.06723L5.04168 5.88643C4.85055 6.11145 5.10759 6.43024 5.38441 6.31148Z"
                  fill="#38C947"
                />
                <path
                  opacity="0.4"
                  d="M5.38443 9.93693L8.53488 11.2621C8.67329 11.3183 8.83147 11.3183 8.96329 11.2621L12.1137 9.93693C12.3906 9.81816 12.6476 10.137 12.4565 10.362L9.16102 14.1812C8.93693 14.4437 8.56783 14.4437 8.34374 14.1812L5.04829 10.362C4.85056 10.137 5.10102 9.81816 5.38443 9.93693Z"
                  fill="#38C947"
                />
                <path
                  d="M8.60123 6.55527L5.87919 7.84293C5.63532 7.95544 5.63532 8.28673 5.87919 8.39924L8.60123 9.68689C8.69351 9.73065 8.80555 9.73065 8.89782 9.68689L11.6199 8.39924C11.8637 8.28673 11.8637 7.95544 11.6199 7.84293L8.89782 6.55527C8.85171 6.53367 8.80096 6.52243 8.74953 6.52243C8.69809 6.52243 8.64735 6.53367 8.60123 6.55527Z"
                  fill="#38C947"
                />
              </g>
              <defs>
                <clipPath id="clip0_108_2218">
                  <rect
                    width="15.8182"
                    height="15.0018"
                    fill="white"
                    transform="translate(0.836914 0.623322)"
                  />
                </clipPath>
              </defs>
            </svg>

            <p>4.5 ETH</p>
          </div>
          {/* <p className="text-white">
        This is an example of a glassmorphism effect using Tailwind CSS.
      </p> */}
        </div>
      </div>
    </div>
  );
};
