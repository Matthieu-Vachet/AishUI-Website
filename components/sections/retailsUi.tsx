"use client";
import React from "react";
import { Features } from "@/components/ui/feature";
import GridFeature from "@/components/grid-feature";
import { TabsContent } from "@/components/tabsContent";
import AnimatedElement from "../ui/animateElements";
import BoxReveal from "../ui/boxReveal";

const Retails = () => {
    return (
        <section
            id="aishui"
            className=" -mt-[10rem] md:-mt-[20rem] bg-gradient-to-b from-transparent via-brown-100/10 to-black"
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
            <div className="text-center">
                <AnimatedElement delay={0.4} duration={0.5}>
                    <h2 className="-mt-28 md:-mt-56 mb-4 text-2xl md:mb-20 lg:text-5xl text-gradient translate-y-[-1rem] animate-fade-in opacity-0">
                        Des fonctionnalités en constent évolution
                    </h2>
                </AnimatedElement>
            </div>
            <GridFeature />
            <div>
                <div className="text-center">
                    <AnimatedElement delay={0.4} duration={0.5}>
                        <h2 className="mt-20 md:mt-32 text-2xl lg:text-5xl text-gradient">
                            Des addons peaufinés aux petits oignons
                        </h2>
                    </AnimatedElement>
                </div>
                <TabsContent />
            </div>
            <div>
                <div className="text-center">
                    <AnimatedElement delay={0.4} duration={0.5}>
                        <h2 className="mt-36 md:mt-48 text-2xl lg:text-5xl text-gradient">
                            Un WeakAuras sur mesure pour les{" "}
                            <span className="font-bold text-gold-100">39</span> spécialisations.
                        </h2>
                    </AnimatedElement>
                </div>
                {/* <div>
                    <div>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <p className="text-3xl font-semibold lg:text-5xl">
                                Contact<span className="text-[#6062e8]">.</span>
                            </p>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <p className="flex items-center gap-2 mt-[1.5rem] lg:mt-[2rem] text-xl lg:text-2xl text-white-100">
                                    Adresse :
                                </p>
                                <p className="text-[#6062e8] text-lg lg:text-xl">
                                    10, Rue de Marle 02120 Puisieux et Clanlieu
                                </p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <p className="flex items-center gap-2 mt-[1rem] text-xl lg:text-2xl text-white-100">
                                    Téléphone
                                </p>
                                <p className="text-[#6062e8] text-lg lg:text-xl ">
                                    (+33)7.44.89.08.31
                                </p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <p className="flex items-center gap-2 mt-[1rem] text-xl lg:text-2xl text-white-100">
                                    E-Mail
                                </p>
                                <p className="text-[#6062e8] text-lg lg:text-xl">
                                    matweb_innovation@icloud.com{" "}
                                </p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <p className="flex items-center gap-2 mt-[1rem] text-xl lg:text-2xl text-white-100">
                                    Horaires
                                </p>
                                <p className="text-[#6062e8] text-lg lg:text-xl">
                                    Lundi - Vendredi
                                </p>
                                <p className="text-[#6062e8] text-lg lg:text-xl">09h00 - 18h00</p>
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor={"#6062e8"} duration={0.5}>
                            <div>
                                <p className=" flex items-center gap-2 mt-[1rem] text-xl lg:text-2xl text-white-100">
                                    S.I.R.E.N
                                </p>
                                <p className="text-[#6062e8] text-lg lg:text-xl">544 456 000</p>
                            </div>
                        </BoxReveal>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Retails;
