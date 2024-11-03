import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "./Button";
import { FaShop } from "react-icons/fa6";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import { useRegister } from "../../hooks/specific/useUser";
import { toast } from "react-toastify";
type ModalProps = {
  onClose?: () => void;
};
export const Modal = ({ onClose }: ModalProps) => {
  const [selected, setSelected] = useState<null | string>(null);

  const {registerUser, isLoading} = useRegister();

  const changeSelection = (role: string) => {
    setSelected(role);
  };

  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name) {
      toast.error("Display Name cannot be empty");
      return;
    }
    if (!selected) {
      toast.error("Please select a role");
      return;
    }
    let roleType = 0;
    if (selected === "seller") {
      roleType = 1;
    } else if (selected === "designer") {
      roleType = 2;
    } else if (selected === "buyer") {
      roleType = 3;
    }
    registerUser(name, roleType);
  };

  return (
    <div className="fixed top-0 left-0 inset-0 bg-black  h-full w-full z-10 bg-opacity-60 backdrop-blur-sm flex items-center justify-center ">
      <div className="px-5 py-10 bg-[#161622] w-[600px] max-w-[95%] rounded-lg">
        {/* modal top */}

        <div className="w-full flex items-center justify-between">
          <div></div>

          <div>
            <img
              className="w-[200px]"
              src="/assets/aso-ebi-green.png"
              alt="Green Logo"
            />
          </div>

          <div className="text-3xl text-white cursor-pointer">
            <span onClick={onClose}>
              <IoClose />
            </span>
          </div>
        </div>

        {/* modal title and description */}

        <div className="mt-20">
          <h3 className="text-3xl font-bold capitalize text-white text-center">
            {!selected ? "Choose Your Role" : selected}
          </h3>
          <p className="mt-2 text-center text-[#645D5D] text-xl">
            {!selected
              ? "How do you want to start your journey with us?"
              : "Fill in the form to continue"}
          </p>
        </div>

        {/* modal body */}

        {!selected && (
          <div className="w-full mt-20 flex items-center justify-between">
            <div
              onClick={() => changeSelection("buyer")}
              className="w-[150px] p-4 border rounded-lg flex items-center justify-center flex-col cursor-pointer"
            >
              <div>
                <span>
                  <RiShoppingBag3Fill size={40} color="white" />
                </span>
                {/* <img className="w-[50px]" src="/assets/avatar.png" alt="" /> */}
              </div>

              <div className="mt-5">
                <h3 className="text-2xl  text-white">Buyer</h3>
              </div>
            </div>

            <div
              onClick={() => changeSelection("seller")}
              className=" w-[150px] p-4 border rounded-lg flex items-center justify-center flex-col cursor-pointer"
            >
              <div>
                <span>
                  <FaShop size={40} color="white" />
                </span>
                {/* <img className="w-[50px]" src="/assets/avatar.png" alt="" /> */}
              </div>

              <div className="mt-5">
                <h3 className="text-2xl  text-white">Seller</h3>
              </div>
            </div>

            <div
              onClick={() => changeSelection("designer")}
              className="w-[150px] p-4 border rounded-lg flex items-center justify-center flex-col cursor-pointer"
            >
              <div>
                <span>
                  <FaPaintBrush size={40} color="white" />
                </span>
                {/* <img className="w-[50px]" src="/assets/avatar.png" alt="" /> */}
              </div>

              <div className="mt-5">
                <h3 className="text-2xl  text-white">Designer</h3>
              </div>
            </div>
          </div>
        )}

        {selected && (
          <div className="mt-10">
            <input
              type="text"
              placeholder="Display Name"
              value={name}
              onChange={event => setName(event.target.value)}
              className="w-full p-4 rounded-full bg-[#1E1E2D] border-none outline-none text-xl text-[#A1A2AF] my-4"
            />
          </div>
        )}

        {/* {selected === "designer" && (
          <div className="mt-10">
            <input
              type="number"
              placeholder="Years of Experience"
              className="w-full p-4 rounded-full bg-[#1E1E2D] border-none outline-none text-xl text-[#A1A2AF] my-4"
            />
            <input
              type="text"
              placeholder="Brand Name"
              className="w-full p-4 rounded-full bg-[#1E1E2D] border-none outline-none text-xl text-[#A1A2AF] my-4"
            />

            <input
              type="text"
              placeholder="Design Specification(traditional,ankara etc)"
              className="w-full p-4 rounded-full bg-[#1E1E2D] border-none outline-none text-xl text-[#A1A2AF] my-4"
            />
            <input
              type="text"
              placeholder="Portfolio Link"
              className="w-full p-4 rounded-full bg-[#1E1E2D] border-none outline-none text-xl text-[#A1A2AF] my-4"
            />
          </div>
        )} */}

        {/* {selected === "seller" && (
          <div className="mt-10">
            <input
              type="number"
              placeholder="Business Name"
              className="w-full p-4 rounded-full bg-[#1E1E2D] border-none outline-none text-xl text-[#A1A2AF] my-4"
            />
            <input
              type="text"
              placeholder="Fabric Types"
              className="w-full p-4 rounded-full bg-[#1E1E2D] border-none outline-none text-xl text-[#A1A2AF] my-4"
            />

            <textarea
              placeholder="Description of Business"
              className="w-full p-4 rounded-full bg-[#1E1E2D] border-none outline-none text-xl text-[#A1A2AF] my-4"
            />

            <input
              type="text"
              placeholder="Website Link"
              className="w-full p-4 rounded-full bg-[#1E1E2D] border-none outline-none text-xl text-[#A1A2AF] my-4"
            />
          </div>
        )} */}

        {selected && (
          <div className="w-full mt-5">
            <Button
              className="w-full rounded-lg bg-[#56BD61] py-5"
              text={isLoading ? "Registering" : "Register"}
              onClick={handleSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
};
