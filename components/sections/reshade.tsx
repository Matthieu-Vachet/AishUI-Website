"use client";

import React from "react";

import AnimatedElement from "@/components/ui/animatedElements";
import { BeforeAfter } from "@/components/ui/beforeAfter";
import { Separator } from "../ui/separator";
import ThreeDPhotoCarousel from "../ui/carousel";

import { reshadeFeatures } from "@/data/reshadeDatas";

const Reshade = () => {
    return (
        <section
            id="reshade"
            className="relative bg-gradient-to-b from-black-100 via-gold-100/10 to-black-100 "
        >
            {/* Titre section */}
            <div className="text-center max-w-[95vw] lg:max-w-[85vw] 3xl:max-w-[75vw] mx-auto -mt-[8rem] md:-mt-[15rem]">
                <AnimatedElement delay={0.4} duration={0.5}>
                    <h1 className=" font-Morpheus text-white text-3xl md:text-4xl lg:text-6xl 3xl:text-7xl">
                        Reshade - EarthBinder
                    </h1>
                </AnimatedElement>

                {/* Sous titre section */}
                <AnimatedElement delay={0.4} duration={0.5}>
                    <h2 className="mt-5 md:mt-10 text-xl md:text-2xl lg:text-3xl text-gold-100">
                        Suivez les visions de l’Earthbinder et découvrez WoW sous un autre jour,
                        pour une expérience visuelle et des graphismes enrichis !
                    </h2>
                </AnimatedElement>
            </div>

            {/* Elipse Gold sous composant beforeAfter */}
            <div className="hidden md:block mx-auto lg:max-w-7xl px-6 text-center lg:px-8 ">
                <div className="relative opacity-60 ">
                    <svg
                        viewBox="0 0 1208 1024"
                        className="absolute opacity-60  left-1/2 -z-8 h-[60rem] 3xl:h-[90rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-40 3xl:-top-[20rem]"
                    >
                        <ellipse
                            cx={604}
                            cy={512}
                            fill="url(#id6d1bd035-0dd1-437e-93fa-59d316231eb0)"
                            rx={604}
                            ry={512}
                        />
                        <defs>
                            <radialGradient id="id6d1bd035-0dd1-437e-93fa-59d316231eb0">
                                <stop offset={0} stopColor="#BC994D" />
                                <stop offset={1} stopColor="#BC994D" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* Composant BeforeAfter */}
            <div>
                <BeforeAfter />
            </div>

            <div className="py-14 relative">
                <div className="max-w-[95vw] 3xl:max-w-[75vw] mx-auto px-4 text-gray-400 md:px-8">
                    {/* Composant séparateur */}
                    <div className="flex justify-center">
                        <Separator />
                    </div>

                    {/* Feature Reshade */}
                    <div className="relative mt-12">
                        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {reshadeFeatures.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#BC994D2f_inset] space-y-3 p-4 border rounded-3xl dark:hover:border-gold-100/50 transition-all duration-500 ease-in-out text-start"
                                >
                                    <div className="text-gold-100/50 rounded-full p-4 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-fit">
                                        {item.icon}
                                    </div>
                                    <p className="text-xl md:text-2xl text-gold-100 tracking-tighter">
                                        {item.title}
                                    </p>
                                    <p className="text-white/70 text-md md:text-lg">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-black-100 via-gold-100/10 to-black-100">
                <div className="text-center max-w-[95vw] lg:max-w-[85vw] 3xl:max-w-[75vw] mx-auto">
                    <AnimatedElement delay={0.4} duration={0.5}>
                        <h2 className="mt-5 md:mt-10 text-2xl md:text-3xl lg:text-4xl text-gold-100">
                            Quelques aperçus du Reshade
                        </h2>
                    </AnimatedElement>
                </div>

                <div>
                    <ThreeDPhotoCarousel />
                </div>
            </div>
        </section>
    );
};

export default Reshade;
