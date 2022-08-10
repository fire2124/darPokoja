
import { documents } from "../../json/text.json";
import ilustracia3 from "../../images/export/opatrovatelky_1.jpg";

const hrefZiadost = "http://darpokoja.sk/public/ziadost.pdf"

const Documents = () => {
    return (
        <article className="lg:flex lg:flex-no-wrap reverseR mb:p-5 lg:p-0">
            <section className="documentsContainer lg:w-2/12 lg:p-10">
                <div className="">
                    <h2 id="Documents" className="blue text-2xl font-bold textName">
                        Dokumenty
                    </h2>
                    <p className="mt-5 textArticle">{documents}</p>
                    <div className="underline mt-5 textArticle blue">
                        <a
                            href={hrefZiadost}
                            title="Žiadosť o posúdenie odkázanosti na sociálnu službu"
                        >
                            Žiadosť o posúdenie odkázanosti na sociálnu službu
                        </a>
                    </div>
                </div>
            </section>
            <section className="sm:p-5 lg:w-10/12 lg:self-center lg:justify-center pic p">
                <img
                    src={ilustracia3}
                    loading="lazy"
                    alt="Logo"
                    width="auto"
                    className="mx-auto md:mx-auto"
                />
            </section>
        </article>


    )
}

export default Documents;