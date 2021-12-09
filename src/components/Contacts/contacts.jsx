import React from "react";
import { phone_info } from "../../json/text.json";

const Contacts = () => {
    return (
        <div className="p-5 mt-5 lg:p-16 lg:ml-10">
            <h1 id="Connections" className="blue text-2xl font-bold textName">
                Kontakty
            </h1>
            <div className="reverse mb:mt-5 lg:mt-0">
                <div className="containerMap mt-5 -mb-10">
                    <iframe
                        title="myFrame"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41862.848843363274!2d21.03512777903794!3d49.02146525164568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ef4676ff67f69%3A0x7083d0343f3d85cf!2s082%2033%20Chminianska%20Nov%C3%A1%20Ves!5e0!3m2!1ssk!2ssk!4v1597163536179!5m2!1ssk!2ssk"
                        className="responsive-iframe"
                        frameBorder="0"
                        tabIndex="0"
                    ></iframe>
                </div>
                <div className="lg:p-10  ">
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
            </div>
        </div>
    )
}

export default Contacts;