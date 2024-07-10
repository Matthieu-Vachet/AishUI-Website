"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { BorderBeam } from "@/components/ui/borderBeam";

export function TabsContent() {
    const tabs = [
        {
            title: "Elvui",
            value: "elvui",
            image: "/image/elvui-Screen.webp",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-black-100 to-brown-100 border border-white/30">
                    <div className="flex flex-col items-center gap-1 md:gap-5">
                        <p className="font-Morpheus text-2xl md:text-3xl font-bold text-gold-100">
                            ElvUI
                        </p>
                        <p className="w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            ElvUI est un addon incontournable pour World of Warcraft, transformant
                            et personnalisant complètement l&apos;interface utilisateur. Il remplace
                            plusieurs addons individuels, offrant une expérience unifiée et
                            hautement configurable. Un must-have pour ceux qui veulent une interface
                            épurée et efficace.
                        </p>
                        <p className=" w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            Commande en jeu: <span className="text-gold-100">/elvui</span> &{" "}
                            <span className="text-gold-100">/moveui</span>
                        </p>
                    </div>
                    <div className="border absolute border-gold-100/10 h-[60%] mt-10 md:h-[90%]  inset-x-0 w-[90%] mx-auto rounded-2xl p-4 bg-black-100">
                        <Image
                            src="/image/elvui-Screen.webp"
                            alt="dummy image"
                            width="1000"
                            height="1000"
                            className="w-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-200 object-left-top rounded-2xl "
                        />
                        <BorderBeam size={250} duration={12} delay={9} />
                    </div>
                </div>
            ),
        },
        {
            title: "WeakAuras",
            value: "weakAuras",
            content: (
                <div className="w-full  overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-black-100 to-brown-100 border border-white/30">
                    <div className="flex flex-col items-center gap-5">
                        <p className="font-Morpheus text-2xl md:text-3xl font-bold text-gold-100">
                            WeakAuras
                        </p>
                        <p className="w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            WeakAuras est un addon puissant qui permet de créer des alertes
                            visuelles et auditives personnalisées. Parfait pour suivre les buffs,
                            debuffs et autres événements importants en jeu. Un outil essentiel pour
                            optimiser vos performances et votre réactivité.
                        </p>
                        <p className=" w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            Commande en jeu: <span className="text-gold-100">/wa</span>
                        </p>
                    </div>
                    <div className="border absolute border-gold-100/10 h-[60%] mt-10 md:h-[90%]  inset-x-0 w-[90%] mx-auto rounded-2xl p-4 bg-black-100">
                        <Image
                            src="/image/weekAura-Screen.webp"
                            alt="dummy image"
                            width="1000"
                            height="1000"
                            className="w-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-200 object-left-top rounded-2xl "
                        />
                        <BorderBeam size={250} duration={12} delay={9} />
                    </div>
                </div>
            ),
        },
        {
            title: "DynamicCam",
            value: "dynamicCam",
            content: (
                <div className="w-full  overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-black-100 to-brown-100 border border-white/30">
                    <div className="flex flex-col items-center gap-5">
                        <p className="font-Morpheus text-2xl md:text-3xl font-bold text-gold-100">
                            DynamicCam
                        </p>
                        <p className="w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            DynamicCam améliore l&apos;expérience de jeu en rendant la caméra plus
                            dynamique et immersive. Il ajuste automatiquement la position et
                            l&apos;angle de la caméra en fonction des actions et de
                            l&apos;environnement, ajoutant une nouvelle dimension à votre aventure.
                        </p>
                        <p className=" w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            Commande en jeu: <span className="text-gold-100">/dc</span>
                        </p>
                    </div>
                    <div className="border absolute border-gold-100/10 h-[60%] mt-10 md:h-[90%]  inset-x-0 w-[90%] mx-auto rounded-2xl p-4 bg-black-100">
                        <Image
                            src="/image/dynamicCam-Screen.webp"
                            alt="dummy image"
                            width="1000"
                            height="1000"
                            className="w-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-200 object-left-top rounded-2xl "
                        />
                        <BorderBeam size={250} duration={12} delay={9} />
                    </div>
                </div>
            ),
        },
        {
            title: "BigWigs",
            value: "bigWigs",
            content: (
                <div className="w-full  overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-black-100 to-brown-100 border border-white/30">
                    <div className="flex flex-col items-center gap-5">
                        <p className="font-Morpheus text-2xl md:text-3xl font-bold text-gold-100">
                            BigWigs
                        </p>
                        <p className="w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            BigWigs est l&apos;addon idéal pour les rencontres de boss en donjon et
                            en raid. Il fournit des alertes et des minuteries précises pour vous
                            aider à anticiper les compétences des boss et à coordonner vos actions.
                            Indispensable pour tous les raideurs sérieux.
                        </p>
                        <p className=" w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            Commande en jeu: <span className="text-gold-100">/bw</span>
                        </p>
                    </div>
                    <div className="border absolute border-gold-100/10 h-[60%] mt-10 md:h-[90%]  inset-x-0 w-[90%] mx-auto rounded-2xl p-4 bg-black-100">
                        <Image
                            src="/image/bigwig-Screen.webp"
                            alt="dummy image"
                            width="1000"
                            height="1000"
                            className="w-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-200 object-left-top rounded-2xl "
                        />
                        <BorderBeam size={250} duration={12} delay={9} />
                    </div>
                </div>
            ),
        },
        {
            title: "Details",
            value: "details",
            content: (
                <div className="w-full  overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-black-100 to-brown-100 border border-white/30">
                    <div className="flex flex-col items-center gap-5">
                        <p className="font-Morpheus text-2xl md:text-3xl font-bold text-gold-100">
                            Details
                        </p>
                        <p className="w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            Details! est un addon indispensable pour World of Warcraft, offrant des
                            analyses détaillées de votre performance en combat. Que ce soit pour
                            suivre votre DPS, soigner ou gérer l&apos;aggro, cet addon fournit des
                            données précises et des graphiques clairs pour vous aider à optimiser
                            chaque aspect de votre gameplay. Un must pour tous ceux qui cherchent à
                            maximiser leur efficacité en jeu.
                        </p>
                        <p className=" w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            Commande en jeu: <span className="text-gold-100">/details options</span>
                        </p>
                    </div>
                    <div className="border absolute border-gold-100/10 h-[60%] mt-10 md:h-[90%]  inset-x-0 w-[90%] mx-auto rounded-2xl p-4 bg-black-100">
                        <Image
                            src="/image/details-Screen.webp"
                            alt="dummy image"
                            width="1000"
                            height="1000"
                            className="w-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-200 object-left-top rounded-2xl "
                        />
                        <BorderBeam size={250} duration={12} delay={9} />
                    </div>
                </div>
            ),
        },
        {
            title: "Raven",
            value: "raven",
            content: (
                <div className="w-full  overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-black-100 to-brown-100 border border-white/30">
                    <div className="flex flex-col items-center gap-5">
                        <p className="font-Morpheus text-2xl md:text-3xl font-bold text-gold-100">
                            Raven
                        </p>
                        <p className="w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            Raven, l&apos;addon essentiel pour WoW qui révolutionne l&apos;interface
                            de jeu : organisez vos buffs, debuffs et notifications comme jamais
                            auparavant, pour une immersion ultime dans World of Warcraft !
                        </p>
                        <p className=" w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            Commande en jeu: <span className="text-gold-100">/raven</span>
                        </p>
                    </div>
                    <div className="border absolute border-gold-100/10 h-[60%] mt-10 md:h-[90%]  inset-x-0 w-[90%] mx-auto rounded-2xl p-4 bg-black-100">
                        <Image
                            src="/image/raven-Screen.webp"
                            alt="dummy image"
                            width="1000"
                            height="1000"
                            className="w-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-200 object-left-top rounded-2xl "
                        />
                        <BorderBeam size={250} duration={12} delay={9} />
                    </div>
                </div>
            ),
        },
        {
            title: "Tchat",
            value: "tchat",
            content: (
                <div className="w-full  overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-black-100 to-brown-100 border border-white/30">
                    <div className="flex flex-col items-center gap-5">
                        <p className="font-Morpheus text-2xl md:text-3xl font-bold text-gold-100">
                            ChatCleaner, GlobalIgnoreList, et LS:Glass
                        </p>
                        <p className="w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            Optimisez votre expérience de discussion entre un mix unique de
                            ChatCleaner, GlobalIgnoreList, et LS:Glass, pour un chat WoW propre et
                            efficace. Dites adieu aux distractions, spam et concentrez-vous sur
                            l&apos;essentiel !
                        </p>
                        <p className=" w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            Commande en jeu LS:Glass: <span className="text-gold-100">/lsg</span>
                        </p>
                        <p className=" w-full lg:w-[80%] text-md md:text-xl text-white/50">
                            Commande en jeu Global Ignore List:{" "}
                            <span className="text-gold-100">/gil gui</span>
                        </p>
                    </div>
                    <div className="border absolute border-gold-100/10 h-[60%] mt-10 md:h-[90%]  inset-x-0 w-[90%] mx-auto rounded-2xl p-4 bg-black-100">
                        <Image
                            src="/image/tchat-Screen.webp"
                            alt="dummy image"
                            width="1000"
                            height="1000"
                            className="w-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-200 object-left-top rounded-2xl "
                        />
                        <BorderBeam size={250} duration={12} delay={9} />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="h-[40rem] md:h-[50rem] lg:h-[70rem] [perspective:1000px] relative b flex flex-col  max-w-[90vw] lg:max-w-[85vw] mx-auto w-full  items-start justify-start my-10 md:my-20 pb-12 z-20">
            <Tabs tabs={tabs} />
        </div>
    );
}
