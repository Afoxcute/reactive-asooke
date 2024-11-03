import { useState } from "react";
import Sidebar from "../../../components/ui/Sidebar";
import Banner from "../../../components/ui/Banner";
import { FaShoppingCart, FaThumbsUp } from "react-icons/fa";
import { formatAddress } from "../../../utils/helper";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import FabricForm from "../../../components/ui/SellersMintForm";
import { useUser } from "../../../hooks/specific/useUser";

const Stores = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address } = useAppKitAccount();
  const { open } = useAppKit();
  const { user } = useUser();

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAccount = () => {
    open({ view: "Account" });
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 h-screen">
        <Sidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-[#151716]">
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">
            Welcome, {user && user.displayName}!
          </h1>
          
          <input
            type="text"
            placeholder="Search any collection"
            className="px-4 py-2 rounded-full bg-gray-700 text-white w-full max-w-md"
          />
          <div className="flex gap-3 items-center">
            <button
              onClick={handleAccount}
              className="p-2 space-x-2 text-white bg-gray-700 rounded-full cursor-pointer w-fit hover:bg-gray-600"
            >
              {formatAddress(address ?? "")}
            </button>
          </div>
        </div>

        <Banner
          showImage={true}
          title="Start selling by creating your ASO-EBI store"
          buttonText="Open Store"
        />

        <div className="flex gap-3 mt-6">
          <div className="w-full sm:w-72 p-6 border border-gray-600 flex flex-col items-center text-white bg-gray-700 rounded-md">
            <FaThumbsUp size={50} className="mb-4 text-orange-300" />
            <p className="text-lg font-bold mb-2">Upload Products</p>
            <button
              onClick={handleModalToggle}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Upload
            </button>
          </div>

          <div className="w-full sm:w-72 p-6 border border-gray-600 flex flex-col items-center text-white bg-gray-700 rounded-md">
            <FaShoppingCart size={50} className="mb-4 text-orange-300" />
            <p className="text-lg font-bold mb-2">View Orders</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              View Orders
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
            <FaShoppingCart className="text-white" /> My Store
          </h2>
          <div className="flex flex-col items-center justify-center h-48 border border-gray-600 bg-gray-700 rounded-md">
            <FaShoppingCart size={50} className="mb-4 text-gray-400" />
            <p className="text-lg text-white">
              There is nothing in your store yet
            </p>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-md shadow-lg w-1/2">
              <h2 className="text-xl font-bold text-white mb-4">Mint an NFT</h2>
              <div>
                <FabricForm />
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

export default Stores;
