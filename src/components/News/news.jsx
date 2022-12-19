import ilustracia from "../../images/DarPokoja/ilustracia_velka.png";
import { actual_notes, work_offer } from "../../json/text.json";
import "./news.css";

const getStrongText = (text) => {
  const textNew = text.split("<strong>");
  const textNew2 = textNew[1].split("<strong/>");
  return (
    <div className="text-no-wrap">
      {textNew[0]} <strong> {textNew2[0]}</strong>
      {textNew2[1]}
    </div>
  );
};

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
        <p className="background mt-5 textArticle lg:w-1/2 lg:ml-20">
          <h4 className="blue font-bold textName">
            Aktuálne oznamy
          </h4>
          {getStrongText(actual_notes)}
          <h4 className="blue font-bold textName">
            Pracovná ponuka
          </h4>
          {getStrongText(work_offer)}
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
  );
};

export default News;
