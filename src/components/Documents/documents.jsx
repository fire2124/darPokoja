
import { documents } from "../../json/text.json";
import ilustracia3 from "../../images/export/opatrovatelky_1.jpg";

const Documents = () => {
    return (
        <div className="lg:flex lg:flex-no-wrap reverseR mb:p-5 lg:p-0">
            <div className="documentsContainer lg:w-2/12 lg:p-10">
                <div className="">
                    <h1 id="Documents" className="blue text-2xl font-bold textName">
                        Dokumenty
                    </h1>
                    <p className="mt-5 textArticle">{documents}</p>
                    {/* <p className="mt-5 textArticle">
            Podmienkou prijatia do Domova pre seniorov je právoplatné
            Rozhodnutie o odkázanosti klienta na sociálnu službu v
            Zariadení pre seniorov a Potvrdenie o bezinfekčnosti klienta
            od ošetrujúceho lekára.
          </p> */}
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
            <div className="sm:p-5 lg:w-10/12 lg:self-center lg:justify-center pic p">
                <img
                    src={ilustracia3}
                    loading="lazy"
                    alt="Logo"
                    width="auto"
                    className="mx-auto md:mx-auto"
                />
            </div>
        </div>


    )
}

export default Documents;