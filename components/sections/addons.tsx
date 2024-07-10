"use client";

import React from "react";

import { TabsContent } from "@/components/ui/tabsContent";
import AnimatedElement from "@/components/ui/animatedElements";

const Addons = () => {
    return (
        <section id="addons">
            <div className="mx-auto max-w-[95vw] lg:max-w-[85vw] 3xl:max-w-[75vw]">
                <div className="text-center relative z-20">
                    <AnimatedElement delay={0.4} duration={0.5}>
                        <h2 className=" font-Morpheus mt-5 md:mt-32 text-3xl md:text-5xl lg:text-7xl text-gradient">
                            Des addons peaufinés aux petits oignons
                        </h2>
                    </AnimatedElement>
                </div>
                <TabsContent />
            </div>
        </section>
    );
};

export default Addons;
