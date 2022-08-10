import ilustracia from "../../images/DarPokoja/ilustracia_velka.png";
import { text_in_house } from "../../json/text.json";

const News = () => {
    return (
        <article className="backgroundUp reverse lg:flex lg:flex-wrap">
            {/* <p className="animate-pulse blue text-2xl font-bold textName lg:ml-32 lg:mt-10 lg:mr-10 p-5">
                Aktuálne !
                <br />
                Máme voľné miesta v jednoposteľových izbách pre nových klientov.
            </p> */}
            <section className="w-full p-5 lg:w-1/2 lg:self-center lg:justify-center ">
                <h1 className="blue text-2xl font-bold textName lg:ml-20 lg:mr-10 ">
                    V Domove pre seniorov ponúkame individuálny prístup k potrebám
                    klientov
                </h1>
                <p className="mt-5 textArticle lg:w-1/2 lg:ml-20">
                    {text_in_house}
                </p>
            </section>
            <section className="mt-16 w-full p-5 lg:w-1/2 lg:self-center imgUp">
                <img
                    src={ilustracia}
                    alt="Logo"
                    className="mx-auto md:w-auto"
                    width="auto"
                    loading="lazy"
                />
            </section>
        </article>
    )
}

export default News;