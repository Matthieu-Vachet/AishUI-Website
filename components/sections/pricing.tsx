"use client";

import React from "react";
import Link from "next/link";

import ShimmerButton from "@/components/ui/shimerBouton";
import AnimatedElement from "@/components/ui/animatedElements";

import { tiersPackUi, tiersPackAddons } from "@/data/pricingDatas";

import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Pricing = () => {
    return (
        <section
            id="pricing"
            className="bg-gradient-to-b from-black-100 via-gold-100/10 to-black-100"
        >
            <div>
                <div className="text-center z-20 mx-auto max-w-[95vw] lg:max-w-[85vw] 3xl:max-w-[75vw]">
                    {/* Titre section */}
                    <AnimatedElement delay={0.4} duration={0.5}>
                        <h1 className=" font-Morpheus mt-32 md:mt-40 text-3xl md:text-4xl lg:text-6xl 3xl:text-7xl ">
                            Obtenez{" "}
                            <span className=" font-GeistSans border-t-2 border-b-2 border-gold-100">
                                Aish<span className="font-bold text-gold-100">UI</span>
                            </span>
                        </h1>
                    </AnimatedElement>

                    {/* Sous titre section */}
                    <AnimatedElement delay={0.4} duration={0.5}>
                        <h2 className="mt-5 md:mt-10 text-xl md:text-2xl lg:text-3xl text-gold-100">
                            Découvrez nos plans Aishui : un achat unique pour optimiser votre
                            interface de jeu et soutenir le projet, avec des mises à jour
                            régulières.
                        </h2>
                    </AnimatedElement>
                </div>
                <div className=" mt-[25rem] ">
                    {/* Elipse Gold sous composant beforeAfter */}
                    <div className="hidden md:block mx-auto lg:max-w-7xl px-6 text-center lg:px-8 ">
                        <div className="relative mt-6 opacity-50">
                            <svg
                                viewBox="0 0 1208 1024"
                                className="absolute  opacity-50 left-1/2 -z-8 h-[50rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-[20rem]"
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

                    {/* Different tiers */}
                    <div className="flow-root z-20 bg-transparent pb-24 sm:pb-32">
                        <div className="-mt-80">
                            <div className="mx-auto max-w-[95vw] 3xl:max-w-[70vw]  lg:px-8">
                                <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3">
                                    {tiersPackUi.map((tier) => (
                                        <div
                                            key={tier.id}
                                            className={`flex z-10 flex-col justify-between rounded-3xl bg-transparent p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 [box-shadow:0_-20px_80px_-20px_#BC994D4f_inset] ${
                                                tier.bestPack
                                                    ? "border-2 border-gold-100"
                                                    : "[border:1px_solid_rgba(255,255,255,.1)]"
                                            }`}
                                        >
                                            <div>
                                                <div className="flex gap-2 flex-col items-center">
                                                    <div
                                                        id={tier.id}
                                                        className="text-2xl font-semibold leading-7 text-gold-100 text-center"
                                                    >
                                                        <p>{tier.name}</p>
                                                    </div>
                                                    <span className="text-sm text-white/50">
                                                        {tier.details}
                                                    </span>
                                                </div>

                                                <div className="mt-4 flex justify-center items-baseline gap-x-2">
                                                    <span className="text-3xl 3xl:text-5xl font-bold tracking-tight text-gold-100 text-center">
                                                        {tier.priceMonthly}
                                                    </span>
                                                </div>
                                                <div className=" text-center mt-5 text-xl text-white font-semibold ">
                                                    <p>{tier.description}</p>
                                                </div>
                                                <ul
                                                    role="list"
                                                    className="mt-10 space-y-4 text-sm leading-6 text-gray-200"
                                                >
                                                    {tier.features.map((feature) => (
                                                        <li key={feature} className="flex gap-x-3">
                                                            <IoCheckmarkDoneOutline
                                                                className="h-6 w-5 flex-none text-gold-100"
                                                                aria-hidden="true"
                                                            />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <Link
                                                href={tier.url}
                                                aria-describedby={tier.id}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex justify-center mt-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms] text-center"
                                            >
                                                <ShimmerButton
                                                    className="shadow-xl"
                                                    background="rgb(188,144,77)"
                                                >
                                                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight dark:text-black lg:text-lg">
                                                        Obtenir AishUI
                                                    </span>
                                                </ShimmerButton>
                                            </Link>
                                        </div>
                                    ))}
                                </div>

                                <div className="mx-auto grid grid-cols-1 gap-8 mt-8">
                                    {tiersPackAddons.map((tier) => (
                                        <div
                                            key={tier.id}
                                            className={`flex z-10 flex-col justify-between rounded-3xl bg-transparent/10 p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#BC994D4f_inset]`}
                                        >
                                            <div>
                                                <div className="flex flex-col md:flex-row justify-center md:justify-between text-center md:text-start items-center">
                                                    <div id={tier.id} className=" flex-col ">
                                                        <p className="text-2xl font-semibold leading-7 text-gold-100">
                                                            {tier.name}
                                                        </p>

                                                        <span className="text-sm text-white/50">
                                                            {tier.details}
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <span className="text-5xl font-bold tracking-tight text-gold-100">
                                                            {tier.priceMonthly}
                                                        </span>
                                                    </div>

                                                    {/* Version mobile */}
                                                    <div className="block md:hidden text-center mt-5 text-md text-white font-semibold ">
                                                        <p>{tier.description}</p>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2">
                                                    <div>
                                                        <ul
                                                            role="list"
                                                            className=" mt-10 space-y-4 text-sm leading-6 text-gray-200"
                                                        >
                                                            {tier.features.map((feature) => (
                                                                <li
                                                                    key={feature}
                                                                    className="flex gap-x-3"
                                                                >
                                                                    <IoCheckmarkDoneOutline
                                                                        className="h-6 w-5 flex-none text-gold-100"
                                                                        aria-hidden="true"
                                                                    />
                                                                    {feature}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="flex flex-col justify-center items-center">
                                                        {/* A partir de version tablette */}
                                                        <div className="hidden md:block text-center text-lg text-white font-semibold p-8 ">
                                                            <p>{tier.description}</p>
                                                        </div>
                                                        <Link
                                                            href={tier.url}
                                                            aria-describedby={tier.id}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="mt-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms] text-center"
                                                        >
                                                            <ShimmerButton
                                                                className="shadow-xl"
                                                                background="rgb(188,144,77)"
                                                            >
                                                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight dark:text-black lg:text-lg">
                                                                    Obtenir AishUI
                                                                </span>
                                                            </ShimmerButton>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
