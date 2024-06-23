import React from "react";
import Image from "next/image";
import { VelocityScroll } from "@/components/marquee";
import WordRotate from "@/components/ui/word-rotate";

function GridFeature() {
    return (
        <div className="mx-auto h-[28rem] overflow-hidden md:h-auto md:overflow-auto z-50 lg:max-w-[85vw]">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden">
                <div className="relative flex min-h-[20rem] w-full shrink-0 snap-center flex-col items-center justify-center md:justify-end overflow-hidden rounded-[3rem] border border-white/30 bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-4">
                    <div className="absolute inset-0 z-0 sepia opacity-20 hover:sepia-0 transition-sepia duration-300 ease-in-out">
                        <Image
                            src="/image/reshade-grid.png"
                            alt="Image de fond"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <VelocityScroll
                        text="Guerrier - Paladin - Chasseur - Voleur - Prêtre - Chaman - Mage - Démoniste - Moine - Druide - Chasseur de démons - Chevalier de la mort - Évocateur - "
                        default_velocity={1}
                        className=" font-Morpheus text-center text-4xl md:text-5xl font-semibold tracking-[-0.02em] drop-shadow-sm text-white opacity-30 hover:opacity-100 transition-opacity duration-300 ease-in-out  lg:text-6xl leading-[5rem] lg:leading-[8rem]"
                    />
                    <p className="mb-4 mt-6 text-2xl md:text-3xl lg:text-4xl text-gold-100/50 font-semibold">
                        Profils compatible avec toute les classes de
                    </p>
                    <p className=" font-Morpheus text-4xl lg:text-5xl text-gold-100 font-bold">
                        World of Warcraft
                    </p>
                </div>
                <div className="relative flex min-h-[20rem] w-full shrink-0 snap-center flex-col items-center justify-center overflow-hidden rounded-[3rem] border border-white/30 bg-glass-gradient p-20 text-center md:basis-[calc(33.33%-12px)] md:p-4 gap-16">
                    <div className="mask-linear-faded absolute top-[-9.2rem]"></div>
                    <div className="absolute inset-0 z-0 blur-sm opacity-20 hover:blur-0 transition-blur duration-300 ease-in-out">
                        <Image
                            src="/image/weakAura.webp"
                            alt="Image de fond"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="text-gold-100 font-semibold z-50">
                        <p className="mb-4 text-4xl lg:text-5xl ">WeakAuras</p>
                        <p className="text-2xl lg:text-3xl text-primary-text text-white opacity-50">
                            Pour les 13 classes et leurs spécialisations
                        </p>
                    </div>
                </div>
                <div className="group relative flex min-h-[20rem] w-full shrink-0 snap-center flex-col items-center justify-center overflow-hidden rounded-[3rem] border border-white/30 bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-4 gap-10">
                    <div className="pointer-events-none absolute top-[-8rem] w-[130%]"></div>
                    <div className="text-gold-100 font-semibold z-10">
                        <p className="mb-4 text-4xl lg:text-5xl">Les Meilleurs Addons</p>
                        <p className="text-2xl lg:text-3xl text-primary-text opacity-50">
                            Profils d&apos;addons personnalisés
                        </p>
                    </div>
                    <WordRotate
                        className="text-4xl md:text-3xl lg:text-6xl font-semibold  text-white/50 hover:text-white transition-colors duration-300 ease-in-out z-10"
                        words={[
                            "ElvUI",
                            "Dynamic Cam",
                            "Windtools",
                            "Details",
                            "Blizzard HUD",
                            "Details",
                            "Raven",
                            "Big Wigs",
                        ]}
                    />
                </div>
                <div className="relative flex justify-center min-h-[20rem] w-full shrink-0 snap-center flex-col items-center overflow-hidden rounded-[3rem] border border-white/30 p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-4">
                    {/* Image de fond avec positionnement absolu */}
                    <div className="absolute inset-0 z-0 sepia opacity-30 hover:sepia-0 transition-sepia duration-300 ease-in-out">
                        <Image
                            src="/image/Reshade.webp"
                            alt="Image de fond"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    {/* Contenu superposé avec positionnement relatif */}
                    <div className="flex flex-col relative z-10 gap-10">
                        <div>
                            <p className="mb-4 text-4xl lg:text-5xl text-gold-100 font-semibold">
                                Reshade EarthBinder
                            </p>
                            <p className="text-2xl lg:text-3xl text-primary-text text-gold-100 opacity-70">
                                Profils JOUR / NUIT
                            </p>
                        </div>
                        <p className="mb-4 text-2xl lg:text-3xl text-white/50 font-semibold">
                            Une expérience visuelle à couper le souffle !
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridFeature;
