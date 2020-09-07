import React from "react";
import ilustracia from "../images/DarPokoja/Dar pokoja n.o. Služby pre seniorov.png";
import ilustracia2 from "../images/DarPokoja/svk-bocna verzia 1.png";

const Footer = () => {
  return (
    <div className="backgroundFooter textFooter blue flex  allWidth">
      <div className="p-5 reverse mb:w-1/2 lg:mx-auto lg:w-full lg:items-start">
        <div className="mb:mb-10 lg:mb-0 lg:mt-4 lg:ml-2">
          <img
            src={ilustracia}
            alt="Logo"
          />
        </div>
        <div className="mb:mb-5 lg:grid lg:grid-cols-2 Gap lg:mx-auto lg:mb-0 lg:text-justify lg:justify-between">
          <div className="m-2">
            <a href="#AboutUsSection" className="hover:underline">
              O Nás{" "}
            </a>
          </div>
          <div className="m-2">
            <a href="www.darpokoja.sk/GDPR" className="hover:underline">
              {" "}
              Ochrana údajov
            </a>
          </div>
          <div className="m-2">
            <a href="#Connections" className="hover:underline">
              {" "}
              Kontakty
            </a>
          </div>
          <div className="m-2">
            <a href="#Galery" className="hover:underline">
              {" "}
              Galéria
            </a>
          </div>
        </div>
      </div>
      <div className="p-5 mb:w-1/2 normal lg:mx-auto lg:w-full lg:flex lg:items-start">
        <div className="lg:grid lg:grid-cols-2 Gap2 lg:mx-auto lg:mb-0 lg:text-justify lg:justify-between">
          <div className="m-2">
            <a href="#Documents" className="hover:underline">
              Dokumenty
            </a>
          </div>
          <div className="m-2">
            <a href="#Pricing" className="hover:underline">
              Cenník
            </a>
          </div>
          <div className="m-2">
            <a href="#Contracts" className="hover:underline">
              Zmluvy
            </a>
          </div>
          <div className="m-2">
            <a href="#Projects" className="hover:underline">
              Projekty
            </a>
          </div>
        </div>
        <div className="mb:mt-4 lg:mt-2 lg:mr-2">
          <div className="">
            <img src={ilustracia2} alt="Logo"  className="" />
          </div>
          <div className="ml-10 darkBlue">
            <a href="https://www.po-kraj.sk" className="hover:underline"> po-kraj.sk</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
