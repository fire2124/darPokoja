import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 5px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #019adf;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul
      open={open}
      className="
      xl:justify-center xl:text-center
      lg:justify-center lg:text-center"
    >
       <a href="#AboutUsSection" className="hover:underline navbarText xl:text-xl lg:text-lg md:text-base sm:text-base text-center xl:py-2 xl:px-10 lg:py-2 lg:px-10 lg:mt-2 md:p-3">O Nás</a>
      <a href="#Galery" className="hover:underline navbarText xl:text-xl lg:text-lg md:text-base sm:text-base text-center justify-center xl:py-2 xl:px-10 lg:py-2 lg:px-10 lg:mt-2 md:p-3 md:ml-2"> Galéria</a>
      <a href="#Documents" className="hover:underline navbarText xl:text-xl lg:text-lg md:text-base sm:text-base text-center justify-center xl:py-2 xl:px-10 lg:py-2 lg:px-10 lg:mt-2 md:p-3 md:ml-2">Dokumenty</a>
      <a href="#Projects" className="hover:underline navbarText xl:text-xl lg:text-lg md:text-base sm:text-base text-center justify-center xl:py-2 xl:px-10 lg:py-2 lg:px-10 lg:mt-2 md:p-3 md:ml-2">Projekty</a>
      <a href="#Pricing" className="hover:underline navbarText xl:text-xl lg:text-lg md:text-base sm:text-base text-center justify-center xl:py-2 xl:px-10 lg:py-2 lg:px-10 lg:mt-2 md:p-3 md:ml-2">Cenník</a>
      <a href="#Connections" className="hover:underline navbarText xl:text-xl lg:text-lg md:text-base sm:text-base text-center justify-center xl:py-2 xl:px-10 lg:py-2 lg:px-10 lg:mt-2 md:p-3 md:ml-2">Kontakty</a>

    </Ul>
  );
};

export default RightNav;
