import React from "react";
import { phone_info } from "../../json/text.json";

const srcMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.4095346036247!2d21.0809271!3d49.0027932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ef53bd708fa79%3A0x1ef5ab1f33be5725!2sDar%20Pokoja%20n.o.!5e0!3m2!1ssk!2ssk!4v1660130072685!5m2!1ssk!2ssk"

const Contacts = () => {
    return (
        <article className="p-5 mt-5 lg:p-16 lg:ml-10">
            <h2 id="Connections" className="blue text-2xl font-bold textName">
                Kontakty
            </h2>
            <section className="reverse mb:mt-5 lg:mt-0">
                <div className="containerMap mt-5 -mb-10">
                    <iframe
                        title="myFrame"
                        src={srcMap}
                        className="responsive-iframe"
                        frameBorder="0"
                        tabIndex="0"
                    ></iframe>
                </div>
                <div className="lg:p-10">
                    <p className="xl:text-lg font-bold text-black text-left ">
                        Dar pokoja n.o., Domov pre seniorov
                    </p>
                    <p className="xl:text-lg text-black text-left">
                        Chminianska Nová Ves 339, 082 33
                        <br />N 49.00277° E 21.08097°
                    </p>
                    <div className="mt-5">
                        <p className="font-semibold">Telefón:</p>
                        <ul>
                            {phone_info.map(e => {
                                return <li key={e.key}>{e.label}</li>
                            })}
                        </ul>
                    </div>
                    <div className="mt-5">
                        <p className="font-semibold">E-mail:</p>
                        darpokoja@gmail.com
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Contacts;

