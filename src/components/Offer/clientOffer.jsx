import { what_we_offer, what_we_offer_ul } from "../../json/text.json";

const ClientOffer = () => {
    return (
        <article className="backgroundClients p-10 lg:flex lg:flex-wrap ">
            <h2 className="blue text-2xl font-bold textName mt-10 lg:ml-10">
                Klientom ponúkame
            </h2>
            <section className="backgroundClients  lg:flex lg:flex-wrap reverseR">
                <div className=" lg:w-1/2 lg:self-center lg:justify-center">
                    <div className="w-full lg:p-10 ">
                        <div className="p-2 lg:p-0">
                            {what_we_offer_ul.map((e) => {
                                return e.key === "1" ? (
                                    <li className="text-left blue text-bold lg:-mt-8" key={e.key}>
                                        {e.label}
                                    </li>
                                ) : (
                                    <li className="text-left blue text-bold" key={e.key}>{e.label}</li>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className=" lg:w-1/2 lg:self-center lg:justify-center">
                    <p className="textArticle mb-5 lg:p-10">{what_we_offer}</p>
                </div>
            </section>
        </article>
    )
}

export default ClientOffer;