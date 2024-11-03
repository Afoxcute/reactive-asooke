import { FaSearch } from "react-icons/fa";

const SearchBtn = () => {
  return (
    <div className="w-[200px] md:w-80 flex items-center bg-slate-700 rounded-xl px-4">
      <FaSearch className="text-gray-400 mr-2" />

      <input
        type="text"
        className="bg-transparent text-white outline-none p-2 w-full placeholder-gray-400"
        placeholder="Search any collection"
      />
    </div>
  );
};

export default SearchBtn;
