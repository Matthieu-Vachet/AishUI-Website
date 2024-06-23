"use client";

import React from "react";
import Image from "next/image";
import ShimmerButton from "@/components/shimmer-button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import TopToScroll from "../topToScroll";

const Hero = () => {
    return (
        <section id="home" className="w-full relative flex justify-center pt-32">
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
                <Image
                    src="/background/bg-wow.webp"
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black-100 to-transparent z-50"></div>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-7 md:gap-10 w-full px-4">
                <button className="flex items-center gap-2 border rounded-full border-gold-100/50 py-1 px-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_0px_0px_30px_0px_rgba(188,144,77,0.5)]">
                    <Image
                        src="/logo/aish_ui_2.webp"
                        alt="Logo AishUI"
                        width={19}
                        height={23}
                        priority
                        className="w-8 h-8 md:w-10 md:h-10"
                    />
                    <p className="text-xs md:text-sm text-gray-100 font-medium">
                        Dernière Version{" "}
                        <span className=" text-gold-100 font-extrabold text-sm md:text-lg">
                            V 2.4
                        </span>
                    </p>
                </button>
                <div className="text-2xl md:text-5xl lg:text-8xl flex items-center flex-col  md:gap-5 lg:gap-10 font-Morpheus">
                    <h1 className="text-gray-200 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms] ">
                        Explorer le monde <span className="text-gold-100">d&apos;Azeroth</span>
                    </h1>
                    <h2 className="text-white translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                        avec l&apos;interface parfaite
                    </h2>
                </div>
                <div className="w-[20rem] md:w-[40rem] relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms]">
                    <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-gold-100 to-transparent h-[2px] w-[3/4] blur-sm md:inset-x-20 md:w-[3/4]" />
                    <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-gold-100 to-transparent h-px w-3/4 md:inset-x-20 md:w-3/4" />
                    <div className="absolute inset-x-[calc(50%-25%)] top-0 bg-gradient-to-r from-transparent via-gold-100 to-transparent h-[5px] w-1/2 blur-sm md:inset-x-60 md:w-1/4" />
                    <div className="absolute inset-x-[calc(50%-25%)] top-0 bg-gradient-to-r from-transparent via-gold-100 to-transparent h-px w-1/2 md:inset-x-60 md:w-1/4" />
                </div>
                <div className="flex flex-col text-center text-gray-200 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                    <p className="text-md md:text-[20px]">
                        Profitez d&apos;une expérience de jeu avec une interface complète et non
                        intrusive,
                    </p>
                    <p className="text-md md:text-[20px]">
                        où les informations apparaissent au moment opportun.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <p className=" text-lg md:text-xl text-gray-100 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms]">
                        Compatible
                    </p>
                    <div className="flex items-center justify-center gap-3 md:gap-5">
                        <Image
                            src="/image/wow-cataclysme.webp"
                            alt="Logo AishUI"
                            width={160}
                            height={68}
                            priority
                            className=" w-44 md:w-[20rem] lg:w-[25rem] animate-slide-in-left opacity-0 [--animation-delay:900ms]"
                        />
                        <Image
                            src="/image/wow-dragonflight.webp"
                            alt="Logo AishUI"
                            width={136}
                            height={60}
                            priority
                            className=" w-40 md:w-[18rem] lg:w-[21rem] animate-slide-in-right opacity-0 [--animation-delay:900ms]"
                        />
                    </div>
                </div>
                <ShimmerButton className="shadow-xl" background="rgb(188,144,77)">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight dark:text-black lg:text-lg">
                        Get Started
                    </span>
                </ShimmerButton>
                <div className="relative hidden md:block md:mt-[-10rem]">
                    <div className="absolute top-64 left-[10%] right-[10%] h-1/2 mx-auto rounded-b-full bg-gradient-to-b from-gold-100/50 via-transparent to-transparent blur-3xl z-0"></div>{" "}
                    <ContainerScroll>
                        <Image
                            src={`/image/nomanclature.webp`}
                            alt="hero"
                            width={1200}
                            height={758}
                            className="mx-auto rounded-2xl object-container h-full object-left-top"
                        />
                    </ContainerScroll>
                </div>
            </div>
            <TopToScroll />
        </section>
    );
};

export default Hero;
