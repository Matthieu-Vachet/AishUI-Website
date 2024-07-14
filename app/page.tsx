import React, { lazy, Suspense } from "react";
import { Header } from "@/components/header";

import Hero from "@/components/sections/hero";

const AishUi = lazy(() => import("@/components/sections/aishUi"));
const Addons = lazy(() => import("@/components/sections/addons"));
const WeakAuras = lazy(() => import("@/components/sections/weakAuras"));
const Reshade = lazy(() => import("@/components/sections/reshade"));
const Pricing = lazy(() => import("@/components/sections/pricing"));
import { Footer } from "@/components/footer";

import Particles from "@/components/ui/particles";
import classNames from "classnames";

const Loader = () => (
    <div className="flex justify-center items-center h-full">
        <p>Loading...</p>
    </div>
);

export default function Home() {
    return (
        <main className="relative dark:bg-black-100 flex justify-center items-center flex-col mx-auto ">
            <div className=" w-full h-full">
                <Header />
                <Hero />
                <Suspense fallback={<Loader />}>
                    <AishUi />
                    <div>
                        <div className="relative">
                            <Addons />
                            <WeakAuras />
                            <div>
                                <Particles
                                    quantity={800}
                                    ease={80}
                                    color={"#ffffff"}
                                    refresh
                                    className="absolute inset-0 z-0 opacity-50 md:opacity-70"
                                />
                            </div>
                        </div>
                        <div
                            className={classNames(
                                "mask-radial-faded relative pointer-events-none h-[15rem] md:h-[30rem] overflow-hidden",
                                "[--color:#BC994D] before:absolute before:inset-0 before:bg-radial-faded before:top-[5%] md:before:top-[20%] before:-left-1/2 before:h-[142.8%] before:w-[200%] before:rounded-[50%] before:blur-lg md:before:blur-2xl", // Ajusté top-[30%] à top-[25%]
                                "after:absolute after:top-[30%] after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:bg-black-100 after:border after:border-white/30 md:after:border-white/50",
                            )}
                        ></div>
                        <Reshade />
                        <Pricing />
                    </div>
                </Suspense>
                <Footer />
            </div>
        </main>
    );
}
