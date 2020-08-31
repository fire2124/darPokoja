import React, { Component } from "react";
import { Link } from "react-router-dom";
import ilustracia from "../images/DarPokoja/ilustracia_velka.png";
import ilustracia2 from "../images/DarPokoja/DSCF1331z 1.png";
import ilustracia3 from "../images/DarPokoja/DSCF1384z.png";
import psk from "../images/DarPokoja/svk-bocna verzia 1.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "../images/DarPokoja/DSCF1331z 1.png";
import MyApp from "./../components/Pdf/all-pages"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} />;
};

class Landing extends Component {
  render() {
    return (
      <div className=" xl:mx-auto ">
        <div className=" xl:m-auto backgroundUp">
          <div className="mb:flex-row-reverse 
                          sm:flex-row-reverse

                          xl:flex xl:flex-no-wrap">
            <div className="xl:flex-none xl:w-6/12 xl:mt-64 xl:m-16 ">
              <h1 className="xl:text-left xl:text-4xl font-bold blue xl:ml-40 ">
                V Domove pre seniorov ponúkame individuálny prístup k potrebám
                klientov
              </h1>
              <p className="xl:text-lg xl:text-black xl:text-left xl:ml-40 xl:mt-10 xl:mr-64">
                Plynulé poskytovanie sociálnych služieb zabezpečuje obetavý a
                zároveň odborný personál v zložení: riaditeľ a ekonóm, odborný
                garant, sociálny pracovník, vedúca sociálno-zdravotníckeho
                úseku, opatrovateľky, zmluvný lekár zariadenia a ďalší
                pracovníci pracujúci na dohodu.
              </p>
            </div>
            <div className=" xl:flex-1  xl:w-6/12 xl:mt-40 xl:ml-16">
              <img
                src={ilustracia}
                alt="Logo"
                className=" wid"
                width="478.5px"
              />
            </div>
          </div>
          <div className=" xl:flex xl:flex-no-wrap ">
            <div className=" xl:w-10/12 xl:mt-48 aboutUsPic">
              <img src={ilustracia2} alt="Logo" />
            </div>
            <div
              className=" w-2/12 xl:mt-64 xl:mt-64 xl:mr-64 
                                                        lg:mt-20  "
            >
              <div className="aboutUsContainer xl:mt-10">
                <h1
                  id="AboutUsSection"
                  className="text-left text-4xl justify-left font-bold blue xl:mt-8 xl:ml-20 
                                                                                lg:mt-16 lg:ml-20"
                >
                  O nás
                </h1>
                <p
                  className="text-left text-lg text-black justify-center mb-5 xl:mt-5 xl:ml-20 xl:mr-64 
                                                                      lg:mt-2 lg:ml-20 lg:mr-32"
                >
                  Nezisková organizácia Dar pokoja n. o. od roku 2013 poskytuje
                  sociálne služby v súlade so Zákonom NR SR č. 448/2008 Z. z. o
                  sociálnych službách v zariadeniach sociálnych služieb, ktoré
                  sú v jej zriaďovateľskej pôsobnosti. Domov pre seniorov v
                  Chminianskej Novej Vsi je kombinovaným pobytovým zariadením
                  sociálnych služieb; konkrétne, zariadenia pre seniorov, domova
                  sociálnych služieb a špecializovaného zariadenia. Zariadenie
                  má kapacitu 27 miest.
                </p>
              </div>
            </div>
          </div>
          <div className=" xl:flex xl:flex-no-wrap xl:m-auto">
            <div className="xl:flex xl:w-6/12  xl:my-56">
              <div className="text-left xl:justify-left xl:flex1">
                <h1 className="text-left flex1 text-4xl font-bold blue justify-left xl:ml-64 lg:ml-32">
                  Klientom ponúkame
                </h1>
                <p
                  className="text-left flex1 text-lg text-black xl:justify-left xl:ml-64 xl:mt-5 
                                                                              lg: ml-32 lg:mt-2 "
                >
                  Ubytovanie prijímateľov sociálnej služby je zabezpečené v
                  jednoposteľových izbách, ktoré sú situované v bunkách.
                  Hygienické príslušenstvo, WC a sprchovací kút má každá obytná
                  bunka samostatné. Stravovanie zahŕňa výživnú a racionálnu
                  stravu. Raňajky, desiata a olovrant sa pripravujú priamo v
                  zariadení sociálnych služieb. Obedy a večere sú zabezpečené
                  dodávateľským spôsobom. Upratovanie, pranie, žehlenie a údržbu
                  bielizne a šatstva zabezpečuje opatrovateľský úsek v
                  priestoroch zariadenia.
                </p>
              </div>
            </div>
            <div className="xl:flex w-6/12 xl:ml-48 xl:mt-64 xl:mr-32">
              <div className="xl:mr-8 xl:justify-left">
                <li className="text-left blue text-xl font-bold  xl:justify-left mt-2">
                  ubytovanie v jednoposteľových izbách
                </li>
                <li className="text-left blue text-xl font-bold  xl:justify-left mt-2">
                  celodennú stravu, 5x denne
                </li>
                <li className="text-left blue text-xl font-bold  xl:justify-left mt-2">
                  základnú opateru a starostlivosť
                </li>
                <li className="text-left blue text-xl font-bold  xl:justify-left mt-2">
                  ošetrovateľskú starostlivosť
                </li>
                <li className="text-left blue text-xl font-bold  xl:justify-left mt-2">
                  sociálne poradenstvo a sociálnu rehabilitáciu
                </li>
                <li className="text-left blue text-xl font-bold  xl:justify-left mt-2">
                  pracovnú terapiu a záujmovú činnosť
                </li>
                <li className="text-left blue text-xl font-bold  xl:justify-left mt-2">
                  nepretržitý dohľad
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="xl:justify-center">
            <div
              id="Galery"
              className=" xl:mt-20 text-center text-4xl font-bold blue"
            >
              Galéria
            </div>
            <div className="xxl:ml-64 picture-Carusel flex-row">
              <Carousel
               className="xxl:ml-64"
                swipeable={false}
                responsive={responsive}
                centerMode={false}
                autoPlay
                autoPlaySpeed={3000}
                additionalTransfrom={0}
                arrows
                containerClass="container"
                draggable
                focusOnSelect={true}
                infinite
                minimumTouchDrag={80}
                slidesToSlide={1}
              >
                <div className="picture-Carusel">
                  <img src={image} alt="image1" />
                </div>
                <div className="picture-Carusel">
                  <img src={ilustracia3} alt="image2"></img>
                </div>
                <div className="picture-Carusel">
                  <img src={image} alt="image3"></img>
                </div>
                <div className="picture-Carusel">
                  <img src={ilustracia3} alt="image4"></img>
                </div>
                <div className="picture-Carusel">
                  <img src={image} alt="image5"></img>
                </div>
                <div className="picture-Carusel">
                  <img src={ilustracia3} alt="image6"></img>
                </div>
                <div className="picture-Carusel">
                  <img src={image} alt="image7"></img>
                </div>
                <div className="picture-Carusel">
                  <img src={ilustracia3} alt="image8"></img>
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        <div className="backgroundMiddle">
          <div className="xl:flex xl:flex-no-wrap xl:mt-32">
            <div
              className=" xl:w-5/12 xl:mt-64 xl:mt-32 xl:mr-64 
                                                        lg:mt-20  "
            >
              <div className="documentsContainer">
                <h1
                  id="Documents"
                  className="text-left text-4xl font-bold blue xl:mr-40 xl:ml-40 xl:mt-10"
                >
                  Dokumenty
                </h1>
                <p className="text-lg text-left xl:mt-5 xl:ml-40 xl:mr-40">
                  Pre umiestnenie do Domova pre seniorov v Chminianskej Novej
                  Vsi je potrebné podať si Žiadosť o posúdenie odkázanosti na
                  sociálnu službu podľa miesta Vášho trvalého bydliska, na
                  mestský alebo obecný úrad.
                </p>
                <p className="text-lg text-left xl:mt-5 xl:ml-40 xl:mr-40">
                  Podmienkou prijatia do Domova pre seniorov je právoplatné
                  Rozhodnutie o odkázanosti klienta na sociálnu službu v
                  Zariadení pre seniorov a Potvrdenie o bezinfekčnosti klienta
                  od ošetrujúceho lekára.
                </p>
                <div className="underline text-lg text-blue text-base xl:mt-5 xl:ml-40">
                 
                  <a
                    href="http://darpokoja.sk/public/ziadost.pdf"
                    title="Žiadosť o posúdenie odkázanosti na sociálnu službu"
                  >
                    Žiadosť o posúdenie odkázanosti na sociálnu službu
                  </a>
                </div>
              </div>
            </div>

            <div className="xl:w-7/12 xl:mt-40 docPic">
              <img src={ilustracia3} alt="Logo" />
            </div>
          </div>

          <div className=" xl:flex xl:flex-no-wrap xl:my-20 justify-left">
            <div className=" xl:w-6/12 xl:ml-64 ">
              <div className="xl:text-lg text-black text-left  ">
                <h1
                  id="Projects"
                  className="xl:text-left text-4xl font-bold blue mt-5"
                >
                  Projekty
                </h1>

                <div className="mt-5">Podporené projekty v roku 2018:</div>
                <a
                  href="http://darpokoja.sk/public/PSK%20Alt%C3%A1nok%20a%20z%C3%A1hrada%202018.pdf"
                  className="blue underline mt-5"
                >
                  Altánok a záhrada
                </a>
                <div className="mt-5">Podporené projekty v roku 2019:</div>
                <a
                  href="http://darpokoja.sk/public/PSK%20Stoli%C4%8Dkov%C3%BD%20v%C3%BD%C5%A5ah%202019.pdf"
                  className="blue underline mt-5"
                >
                  Stolivčkový výťah
                </a>
                <div className="mt-16">Projekty podporil</div>
                <div className="mt-5">
                  {" "}
                  <img
                    src={psk}
                    alt="Logo"
                    width="206px"
                    className=" xl:ml-5 lg:mt-3"
                  />
                </div>
              </div>
            </div>
            <div className=" xl:w-6/12  xl:mt-5">
              <div className="xl:text-lg text-left ">
                <h1 className="xl:text-left text-4xl font-bold blue mt-5">
                  Zmluvy
                </h1>
                <div className="blue underline mt-5">
                  <a href="http://darpokoja.sk/public/Stravn%C3%A9%20l%C3%ADstky-Up%20Slovensko,%20s.r.o.pdf">
                    I. Stravné lístky-Up Slovensko, s.r.o
                  </a>
                </div>
                <div className="blue underline mt-5">
                  <a href="http://darpokoja.sk/public/Vytvorenie%20exter.,relax.-terap.z%C3%B3ny%20pre%20kl.%20DpS-Telemont%20spol.%20s%20r.o.pdf">
                    II. Vytvorenie exter.,relax.-terap.zóny pre kl. DpS-Telemont
                    spol. s r.o
                  </a>
                </div>
                <div className="blue underline mt-5">
                  <a href="./../doc/Stolič.výťah-Velcon.pdf">
                    III. Stoličkový výťah-Velcon spol. s r.o
                  </a>
                </div>
              </div>
              <div className=" xl:w-6/12 xl:mt-10">
                <div className="xl:text-lg text-left ">
                  <h1
                    id="Pricing"
                    className="xl:text-left text-4xl font-bold blue  mt-5"
                  >
                    Cenník
                  </h1>
                  <div className="text-black mt-5">Cenníky na stiahnutie:</div>
                  <div className="blue underline mt-5">
                    <a href="http://darpokoja.sk/public/Cenn%C3%ADk%20ZpS%202020.pdf">
                      Cenník Zariadenie pre seniorov
                    </a>
                  </div>

                  <div className="blue underline mt-5">
                    <a href="http://darpokoja.sk/public/Cenn%C3%ADk%20%C5%A0Z%202020.pdf">
                      Cenník Špecializované zariadenie
                    </a>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div>
          <h1
            id="Connections"
            className="xl:text-left text-4xl font-bold blue xl:ml-40 mt-10 -mb-16 "
          >
            Kontakty
          </h1>
          <div className="xl:flex xl:flex-no-wrap xl:mb-32">
            <div className=" xl:w-6/12 xl:ml-40 xl:mt-5 container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41862.848843363274!2d21.03512777903794!3d49.02146525164568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ef4676ff67f69%3A0x7083d0343f3d85cf!2s082%2033%20Chminianska%20Nov%C3%A1%20Ves!5e0!3m2!1ssk!2ssk!4v1597163536179!5m2!1ssk!2ssk"
                className="responsive-iframe"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div className=" xl:w-6/12 xl:mr-64 xl:mt-40">
              <p className="xl:text-lg font-bold text-black text-left ">
                Dar pokoja n.o., Domov pre seniorov
              </p>
              <p className="xl:text-lg text-black text-left">
                Chminianska Nová Ves 339, 082 33
              </p>
              <p className="xl:text-lg text-black text-left xl:mt-5">
                <div className="font-semibold">Telefón:</div>
                <br />
                Vedúca sociálno-zdravotníckeho úseku: 051 776 14 59
                <br />
                Riaditeľka n.o.: 0903 671 125
                <br />
                Odborný garant: 0901 710 967
              </p>
              <p className="xl:text-lg text-black text-left xl:mt-5">
                <div className="font-semibold">E-mail:</div>
                <br />
                darpokoja@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
