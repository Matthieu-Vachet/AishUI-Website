"use client";

import React from "react";

import { Features } from "@/components/ui/features";
import GridFeature from "@/components/ui/gridFeature";
import AnimatedElement from "@/components/ui/animatedElements";

const AishUi = () => {
    return (
        <section
            id="aishui"
            className="mt-[10rem] md:-mt-[20rem] bg-gradient-to-b from-black-100 via-brown-100/20 to-transparent "
        >
            <div>
                <Features color="188, 144, 77" colorDark="71, 53, 1">
                    <Features.Main
                        title="Aish UI"
                        text={
                            <div className="-mt-10">
                                Compatible au dernier Patch{" "}
                                <span className=" text-gold-100 font-bold">10.2</span>
                            </div>
                        }
                    />
                </Features>
            </div>
            <div className="mx-auto max-w-[95vw] lg:max-w-[85vw] 3xl:max-w-[75vw]">
                <div className="flex md:hidden flex-col justify-center items-center mb-8 gap-5">
                    <h1 className="text-gradient text-center text-5xl ">Aish UI</h1>
                    <div className="mx-auto text-lg leading-tight text-white/50 md:w-[80%]">
                        Compatible au dernier Patch{" "}
                        <span className=" text-gold-100 font-bold">10.2</span>
                    </div>
                </div>
                <hr className="md:hidden mb-[8.5rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2)_50%,transparent)]" />

                <div className="text-center max-w-[90vw] lg:max-w-[85vw] mx-auto relative ">
                    <AnimatedElement delay={0.4} duration={0.5}>
                        <h2 className=" font-Morpheus -mt-28 md:-mt-56 mb-5 text-3xl md:text-5xl md:mb-20 lg:text-7xl text-gradient translate-y-[-1rem] animate-fade-in opacity-0">
                            Des fonctionnalités en constent évolution
                        </h2>
                    </AnimatedElement>
                </div>
                <GridFeature />
            </div>
        </section>
    );
};

export default AishUi;
