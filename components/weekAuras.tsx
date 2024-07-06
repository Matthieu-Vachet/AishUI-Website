import React from "react";
import Image from "next/image";
import BoxReveal from "@/components/ui/boxReveal";
import AnimatedElement from "@/components/ui/animatedElements";

const imagesData = [
    { src: "/image/classe/Chaman.webp", alt: "Image de la classe Chaman" },
    { src: "/image/classe/Chasseur-de-démons.webp", alt: "Image de la classe Chasseur de démon" },
    { src: "/image/classe/Chasseur.webp", alt: "Image de la classe Chasseur" },
    {
        src: "/image/classe/Chevalier-de-la-mort.webp",
        alt: "Image de la classe chevalier de la mort",
    },
    { src: "/image/classe/Démoniste.webp", alt: "Image de la classe démoniste" },
    { src: "/image/classe/Druide.webp", alt: "Image de la classe druide" },
    { src: "/image/classe/Evocateur.webp", alt: "Image de la classe évocateur" },
    { src: "/image/classe/Guerrier.webp", alt: "Image de la classe guerrier" },
    { src: "/image/classe/Mage.webp", alt: "Image de la classe mage" },
    { src: "/image/classe/Moine.webp", alt: "Image de la classe moine" },
    { src: "/image/classe/Paladin.webp", alt: "Image de la classe paladin" },
    { src: "/image/classe/Prêtre.webp", alt: "Image de la classe prêtre" },
    { src: "/image/classe/Voleur.webp", alt: "Image de la classe voleur" },
];

function WeekAura() {
    return (
        <div id="weekauras">
            <div className="text-center uppercase ">
                <AnimatedElement delay={0.4} duration={0.5}>
                    <h2 className="mt-36 md:mt-48 text-2xl lg:text-5xl text-gradient">
                        Un WeakAuras sur <span className="font-bold text-gold-100">mesure</span>
                    </h2>
                </AnimatedElement>
            </div>
            <div className="max-w-[95vw] lg:max-w-[85vw] mx-auto mt-10 md:mt-14">
                <div className="relative grid grid-cols-1 gap-0 md:gap-5 md:grid-cols-2 mb-10 p-3 md:p-5">
                    {/* Élément de fond avec flou */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black-100/20 to-brown-100/50 rounded-2xl backdrop-blur-sm border border-gold-100/10"></div>

                    {/* Contenu */}
                    <div className="flex flex-wrap justify-center items-center z-10">
                        <BoxReveal boxColor={"#4D3B1E"} duration={0.5}>
                            <div className="flex flex-col justify-center items-center text-center">
                                <p className="gap-2 mb-[1rem] text-xl lg:text-4xl text-gradient uppercase font-semibold">
                                    WeakAuras complet
                                </p>
                                <p className="text-[#BC994D] text-xl lg:text-3xl">
                                    Pour les 13 classes ainsi que les 39 spécialisations
                                </p>
                            </div>
                        </BoxReveal>
                    </div>
                    <div className="z-10">
                        <div className="flex flex-wrap justify-center items-center p-5">
                            {/* Mapper sur le tableau de données pour afficher les images */}
                            {imagesData.map((image, index) => (
                                <div key={index}>
                                    <img src={image.src} alt={image.alt} className="w-16 md:w-32" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative grid grid-cols-1 gap-0 md:gap-5 md:grid-cols-2 mb-10 p-3 md:p-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-black-100/20 to-brown-100/50 rounded-2xl backdrop-blur-sm border border-gold-100/10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 order-1 md:order-none z-10">
                        <Image
                            src="/gif/Rotation-1.gif"
                            alt="Rotation WeakAura"
                            width={500}
                            height={500}
                            className="border rounded-xl border-gold-100/50"
                        />
                        <Image
                            src="/gif/Rotation-2.gif"
                            alt="Rotation WeakAura"
                            width={500}
                            height={500}
                            className="border rounded-xl border-gold-100/50"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center items-center text-center p-5 order-none md:order-none z-10">
                        <BoxReveal boxColor={"#4D3B1E"} duration={0.5}>
                            <div className="flex flex-col justify-center items-center">
                                <p className=" gap-2 mb-[1rem] text-xl lg:text-4xl text-gradient uppercase font-semibold">
                                    Système custom de Rotations & Prioritiés
                                </p>
                                <p className=" text-[#BC994D] text-xl lg:text-3xl">
                                    Pour toutes les spécialisations et builds
                                </p>
                            </div>
                        </BoxReveal>
                    </div>
                </div>

                <div className="relative grid grid-cols-1 gap-0 md:gap-5 md:grid-cols-2 mb-10 p-3 md:p-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-black-100/20 to-brown-100/50 rounded-2xl backdrop-blur-sm border border-gold-100/10"></div>

                    <div className=" flex flex-wrap justify-center items-center p-5 z-10">
                        <BoxReveal boxColor={"#4D3B1E"} duration={0.5}>
                            <div className="flex flex-col justify-center items-center">
                                <p className=" gap-2 mb-[1rem] text-xl lg:text-4xl text-gradient uppercase font-semibold">
                                    Animations fluides
                                </p>
                                <p className="text-[#BC994D] text-xl lg:text-3xl">
                                    Pour les sorts et les buffs
                                </p>
                            </div>
                        </BoxReveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 z-10">
                        <Image
                            src="/gif/Rotation-3.gif"
                            alt="Rotation WeakAura"
                            width={500}
                            height={500}
                            className="border rounded-xl border-gold-100/50"
                        />
                        <Image
                            src="/gif/Rotation-4.gif"
                            alt="Rotation WeakAura"
                            width={500}
                            height={500}
                            className="border rounded-xl border-gold-100/50"
                        />
                    </div>
                </div>

                <div className="relative grid grid-cols-1 gap-0 md:gap-5 md:grid-cols-2 mb-10 p-3 md:p-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-black-100/20 to-brown-100/50 rounded-2xl backdrop-blur-sm border border-gold-100/10"></div>

                    <div className="flex justify-center items-center p-5 order-1 md:order-none z-10">
                        <Image
                            src="/gif/Dragonriding.gif"
                            alt="Dragonriding WeakAura"
                            width={600}
                            height={600}
                            className="border rounded-xl border-gold-100/50"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center items-center p-5 order-none md:order-none z-10">
                        <BoxReveal boxColor={"#4D3B1E"} duration={0.5}>
                            <div className="flex flex-col justify-center items-center text-center">
                                <p className=" gap-2 mb-[1rem] text-xl lg:text-4xl text-gradient uppercase font-semibold">
                                    Personnalisation
                                </p>
                                <p className=" text-[#BC994D] text-xl lg:text-3xl">
                                    Affichage personnalisé du Dragonriding
                                </p>
                            </div>
                        </BoxReveal>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center text-center mb-20">
                    <BoxReveal boxColor={"#4D3B1E"} duration={0.5}>
                        <div className="grid grid-cols-3 gap-14">
                            <p className="bg-white/10 text-xl lg:text-3xl text-gradient  font-semibold">
                                Options <span className="text-gold-100">d’accessibilité</span>
                            </p>
                            <p className="bg-white/10 text-xl lg:text-3xl text-gradient  font-semibold">
                                Aucune <span className="text-gold-100">configuration requise</span>
                            </p>
                            <p className="bg-white/10 text-xl lg:text-3xl text-gradient  font-semibold">
                                Fonctionne avec{" "}
                                <span className="text-gold-100">toutes les langues</span>
                            </p>
                        </div>
                    </BoxReveal>
                </div>
            </div>
        </div>
    );
}

export default WeekAura;
