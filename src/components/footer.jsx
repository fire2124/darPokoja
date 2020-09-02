import React from "react";
import { Form } from "react-final-form";
import { Field } from "react-final-form";
import ilustracia from "../images/DarPokoja/Dar pokoja n.o. Služby pre seniorov.png";
import ilustracia2 from "../images/DarPokoja/svk-bocna verzia 1.png";

const Footer = () => {
  return (
    <div className="backgroundFooter textFooter blue flex">
      <div className="p-5 reverse w-1/2">
        <div className="mb-10">
          <img
            src={ilustracia}
            alt="Logo"
          />
        </div>
        <div className="mb-5">
          <div>
            <a href="#AboutUsSection" className="hover:underline">
              O Nás{" "}
            </a>
          </div>
          <div>
            <a href="www.darpokoja.sk/GDPR" className="hover:underline">
              {" "}
              Ochrana údajov
            </a>
          </div>
          <div>
            <a href="#Connections" className="hover:underline">
              {" "}
              Kontakty
            </a>
          </div>
          <div>
            <a href="#Galery" className="hover:underline">
              {" "}
              Galéria
            </a>
          </div>
        </div>
      </div>
      <div className="p-5 w-1/2">
        <div>
          <div>
            <a href="#Documents" className="hover:underline">
              Dokumenty
            </a>
          </div>
          <div>
            <a href="#Pricing" className="hover:underline">
              Cenník
            </a>
          </div>
          <div>
            <a href="#Contracts" className="hover:underline">
              Zmluvy
            </a>
          </div>
          <div>
            <a href="#Projects" className="hover:underline">
              Projekty
            </a>
          </div>
        </div>
        <div className="mt-4">
          <div className="">
            <img src={ilustracia2} alt="Logo"  className="" />
          </div>
          <div className="ml-10">
            <a href="https://www.po-kraj.sk" className="hover:underline"> po-kraj.sk</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
