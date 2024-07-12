"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import PulsatingButton from "@/components/ui/pulsating-button";
import { Separator } from "@/components/ui/separator";
import { ContainerScroll } from "@/components/ui/containerScrollAnimation";
import TopToScroll from "@/components/ui/topToScroll";

const Hero = () => {
    return (
        <section id="home" className="w-full relative flex justify-center pt-32">
            {/* Background Image */}
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-35 md:opacity-20">
                <Image
                    src="/background/bg-wow.webp"
                    alt="Hero Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black-100 to-transparent"></div>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-7 md:gap-10 w-full px-4">
                {/* Boutton version */}
                <button className="flex items-center gap-2 border rounded-full border-gold-100/50 py-1 px-3  shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_0px_0px_30px_0px_rgba(188,144,77,0.5)]">
                    <Image
                        src="/logo/aish_ui_2.webp"
                        alt="Logo AishUI"
                        width={19}
                        height={23}
                        priority
                        className="w-8 h-8 md:w-10 md:h-10"
                    />
                    <p className="text-xs md:text-sm text-gray-100 font-medium ">
                        Dernière Version{" "}
                        <span className=" text-gold-100 font-extrabold text-sm md:text-lg">
                            V 2.5
                        </span>
                    </p>
                </button>

                {/* Titre */}
                <div className="text-[1.7rem] md:text-6xl lg:text-7xl 3xl:text-8xl flex items-center flex-col  md:gap-5 lg:gap-10 font-Morpheus">
                    <h1 className="text-gray-200 dark:text-gray-200 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms] ">
                        Explorer le monde <span className="text-gold-100">d&apos;Azeroth</span>
                    </h1>
                    <h2 className="text-gray-100 dark:text-white translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                        avec l&apos;interface parfaite
                    </h2>
                </div>

                {/* Composant Separateur */}
                <Separator />

                {/* Sous texte */}
                <div className="flex flex-col text-center text-gray-200 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                    <p className="text-sm md:text-xl 3xl:text-2xl">
                        Profitez d&apos;une expérience de jeu avec une interface complète et non
                        intrusive,
                    </p>
                    <p className="text-sm md:text-xl lg:text-xl">
                        où les informations apparaissent au moment opportun.
                    </p>
                </div>

                {/* Texte et image de comptabilité */}
                <div className="flex flex-col items-center gap-6">
                    <p className=" text-md md:text-xl lg:text-2xl text-gray-100 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms]">
                        Compatible
                    </p>
                    <div className="flex items-center justify-center gap-3 md:gap-5">
                        <Image
                            src="/image/wow-cataclysme.webp"
                            alt="Logo World of warcraft Cataclysme"
                            width={160}
                            height={68}
                            priority
                            className="w-44 md:w-[20rem] lg:w-[25rem] animate-slide-in-left opacity-0 [--animation-delay:900ms]"
                        />
                        <Image
                            src="/image/wow-dragonflight.webp"
                            alt="Logo World of warcraft Dragonflight"
                            width={136}
                            height={60}
                            priority
                            className="w-40 md:w-[18rem] lg:w-[21rem] animate-slide-in-right opacity-0 [--animation-delay:900ms]"
                        />
                    </div>
                </div>

                {/* Boutton obtention */}
                <Link
                    href="https://ko-fi.com/aishuutv/shop?action=shop"
                    aria-describedby="Lien ver la boutique Ko-fi de AishUI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center mt-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms] text-center z-10"
                >
                    <PulsatingButton
                        text="Obtenir AishUI"
                        pulseColor="77,59,30"
                        backgroundColor="#BC994D"
                        textColor="#ffffff"
                        animationDuration="1.5s"
                        buttonWidth="150px"
                        buttonHeight="50px"
                    />
                </Link>

                {/* Image composant container scroll */}
                <div className="relative hidden md:block md:mt-[-10rem]">
                    <div className="absolute top-56 left-[10%] right-[10%] h-1/2 mx-auto rounded-b-full bg-gradient-to-b from-gold-100/30 via-transparent to-transparent blur-3xl z-0"></div>
                    <ContainerScroll>
                        <Image
                            src="/image/containerScroll.png"
                            alt="Capture d'écrans AishUI"
                            width={2500}
                            height={1440}
                            className="mx-auto rounded-2xl object-container h-full object-left-top"
                            quality={100}
                            priority
                        />
                    </ContainerScroll>
                </div>
            </div>

            {/* Boutton scroll vers le haut */}
            <TopToScroll />
        </section>
    );
};

export default Hero;
