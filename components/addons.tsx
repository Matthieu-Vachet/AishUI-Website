import React from "react";
import { TabsContent } from "@/components/tabsContent";
import AnimatedElement from "@/components/ui/animatedElements";

function Addons() {
    return (
        <div id="addons">
            <div className="text-center">
                <AnimatedElement delay={0.4} duration={0.5}>
                    <h2 className=" font-Morpheus mt-5 md:mt-32 text-3xl md:text-5xl lg:text-7xl text-gradient">
                        Des addons peaufinés aux petits oignons
                    </h2>
                </AnimatedElement>
            </div>
            <TabsContent />
        </div>
    );
}

export default Addons;
