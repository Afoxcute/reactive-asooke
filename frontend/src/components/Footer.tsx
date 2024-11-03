import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full p-6 bg-[#1B201C] flex items-center justify-between mt-4">
      <div>
        <img className="w-[150px]" src="/assets/aso-ebi.png" alt="logo" />
        {/* <h3 className="text-white text-xl font-bold">Aso Ebi</h3> */}
      </div>
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-white" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white" />
        </a>
      </div>
    </footer>
  );
};
