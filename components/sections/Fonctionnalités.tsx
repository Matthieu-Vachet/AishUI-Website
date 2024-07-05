"use client";
import React from "react";
import { Features } from "@/components/ui/Features";
import GridFeature from "@/components/Grid-Feature";
import Addons from "@/components/Addons";
import AnimatedElement from "../ui/Animated-Elements";
import WeekAura from "@/components/WeekAuras";

const fonctionnalités = () => {
    return (
        <section
            id="fonctionnalités"
            className=" -mt-[10rem] md:-mt-[20rem] bg-gradient-to-b from-transparent via-brown-100/30 to-black"
        >
            <div>
                <Features color="	188, 144, 77" colorDark="188, 151, 98">
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
            <div className="text-center uppercase">
                <AnimatedElement delay={0.4} duration={0.5}>
                    <h2 className="-mt-28 md:-mt-56 mb-4 text-2xl md:mb-20 lg:text-5xl text-gradient translate-y-[-1rem] animate-fade-in opacity-0">
                        Des fonctionnalités en constent évolution
                    </h2>
                </AnimatedElement>
            </div>
            <GridFeature />
            <Addons />
            <WeekAura />
        </section>
    );
};

export default fonctionnalités;
