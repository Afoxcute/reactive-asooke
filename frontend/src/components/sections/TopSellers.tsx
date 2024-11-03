import { NFTCard } from "../ui/NFTCard";

export const TopSellers = () => {
  return (
    <section className="md:py-40 py-20 bg-[url('/assets/background2.png')] bg-cover flex items-center justify-center">
      <div className="w-full">
        <div className="pb-20 px-10">
          <h3 className="text-[#FFFFFF] text-5xl font-bold mb-4">
            Top Fabric Sellers{" "}
          </h3>
          <p className="text-2xl text-[#A1A2AF]">
            Discover the finest fabric sellers in the Aso Ebi marketplace,{" "}
            <br />
            featuring a diverse array of local artisans, global cloth merchants,
            and innovative fashion designers. Whether you're seeking traditional
            textiles or contemporary designs, you're sure to find exceptional
            quality and creativity here.
          </p>
        </div>

        {/* <div className="w-full flex items-center justify-center flex-col">
          <div className="mt-20 w-full lg:w-[95%] flex items-center  md:flex-row flex-col flex-wrap">
            <NFTCard image="/assets/image 4.png" />
            <NFTCard image="/assets/image 5.png" />
            <NFTCard image="/assets/fabric1.png" />
          </div>

          <div className="mt-20 w-full lg:w-[95%] flex-wrap flex items-center  md:flex-row flex-col">
            <NFTCard image="/assets/image 7.png" />
            <NFTCard image="/assets/image 8.png" />
            <NFTCard image="/assets/image 9.png" />
          </div>

          <div className="mt-20 w-full lg:w-[95%] flex-wrap  flex items-center md:flex-row flex-col">
            <NFTCard image="/assets/image 10.png" />
            <NFTCard image="/assets/image 11.png" />
            <NFTCard image="/assets/image 12.png" />
          </div>
        </div> */}
        <div className="house-list-comp w-full p-4 ">
          <NFTCard image="/assets/image 4.png" />
          <NFTCard image="/assets/image 5.png" />
          <NFTCard image="/assets/fabric1.png" />
          <NFTCard image="/assets/image 7.png" />
          <NFTCard image="/assets/image 8.png" />
          <NFTCard image="/assets/image 9.png" />
        </div>
      </div>
    </section>
  );
};
