type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ text, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} px-4 py-2 bg-[#38C947] rounded-full text-white `}
    >
      {text}
    </button>
  );
};
