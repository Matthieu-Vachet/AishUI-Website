"use client";

import React from "react";

import { TabsContent } from "@/components/ui/tabsContent";
import AnimatedElement from "@/components/ui/animatedElements";

const Addons = () => {
    return (
        <section id="addons">
            <div className="mx-auto max-w-[95vw] lg:max-w-[85vw] 3xl:max-w-[75vw]">
                {/* Titre section */}
                <div className="text-center relative z-20">
                    <AnimatedElement delay={0.4} duration={0.5}>
                        <h1 className=" font-Morpheus md:mt-32 text-3xl md:text-4xl lg:text-6xl 3xl:text-7xl text-gradient">
                            Des addons peaufinés aux petits oignons
                        </h1>
                    </AnimatedElement>
                </div>

                {/* Composant TabsContent */}
                <TabsContent />
            </div>
        </section>
    );
};

export default Addons;
