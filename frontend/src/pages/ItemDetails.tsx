import SearchBtn from "../components/ui/Search";
import ThemeToggle from "../components/ui/ThemeToggle";
import Sidebar from "../components/ui/Sidebar";
import { useAppKitAccount } from "@reown/appkit/react";
import { formatAddress } from "../utils/helper";
import { useAppKit } from "@reown/appkit/react";
import { useState } from "react";

function ItemDetails() {
  const { address } = useAppKitAccount();
  const { open } = useAppKit();
  const [quantity, setQuantity] = useState(1);

  const handleAccount = () => {
    open({ view: "Account" });
  };

  const handleChangeQuantity = (action: string) => {
    if (action === "decrease" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  // if (!isConnected) {
  //   return (

  //   );
  // }

  return (
    <div className="flex w-full min-h-screen bg-[#1E1E2D]">
      <div className="hidden md:block h-screen">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto h-screen">
        <div className="flex justify-between items-center mx-4 md:mx-12 py-2 md:py-4">
          <div className="flex items-center">
            <SearchBtn />
          </div>

          <div className="flex gap-2 items-center">
            <button
              onClick={handleAccount}
              className="p-2 space-x-2 text-white bg-gray-700 rounded-full cursor-pointer w-fit"
            >
              {formatAddress(address ?? "")}
            </button>
            <ThemeToggle />
          </div>
        </div>

        <div className="mx-4 md:mx-12 flex flex-col md:flex-row gap-4 mt-2 md:mt-6"></div>

        <div className="w-full px-10 flex">
          <div className="w-[30%]">
            <img
              className="w-[400px] rounded-xl"
              src="/assets/image 4.png"
              alt="Image 4"
            />
          </div>

          <div className="ml-5">
            <h3 className="text-5xl font-bold text-white">Weary Artwork</h3>
            <svg
              className="mt-5"
              width="193"
              height="25"
              viewBox="0 0 193 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                fill="#FFC633"
              />
              <path
                d="M44.1687 0L47.6694 7.53796L55.9202 8.53794L49.8329 14.1966L51.4315 22.3526L44.1687 18.3119L36.9059 22.3526L38.5045 14.1966L32.4173 8.53794L40.668 7.53796L44.1687 0Z"
                fill="#FFC633"
              />
              <path
                d="M75.9812 0L79.4819 7.53796L87.7327 8.53794L81.6454 14.1966L83.244 22.3526L75.9812 18.3119L68.7184 22.3526L70.317 14.1966L64.2298 8.53794L72.4805 7.53796L75.9812 0Z"
                fill="#FFC633"
              />
              <path
                d="M107.792 0L111.292 7.53796L119.543 8.53794L113.456 14.1966L115.055 22.3526L107.792 18.3119L100.529 22.3526L102.128 14.1966L96.0403 8.53794L104.291 7.53796L107.792 0Z"
                fill="#FFC633"
              />
              <path
                d="M131.737 22.3526L139 18.3119V0L135.499 7.53796L127.248 8.53793L133.335 14.1966L131.737 22.3526Z"
                fill="#FFC633"
              />
              <path
                d="M164.12 15.9242H162.776V18.3562H161.656V15.9242H155.64V14.9002L161.24 6.9002H162.776V14.9002H164.12V15.9242ZM156.888 14.9002H161.656V8.0842L156.888 14.9002ZM166.705 18.5322C166.161 18.5322 165.697 18.0842 165.697 17.5562C165.697 17.0122 166.161 16.5482 166.705 16.5482C167.249 16.5482 167.713 17.0122 167.713 17.5562C167.713 18.0842 167.249 18.5322 166.705 18.5322ZM173.015 18.5482C170.711 18.5482 169.239 17.1082 169.239 14.8522H170.391C170.391 16.5002 171.399 17.4922 173.031 17.4922C174.759 17.4922 175.879 16.3402 175.879 14.6442C175.879 13.0442 174.839 11.7802 173.031 11.7802C171.975 11.7802 171.015 12.2602 170.391 12.9482L169.479 12.6602L170.855 6.9002H176.391V7.9562H171.687L170.823 11.5562C171.463 11.0442 172.295 10.7562 173.191 10.7562C175.575 10.7562 177.047 12.4682 177.047 14.6122C177.047 16.9162 175.415 18.5482 173.015 18.5482ZM178.791 18.3562H177.703L182.167 6.9002H183.287L178.791 18.3562Z"
                fill="black"
              />
              <path
                d="M187.921 18.5482C185.617 18.5482 184.145 17.1082 184.145 14.8522H185.297C185.297 16.5002 186.305 17.4922 187.937 17.4922C189.665 17.4922 190.785 16.3402 190.785 14.6442C190.785 13.0442 189.745 11.7802 187.937 11.7802C186.881 11.7802 185.921 12.2602 185.297 12.9482L184.385 12.6602L185.761 6.9002H191.297V7.9562H186.593L185.729 11.5562C186.369 11.0442 187.201 10.7562 188.097 10.7562C190.481 10.7562 191.953 12.4682 191.953 14.6122C191.953 16.9162 190.321 18.5482 187.921 18.5482Z"
                fill="black"
                fill-opacity="0.6"
              />
            </svg>
            <p className="mt-5 text-3xl font-medium text-white">$260 $300</p>
            <p className="text-2xl text-white mt-10">
              This graphic t-shirt which is perfect for any occasion. Crafted{" "}
              <br />
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>

            <div className="text-3xl bg-white rounded-xl font-bold p-5 flex items-center w-[300px] justify-between mt-5">
              <button onClick={() => handleChangeQuantity("decrease")}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => handleChangeQuantity("increase")}>
                +
              </button>
            </div>

            <p className="text-xl text-white mt-10">
              Note: The fabrics come in 1 yard each so order as much quantity
            </p>

            <button className="w-[380px] p-4 bg-[#535E54] text-white max-w-[95%] mt-5 rounded-xl">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
