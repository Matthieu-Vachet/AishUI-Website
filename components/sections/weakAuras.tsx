"use client";

import React from "react";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import AnimatedElement from "@/components/ui/animatedElements";

import { ImagesDatas } from "@/data/weakAurasDatas";

const WeakAuras = () => {
    return (
        <section
            id="weakauras"
            className="bg-gradient-to-b from-black-100 via-gold-100/15 to-black-100"
        >
            {/* Titre section */}
            <div className="text-center z-20">
                <AnimatedElement delay={0.4} duration={0.5}>
                    <h1 className=" font-Morpheus mt-36 md:mt-48 text-3xl md:text-4xl lg:text-6xl 3xl:text-7xl text-gradient">
                        Un WeakAuras sur <span className="font-bold text-gold-100">mesure</span>
                    </h1>
                </AnimatedElement>
            </div>
            <div className="max-w-[95vw] lg:max-w-[85vw] 3xl:max-w-[60vw] mx-auto mt-10 md:mt-14">
                <div className="relative grid grid-cols-1 gap-0 md:gap-5 mb-10 p-3 md:p-5">
                    {/* Sous titre section */}

                    <div className="flex flex-wrap justify-center items-center z-10">
                        <div className="flex flex-col justify-center items-center text-center">
                            <AnimatedElement delay={0.5} duration={0.5}>
                                <p className="text-gold-100 text-xl md:text-2xl lg:text-3xl">
                                    Pour les 13 classes ainsi que les 39 spécialisations
                                </p>
                            </AnimatedElement>
                        </div>
                    </div>

                    {/* Icones classe Wow */}
                    <div className="z-10">
                        <div className="flex flex-wrap justify-center items-center p-5 ">
                            {ImagesDatas.map((image, index) => (
                                <div key={index}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={128}
                                        height={150}
                                        className="w-14 md:w-24 lg:w-32 hover:scale-[1.35] transition-all duration-300 ease-in-out"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid 1 Rotation */}
                <div className="relative grid grid-cols-1 gap-0 md:gap-5 md:grid-cols-2 mb-10 p-3 md:p-5 bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#BC994D3f_inset] rounded-3xl">
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
                            <p className=" mb-[1rem] text-xl md:text-3xl  text-gradient uppercase font-semibold">
                                Système custom de Rotations & Prioritiés
                            </p>
                            <p className=" text-[#BC994D] text-lg md:text-2xl">
                                Pour toutes les spécialisations et builds
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid 2 Animation */}
                <div className="relative grid grid-cols-1 gap-0 md:gap-5 lg:grid-cols-2 mb-10 p-3 md:p-5 bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#BC994D3f_inset] rounded-3xl">
                    <div className=" flex flex-wrap justify-center items-center p-5 z-10">
                        <div className="flex flex-col justify-center items-center">
                            <p className=" mb-[1rem] text-xl md:text-3xl  text-gradient uppercase font-semibold">
                                Animations fluides
                            </p>
                            <p className="text-[#BC994D] text-lg md:text-2xl">
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

                {/* Grid 3 Dragonriding */}
                <div className="relative grid grid-cols-1 gap-0 md:gap-5 md:grid-cols-2 mb-10 p-3 md:p-5 bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#BC994D3f_inset] rounded-3xl">
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
                            <p className="mb-[1rem] text-xl md:text-3xl text-gradient uppercase font-semibold">
                                Personnalisation
                            </p>
                            <p className=" text-[#BC994D] text-lg md:text-2xl">
                                Affichage personnalisé du Dragonriding
                            </p>
                        </div>
                    </div>
                </div>

                {/* Autres features */}
                <div className="flex flex-wrap justify-center items-center text-center pt-5 md:pt-10 mb-20">
                    <div className="flex flex-col items-center gap-5 lg:gap-10">
                        {/* Feature Accessibilité */}
                        <AnimatedElement delay={0.4} duration={0.5} direction="bottom" blur>
                            <p className="bg-white/10 text-xl md:text-2xl lg:text-3xl 3xl:text-4xl text-gradient">
                                Options <span className="text-gold-100">d’accessibilité</span>
                            </p>
                        </AnimatedElement>

                        {/* Composant séparateur */}
                        <Separator />

                        {/* Feature Config */}
                        <AnimatedElement delay={0.5} duration={0.5} direction="bottom" blur>
                            <p className="bg-white/10 text-xl md:text-2xl lg:text-3xl 3xl:text-4xl text-gradient">
                                Aucune <span className="text-gold-100">configuration requise</span>
                            </p>
                        </AnimatedElement>

                        {/* Composant séparateur */}
                        <Separator />

                        {/* Feature Language */}
                        <AnimatedElement delay={0.6} duration={0.5} direction="bottom" blur>
                            <p className="bg-white/10 text-xl md:text-2xl lg:text-3xl 3xl:text-4xl text-gradient">
                                Fonctionne avec{" "}
                                <span className="text-gold-100">toutes les langues</span>
                            </p>
                        </AnimatedElement>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeakAuras;
