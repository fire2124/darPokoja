import ilustracia2 from "../../images/DarPokoja/DSCF1331z 1.png";
import { about_us } from "../../json/text.json";

const AboutUs = () => {
    return (
        <article className="lg:flex lg:flex-no-wrap backgroundUPSecond">
            <section className="lg:w-10/12 ">
                <img
                    src={ilustracia2}
                    alt="Logo"
                    loading="lazy"
                    className="mx-auto md:mx-auto"
                    width="auto"
                />
            </section>
            <section className="w-full mb:p-5 lg:p-0 lg:w-2/12 ">
                <div className="aboutUsContainer lg:p-10">
                    <h1
                        id="AboutUsSection"
                        className="blue text-2xl font-bold textName "
                    >
                        O nás
                    </h1>
                    <p className="mt-5 textArticle lg:mr-16 ">{about_us}</p>
                </div>
            </section>
        </article>
    )
}

export default AboutUs;