import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  return (
    <div className="flex items-center p-2 space-x-2 bg-gray-800 rounded-full cursor-pointer w-fit">
      <div className="p-2 rounded-full bg-yellow-300 shadow-lg">
        <FaSun className="text-xl text-white" />
      </div>

      <div className="p-2 rounded-full bg-gray-800 shadow-lg">
        <FaMoon className="text-xl text-white" />
      </div>
    </div>
  );
}

export default ThemeToggle;
