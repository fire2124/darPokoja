const hrefZariadenie = "http://darpokoja.sk/public/Cennik%20ZpS%202022.pdf"
const hrefSpec = "http://darpokoja.sk/public/Cennik%20SZ%202022.pdf"

const hrefStravneListky = "http://darpokoja.sk/public/Stravn%C3%A9%20l%C3%ADstky-Up%20Slovensko,%20s.r.o.pdf"
const hrefVytvorenieExt = "http://darpokoja.sk/public/Vytvorenie%20exter.,relax.-terap.z%C3%B3ny%20pre%20kl.%20DpS-Telemont%20spol.%20s%20r.o.pdf"
const hrefVytah = "http://darpokoja.sk/public/Stolic.vytah-Velcon.pdf"


const Contracts = () => {
    return (
        <article className="mt-5 p-5 lg:w-1/2 lg:self-center lg:justify-center lg:p-20">
            <section className="">
                <h2 id="Contracts" className="blue text-2xl font-bold textName">
                    Zmluvy
                </h2>
                <div className="blue underline mt-5">
                    <a href={hrefStravneListky}>
                        I. Stravné lístky-Up Slovensko, s.r.o
                    </a>
                </div>
                <div className="blue underline mt-5">
                    <a href={hrefVytvorenieExt}>
                        II. Vytvorenie exter.,relax.-terap.zóny pre kl. DpS-Telemont
                        spol. s r.o
                    </a>
                </div>
                <div className="blue underline mt-5">
                    <a href={hrefVytah}>
                        III. Stoličkový výťah-Velcon spol. s r.o
                    </a>
                </div>
            </section>
            <section className="mt-10">
                <div className="xl:text-lg text-left ">
                    <h2 id="Pricing" className="blue text-2xl font-bold textName">
                        Cenník
                    </h2>
                    <div className="text-black mt-5">Cenníky na stiahnutie:</div>
                    <div className="blue underline mt-5">
                        <a href={hrefZariadenie}>
                            Cenník Zariadenie pre seniorov
                        </a>
                    </div>

                    <div className="blue underline mt-5">
                        <a href={hrefSpec}>
                            Cenník Špecializované zariadenie
                        </a>
                    </div>
                </div>
            </section>{" "}
        </article>
    )
}

export default Contracts;