"use client";

import React from "react";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import AnimatedElement from "@/components/ui/animatedElements";

import { ImagesDatas } from "@/data/weakAurasDatas";

const WeakAuras = () => {
    return (
        <section id="weakauras">
            <div className="text-center z-20 ">
                <AnimatedElement delay={0.4} duration={0.5}>
                    <h2 className=" font-Morpheus mt-36 md:mt-48 text-3xl md:text-5xl lg:text-7xl text-gradient">
                        Un WeakAuras sur <span className="font-bold text-gold-100">mesure</span>
                    </h2>
                </AnimatedElement>
            </div>
            <div className="max-w-[95vw] lg:max-w-[60vw] mx-auto mt-10 md:mt-14">
                <div className="relative grid grid-cols-1 gap-0 md:gap-5 mb-10 p-3 md:p-5">
                    <div className="flex flex-wrap justify-center items-center z-10">
                        <div className="flex flex-col justify-center items-center text-center">
                            <p className="text-gold-100 text-xl md:text-2xl lg:text-3xl">
                                Pour les 13 classes ainsi que les 39 spécialisations
                            </p>
                        </div>
                    </div>
                    <div className="z-10">
                        <div className="flex flex-wrap justify-center items-center p-5">
                            {ImagesDatas.map((image, index) => (
                                <div key={index}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={128}
                                        height={150}
                                        className="w-16 md:w-24 lg:w-32"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative grid grid-cols-1 gap-0 md:gap-5 md:grid-cols-2 mb-10 p-3 md:p-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-black-100/10 to-brown-100/50 rounded-2xl backdrop-blur-sm border border-gold-100/20 z-10"></div>

                    <div className="flex justify-center items-center p-5 order-1 md:order-none z-10">
                        <Image
                            src="/gif/Rotation-2.gif"
                            alt="Rotation WeakAura"
                            width={380}
                            height={200}
                            className="border rounded-xl border-gold-100/50"
                            unoptimized
                        />
                    </div>
                    <div className="flex flex-wrap justify-center items-center text-center p-5 order-none md:order-none z-10">
                        <div className="flex flex-col justify-center items-center">
                            <p className=" gap-2 mb-[1rem] text-2xl md:text-3xl lg:text-4xl text-gradient uppercase font-semibold">
                                Système custom de Rotations & Prioritiés
                            </p>
                            <p className=" text-[#BC994D] text-xl md:text-2xl lg:text-3xl">
                                Pour toutes les spécialisations et builds
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative grid grid-cols-1 gap-0 md:gap-5 lg:grid-cols-2 mb-10 p-3 md:p-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-black-100/10 to-brown-100/50 rounded-2xl backdrop-blur-sm border border-gold-100/20 z-10"></div>

                    <div className=" flex flex-wrap justify-center items-center p-5 z-10">
                        <div className="flex flex-col justify-center items-center">
                            <p className=" gap-2 mb-[1rem] text-2xl md:text-3xl lg:text-4xl text-gradient uppercase font-semibold">
                                Animations fluides
                            </p>
                            <p className="text-[#BC994D] text-xl md:text-2xl lg:text-3xl">
                                Pour les sorts et les buffs
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-5 z-10">
                        <Image
                            src="/gif/Rotation-4.gif"
                            alt="Rotation WeakAura"
                            width={380}
                            height={200}
                            className="border rounded-xl border-gold-100/50"
                            unoptimized
                        />
                    </div>
                </div>

                <div className="relative grid grid-cols-1 gap-0 md:gap-5 md:grid-cols-2 mb-10 p-3 md:p-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-black-100/10 to-brown-100/50 rounded-2xl backdrop-blur-sm border border-gold-100/20 z-10"></div>

                    <div className="flex justify-center items-center p-5 order-1 md:order-none z-10">
                        <Image
                            src="/gif/Dragonriding.gif"
                            alt="Dragonriding WeakAura"
                            width={380}
                            height={200}
                            className="border rounded-xl border-gold-100/50"
                            unoptimized
                        />
                    </div>
                    <div className="flex flex-wrap justify-center items-center p-5 order-none md:order-none z-10">
                        <div className="flex flex-col justify-center items-center text-center">
                            <p className=" gap-2 mb-[1rem] text-2xl md:text-3xl lg:text-4xl text-gradient uppercase font-semibold">
                                Personnalisation
                            </p>
                            <p className=" text-[#BC994D] text-xl md:text-2xl lg:text-3xl">
                                Affichage personnalisé du Dragonriding
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center text-center pt-5 md:pt-10 mb-20">
                    <div className="flex flex-col items-center gap-5 lg:gap-10">
                        <p className="bg-white/10 text-xl md:text-2xl lg:text-3xl text-gradient">
                            Options <span className="text-gold-100">d’accessibilité</span>
                        </p>
                        <Separator />
                        <p className="bg-white/10 text-xl md:text-2xl lg:text-3xl text-gradient">
                            Aucune <span className="text-gold-100">configuration requise</span>
                        </p>
                        <Separator />
                        <p className="bg-white/10 text-xl md:text-2xl lg:text-3xl text-gradient">
                            Fonctionne avec{" "}
                            <span className="text-gold-100">toutes les langues</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeakAuras;
