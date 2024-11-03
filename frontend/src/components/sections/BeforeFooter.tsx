import { Button } from "../ui/Button";
export const BeforeFooter = () => {
  return (
    <section className="w-full flex items-center justify-between overflow-x-hidden mb-10">
      <div className="md:w-[20%] md:h-[250px] bg-[#1B201C] rounded-r-lg"></div>

      <div className="md:w-[50%] md:h-[250px] bg-white p-5 rounded-lg flex  justify-center flex-col">
        <h3 className="text-4xl text-blackfont-bold font-bold">
          Buy & Sell Aso-ebi
        </h3>
        <p className="my-3 text-[#A1A2AF] text-xl">
          Decentralized fashion marketplace made for all local fabric sellers,
          global cloth merchants, fashion designers, and fashion enthusiasts.{" "}
        </p>

        <div className="my-5 font-bold text-xl">
          <Button text="Start Buying" />
        </div>
      </div>

      <div className="md:w-[20%] md:h-[250px] bg-[#1B201C] rounded-l-lg"></div>
    </section>
  );
};
