import React from "react";
import { Form } from "react-final-form";
import { Field } from "react-final-form";
import ilustracia from "../images/DarPokoja/Dar pokoja n.o. Služby pre seniorov.png";
import ilustracia2 from "../images/DarPokoja/svk-bocna verzia 1.png";

const Footer = () => {
  

  return (
    <div className="backgroundFooter">
      <div className="
                      md:flex md:items-center md:justify-center md:mx-auto md:py-10 md:px-10 md:space-x-1 
                      sm:justify-center sm:items-center sm:space-y-10  sm:0">
        <div className="xl:flex-1 xl:px-4 xl:py-2 xl:m-2 xl:w-1/6 xl:justify-left xl:text-left 
                        lg:flex-1                        lg:w-1/6 lg:justify-left xl:text-left
                        md:flex-1                        md:w-1/6 md:justify-left xl:text-left
                        sm:flex-1                        sm:w-6/6 sm:justify-center sm:text-center
                                                                                                ">
          <div className="no-underline hover:underline text-blue text-base ">
          <img
          src={ilustracia}
          alt="Logo"
          width="150px"
          className="mt-2 xl:ml-5 lg:mt-3"
        />
         
          </div>
        </div>                
        <div className="xl:flex-1 xl:px-4 xl:py-2 xl:w-1/6 xl:justify-left xl:text-left 
                        lg:flex-1                        lg:w-1/6 lg:justify-left xl:text-left
                        md:flex-1                        md:w-1/6 md:justify-left xl:text-left
                        sm:flex-1                        sm:w-6/6 sm:justify-center sm:text-center
                                                                                                ">
          <div className="no-underline hover:underline text-blue text-base ">
            O nás
          </div>
          <div className="no-underline hover:underline text-blue text-base ">
            Ochrana osobných údajov
          </div>
        </div>
        <div className="xl:flex-1 xl:px-4 xl:py-2 xl:w-1/6 xl:justify-left xl:text-left 
                        lg:flex-1                        lg:w-1/6 lg:justify-left xl:text-left
                        md:flex-1                        md:w-1/6 md:justify-left xl:text-left
                        sm:flex-1                        sm:w-6/6 sm:justify-center sm:text-center
                                                                                                ">
          <div className="no-underline hover:underline text-blue text-base ">
          Kontakty
          </div>
          <div className="no-underline hover:underline text-blue text-base ">
          Galéria
          </div>
        </div>
        <div className="xl:flex-1 xl:px-4 xl:py-2 xl:w-1/6 xl:justify-left xl:text-left 
                        lg:flex-1                        lg:w-1/6 lg:justify-left xl:text-left
                        md:flex-1                        md:w-1/6 md:justify-left xl:text-left
                        sm:flex-1                        sm:w-6/6 sm:justify-center sm:text-center
                                                                                                ">
          <div className="no-underline hover:underline text-blue text-base ">
          Dokumenty
          </div>
          <div className="no-underline hover:underline text-blue text-base ">
          Cenník
          </div>
        </div>
        <div className="xl:flex-1 xl:px-4 xl:py-2 xl:w-1/6 xl:justify-left xl:text-left
                        lg:flex-1                        lg:w-1/6 lg:justify-left xl:text-left
                        md:flex-1                        md:w-1/6 md:justify-left xl:text-left
                        sm:flex-1                        sm:w-6/6 sm:justify-center sm:text-center
                                                                                                ">
          <div className="no-underline hover:underline text-blue text-base ">
          Zmluvy
          </div>
          <div className="no-underline hover:underline text-blue text-base ">
          Projekty
          </div>
        </div>
       
        <div className="xl:flex-1 xl:px-4 xl:py-2 xl:w-1/6 xl:justify-left xl:text-left 
                        lg:flex-1                        lg:w-1/6 lg:justify-left xl:text-left
                        md:flex-1                        md:w-1/6 md:justify-left xl:text-left
                        sm:flex-1                        sm:w-6/6 sm:justify-center sm:text-center
                                                                                                ">
          <div className="no-underline hover:underline text-blue text-base ">
          <img
          src={ilustracia2}
          alt="Logo"
          width="150px"
          className=" xl:ml-5 lg:mt-3"
        />
         
          </div>
          <div className="no-underline hover:underline text-blue text-base -mt-3 xl:ml-20">
              <a href="https://www.po-kraj.sk" > po-kraj.sk</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
