import { useState } from "react";
import Header from "../components/Header";
import { AfterHero } from "../components/sections/AfterHero";
import { BeforeFooter } from "../components/sections/BeforeFooter";
import { Hero } from "../components/sections/Hero";
import { TopSellers } from "../components/sections/TopSellers";
import { Modal } from "../components/ui/Modal";
import { Footer } from "../components/Footer";

const LandingPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const onClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="bg-[#111015]">
      {openModal && <Modal onClose={onClose} />}
      <Header />
      <Hero setOpenModal={() => setOpenModal(true)} />
      <AfterHero />
      <TopSellers />
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default LandingPage;
