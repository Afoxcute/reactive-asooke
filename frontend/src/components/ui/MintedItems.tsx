import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const MintedProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 w-full mt-5">
      <div className="flex-shrink-0">
        <img
          src="https://via.placeholder.com/80x80"
          alt="Product"
          className="rounded-lg w-20 h-20"
        />
      </div>

      <div className="flex-grow text-center md:text-left">
        <h3 className="text-lg font-semibold">Gradient Graphic T-shirt</h3>
        <p className="text-sm text-gray-400">Color: Red</p>
        <p className="text-sm text-gray-400">Creator: Darwin Shaffer</p>
        <p className="text-xl font-bold mt-1">4.5 ETH</p>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={decrement}
          className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded"
        >
          -
        </button>
        <span className="text-lg">{quantity}</span>
        <button
          onClick={increment}
          className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded"
        >
          +
        </button>
      </div>

      <div className="text-center md:text-right">
        <button className="text-red-500 hover:text-red-700">
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default MintedProduct;
