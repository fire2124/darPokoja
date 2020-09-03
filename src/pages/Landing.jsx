import React, { Component } from "react";
import ilustracia from "../images/DarPokoja/ilustracia_velka.png";
import ilustracia2 from "../images/DarPokoja/DSCF1331z 1.png";
import ilustracia3 from "../images/DarPokoja/DSCF1384z.png";
import psk from "../images/DarPokoja/svk-bocna verzia 1.png";
import CarouselForm from "../components/Carousel/CarouselForm"


class Landing extends Component {
  render() {
    return (
      <div className="">
        <div className="backgroundUp reverse lg:flex lg:flex-wrap">
          <div className="w-full p-5 lg:w-1/2 lg:self-center lg:justify-center">
            <h1 className="blue text-2xl font-bold textName lg:ml-20 lg:mr-10">
              V Domove pre seniorov ponúkame individuálny prístup k potrebám
              klientov
            </h1>
            <p className="mt-5 textArticle lg:w-1/2 lg:ml-20">
              Plynulé poskytovanie sociálnych služieb zabezpečuje obetavý a
              zároveň odborný personál v zložení: riaditeľ a ekonóm, odborný
              garant, sociálny pracovník, vedúca sociálno-zdravotníckeho úseku,
              opatrovateľky, zmluvný lekár zariadenia a ďalší pracovníci
              pracujúci na dohodu.
            </p>
          </div>
          <div className="mt-16 w-full p-5 lg:w-1/2 lg:self-center imgUp">
            <img
              src={ilustracia}
              alt="Logo"
              className="mx-auto md:w-auto"
              width="auto"
            />
          </div>
        </div>

        <div className="lg:flex lg:flex-no-wrap backgroundUPSecond">
          <div className="lg:w-10/12 ">
            <img src={ilustracia2} alt="Logo" className="mx-auto md:w-auto" />
          </div>
          <div className="w-full p-5 lg:w-2/12 ">
            <div className="aboutUsContainer lg:p-12">
              <h1
                id="AboutUsSection"
                className="blue text-2xl font-bold textName "
              >
                O nás
              </h1>
              <p className="mt-5 textArticle  ">
                Nezisková organizácia Dar pokoja n. o. od roku 2013 poskytuje
                sociálne služby v súlade so Zákonom NR SR č. 448/2008 Z. z. o
                sociálnych službách v zariadeniach sociálnych služieb, ktoré sú
                v jej zriaďovateľskej pôsobnosti. Domov pre seniorov v
                Chminianskej Novej Vsi je kombinovaným pobytovým zariadením
                sociálnych služieb; konkrétne, zariadenia pre seniorov, domova
                sociálnych služieb a špecializovaného zariadenia. Zariadenie má
                kapacitu 27 miest.
              </p>
            </div>
          </div>
        </div>
        <div className="backgroundClients p-5 lg:flex lg:flex-wrap ">
          <h1 className="blue text-2xl font-bold textName mt-10 lg:ml-10">
            Klientom ponúkame
          </h1>
          <div className="backgroundClients  lg:flex lg:flex-wrap reverseR">
            <div className=" lg:w-1/2 lg:self-center lg:justify-center">
              <div className="w-full lg:p-10 ">
                <div className="p-2 lg:p-0">
                  <li className="text-left blue text-bold lg:-mt-8">
                    ubytovanie v jednoposteľových izbách
                  </li>
                  <li className="text-left blue text-bold">
                    celodennú stravu, 5x denne
                  </li>
                  <li className="text-left blue text-bold">
                    základnú opateru a starostlivosť
                  </li>
                  <li className="text-left blue text-bold">
                    ošetrovateľskú starostlivosť
                  </li>
                  <li className="text-left blue text-bold">
                    sociálne poradenstvo a sociálnu rehabilitáciu
                  </li>
                  <li className="text-left blue text-bold">
                    pracovnú terapiu a záujmovú činnosť
                  </li>
                  <li className="text-left blue text-bold">
                    nepretržitý dohľad
                  </li>
                </div>
              </div>
            </div>
            <div className=" lg:w-1/2 lg:self-center lg:justify-center">
              <p className="textArticle mb-5 lg:p-10">
                Ubytovanie prijímateľov sociálnej služby je zabezpečené v
                jednoposteľových izbách, ktoré sú situované v bunkách.
                Hygienické príslušenstvo, WC a sprchovací kút má každá obytná
                bunka samostatné. Stravovanie zahŕňa výživnú a racionálnu
                stravu. Raňajky, desiata a olovrant sa pripravujú priamo v
                zariadení sociálnych služieb. Obedy a večere sú zabezpečené
                dodávateľským spôsobom. Upratovanie, pranie, žehlenie a údržbu
                bielizne a šatstva zabezpečuje opatrovateľský úsek v priestoroch
                zariadenia.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="p-5">
            <div id="Galery" className="blue text-2xl font-bold textName lg:text-center lg:p-5 lg:mt-5">
              Galéria
            </div>
            <div className="mt-5 lg:mt-6">
              <CarouselForm/>
            </div>
          </div>
        </div>

        <div className="backgroundDoc lg:mt-20">
          <div className="lg:flex lg:flex-wrap reverseR">
            <div className="documentsContainer lg:w-1/2 lg:self-center lg:justify-center">
              <div className="p-5">
                <h1 id="Documents" className="blue text-2xl font-bold textName">
                  Dokumenty
                </h1>
                <p className="mt-5 textArticle">
                  Pre umiestnenie do Domova pre seniorov v Chminianskej Novej
                  Vsi je potrebné podať si Žiadosť o posúdenie odkázanosti na
                  sociálnu službu podľa miesta Vášho trvalého bydliska, na
                  mestský alebo obecný úrad.
                </p>
                <p className="mt-5 textArticle">
                  Podmienkou prijatia do Domova pre seniorov je právoplatné
                  Rozhodnutie o odkázanosti klienta na sociálnu službu v
                  Zariadení pre seniorov a Potvrdenie o bezinfekčnosti klienta
                  od ošetrujúceho lekára.
                </p>
                <div className="underline mt-5 textArticle blue">
                  <a
                    href="http://darpokoja.sk/public/ziadost.pdf"
                    title="Žiadosť o posúdenie odkázanosti na sociálnu službu"
                  >
                    Žiadosť o posúdenie odkázanosti na sociálnu službu
                  </a>
                </div>
              </div>
            </div>

            <div className="sm:p-5 lg:w-1/2 lg:self-center lg:justify-center pic">
              <img src={ilustracia3} alt="Logo" />
            </div>
          </div>

          <div className="backgroundZmluvy reverse lg:flex lg:flex-wrap ">
            <div className="p-5 lg:w-1/2 lg:self-center lg:justify-center lg:p-20">
              <div className="">
                <h1 id="Projects" className="blue text-2xl font-bold textName">
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
                  Stoličkový výťah
                </a>
                <div className="blue text-2xl font-bold textName mt-16 ">
                  Projekty podporil
                </div>
                <div className="mt-5 mb-5">
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
            <div className="mt-5 p-5 lg:w-1/2 lg:self-center lg:justify-center lg:p-20">
              <div className="">
                <h1 id="Contracts" className="blue text-2xl font-bold textName">
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
              <div className="mt-10">
                <div className="xl:text-lg text-left ">
                  <h1 id="Pricing" className="blue text-2xl font-bold textName">
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
        <div className="p-5 mt-5 lg:p-16 lg:ml-10">
          <h1 id="Connections" className="blue text-2xl font-bold textName">
            Kontakty
          </h1>
          <div className="reverse mt-5">
            <div className="containerMap mt-5 -mb-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41862.848843363274!2d21.03512777903794!3d49.02146525164568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ef4676ff67f69%3A0x7083d0343f3d85cf!2s082%2033%20Chminianska%20Nov%C3%A1%20Ves!5e0!3m2!1ssk!2ssk!4v1597163536179!5m2!1ssk!2ssk"
                className="responsive-iframe"
                frameborder="0"
                tabindex="0"
              ></iframe>
            </div>
            <div className="lg:p-10  ">
              <p className="xl:text-lg font-bold text-black text-left ">
                Dar pokoja n.o., Domov pre seniorov
              </p>
              <p className="xl:text-lg text-black text-left">
                Chminianska Nová Ves 339,
                <br/>
                082 33
              </p>
              <p className="mt-5">
                <div className="font-semibold">Telefón:</div>
                Vedúca sociálno-zdravotníckeho úseku: 051 776 14 59
                <br />
                Riaditeľka n.o.: 0903 671 125
                <br />
                Odborný garant: 0901 710 967
              </p>
              <p className="mt-5">
                <div className="font-semibold">E-mail:</div>
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
