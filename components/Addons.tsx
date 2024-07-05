import React from "react";
import { TabsContent } from "@/components/Tabs-Content";
import AnimatedElement from "@/components/ui/Animated-Elements";

function Addons() {
    return (
        <div id="addons">
            <div className="text-center uppercase">
                <AnimatedElement delay={0.4} duration={0.5}>
                    <h2 className="mt-20 md:mt-32 text-2xl lg:text-5xl text-gradient">
                        Des addons peaufinés aux petits oignons
                    </h2>
                </AnimatedElement>
            </div>
            <TabsContent />
        </div>
    );
}

export default Addons;
