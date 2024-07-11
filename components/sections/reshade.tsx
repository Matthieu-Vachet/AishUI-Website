"use client";

import React from "react";

import AnimatedElement from "@/components/ui/animatedElements";
import { BeforeAfter } from "@/components/ui/beforeAfter";
import { Separator } from "../ui/separator";

const Reshade = () => {
    const features = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                </svg>
            ),
            title: "Performances",
            desc: "Impact minime sur vos performances en jeu qui reste fluide qu'importe votre configuration",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    <path d="M13 9h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
                    <path d="M8 12h2" />
                    <path d="M10 9h-2v6" />
                </svg>
            ),
            title: "Accessibilité",
            desc: "Une simple touche pour activer ou désactiver le Reshade",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-9 1.732a8 8 0 0 0 4.001 14.928l-.001 -16a8 8 0 0 0 -4 1.072" />
                </svg>
            ),
            title: "Polyvalence",
            desc: "Profil jour et nuit. Adaptez facilement le reshade à la luminosité de la scène avec un simple raccourci !",
        },
    ];

    return (
        <section id="reshade" className="relativ">
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
                            {features.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#BC994D2f_inset] space-y-3 p-4 border rounded-3xl dark:hover:border-gold-100/50 transition-all duration-500 ease-in-out"
                                >
                                    <div className="text-gold-100/50 rounded-full p-4 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-fit">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl md:text-2xl text-gold-100 tracking-tighter">
                                        {item.title}
                                    </h4>
                                    <p className="text-white/70 text-md md:text-lg">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reshade;
