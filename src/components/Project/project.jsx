import psk from "../../images/DarPokoja/svk-bocna verzia 1.png";

const Project = () => {
    return (
        <div className="p-5 lg:w-1/2 lg:self-center lg:justify-center lg:p-32">
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
    )
}

export default Project;