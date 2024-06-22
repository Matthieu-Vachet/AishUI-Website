"use client";
import React from "react";
import { Features } from "@/components/ui/feature";
import GridFeature from "@/components/grid-feature";

const Retails = () => {
    return (
        <section id="retailUi" className=" -mt-[10rem] md:-mt-[20rem]">
            <div>
                <Features color="	188, 144, 77" colorDark="188, 151, 98">
                    <Features.Main
                        title="Retail UI"
                        text={
                            <>
                                Compatible au dernier Patch{" "}
                                <span className=" text-gold-100 font-bold">10.2</span>
                            </>
                        }
                    />
                </Features>
            </div>
            <div className="text-center">
                <h2 className="-mt-28 md:-mt-60 mb-4 text-4xl md:mb-7 lg:text-5xl">
                    Des fonctionnalités en constent évolution
                </h2>
            </div>
            <GridFeature />
        </section>
    );
};

export default Retails;
