import React from "react";
import CarouselForm from "../Carousel/CarouselForm";

const Galery = () => {
    return (
        <div className="">
            <div className="p-5">
                <div
                    id="Galery"
                    className="blue text-2xl font-bold textName lg:text-center lg:p-5 lg:mt-5"
                >
                    Galéria
                </div>
                <div className="mt-5 lg:mt-6">
                    <CarouselForm />
                </div>
            </div>
        </div>)
}

export default Galery;