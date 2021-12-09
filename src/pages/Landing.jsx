import React from "react";
import Contacts from "../components/Contacts/contacts"
import Galery from "../components/Galery/galery"
import ClientOffer from "../components/Offer/clientOffer"
import News from "../components/News/news"
import Project from "../components/Project/project"
import Contracts from "../components/Contracts/contracts"
import AboutUs from "../components/AboutUs/aboutUs"
import Documents from "../components/Documents/documents"

const Landing = () => {
  return (
    <div className="allWidth">
      <News />
      <AboutUs />
      <ClientOffer />
      <Galery />
      <div className="backgroundDoc lg:mt-20">
        <Documents />
        <div className="backgroundZmluvy reverse lg:flex lg:flex-wrap ">
          <Project />
          <Contracts />
        </div>
      </div>
      <Contacts />
    </div>
  );
}

export default Landing;
