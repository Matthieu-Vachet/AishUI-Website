import React from "react";
import AnimatedElement from "@/components/ui/animatedElements";
import { BeforeAfter } from "@/components/ui/beforeAfter";

function Reshade() {
    return (
        <div id="reshade">
            <div className="text-center max-w-[90vw] lg:max-w-[85vw] mx-auto">
                <AnimatedElement delay={0.4} duration={0.5}>
                    <h2 className=" font-Morpheus mt-5 md:mt-32 text-3xl md:text-5xl lg:text-7xl text-gradient">
                        Reshade - EarthBinder
                    </h2>
                </AnimatedElement>
                <AnimatedElement delay={0.4} duration={0.5}>
                    <h3 className="mt-5 md:mt-10 text-xl md:text-2xl lg:text-3xl text-white/50">
                        Suivez les visions de l’Earthbinder et découvrez WoW sous un autre jour,
                        pour une expérience visuelle et des graphismes enrichis !
                    </h3>
                </AnimatedElement>
            </div>
            <div>
                <BeforeAfter />
            </div>
        </div>
    );
}

export default Reshade;
