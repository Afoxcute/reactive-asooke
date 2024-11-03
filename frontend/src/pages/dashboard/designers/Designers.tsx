import { useState } from "react";
import Sidebar from "../../../components/ui/Sidebar";
import { Button } from "../../../components/ui/Button";
import Banner from "../../../components/ui/Banner";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import { formatAddress } from "../../../utils/helper";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import MinItemForm from "../../../components/ui/MintForm";
import MintedProduct from "../../../components/ui/MintedItems";
import { FaClipboardList } from "react-icons/fa6";
import { useUser } from "../../../hooks/specific/useUser";

const Designers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address } = useAppKitAccount();
  const { open } = useAppKit();
  const { user } = useUser();

  const handleAccount = () => {
    open({ view: "Account" });
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 h-screen">
        <Sidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-[#151716]">
        <div className="flex gap-2 items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">
            Welcome, {user && user.displayName}!
          </h1>

          <div className="flex gap-3">
            <button
              onClick={handleAccount}
              className="p-2 space-x-2 text-white bg-gray-700 rounded-full cursor-pointer w-fit hover:bg-gray-600"
            >
              {formatAddress(address ?? "")}
            </button>

            <Button
              onClick={handleModalToggle}
              className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
              text="Mint NFT"
            />
          </div>
        </div>

        <Banner
          showImage={false}
          title="Upload your portfolio on ASO-EBI first!"
          buttonText="Explore Designs"
          onButtonClick={() => console.log("Navigating to Marketplace")}
        />

        <div className="flex gap-3 flex-wrap mt-4">
          <div className="w-full sm:w-72 p-8 border border-orange-50 flex flex-col items-center text-white bg-gray-700 rounded-md">
            <FaClipboardList size={50} className="mb-4 text-orange-300" />
            <p className="text-lg font-bold mb-2">Upload Products</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Upload
            </button>
          </div>

          <div className="w-full sm:w-72 p-8 border border-orange-50 flex flex-col items-center text-white bg-gray-700 rounded-md">
            <FaShoppingCart size={50} className="mb-4 text-orange-300" />
            <p className="text-lg font-bold mb-2">View Orders</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              View Orders
            </button>
          </div>
        </div>

        <div className="mt-6 p-6">
          <h2 className="flex items-center gap-2 text-3xl font-bold text-white">
            <FaStore className="text-white" /> My Store
          </h2>

          <div>
            <MintedProduct />
            <MintedProduct />
            <MintedProduct />
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-md shadow-lg w-1/2">
              <h2 className="text-xl font-bold text-white mb-4">Mint an NFT</h2>

              <div>
                <MinItemForm />
              </div>

              <button
                onClick={handleModalToggle}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Designers;
