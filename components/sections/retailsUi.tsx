"use client";
import React from "react";
import { Features } from "@/components/ui/feature";
import GridFeature from "@/components/grid-feature";
import { TabsContent } from "@/components/tabsContent";

const Retails = () => {
    return (
        <section
            id="retailUi"
            className=" -mt-[10rem] md:-mt-[20rem] bg-gradient-to-b from-transparent via-brown-100/10 to-black"
        >
            <div>
                <Features color="	188, 144, 77" colorDark="188, 151, 98">
                    <Features.Main
                        title="Retail UI"
                        text={
                            <div className="-mt-10">
                                Compatible au dernier Patch{" "}
                                <span className=" text-gold-100 font-bold">10.2</span>
                            </div>
                        }
                    />
                </Features>
            </div>
            <div className="text-center">
                <h2 className="-mt-28 md:-mt-56 mb-4 text-2xl md:mb-7 lg:text-5xl text-gradient">
                    Des fonctionnalités en constent évolution
                </h2>
            </div>
            <GridFeature />
            <div>
                <div className="text-center">
                    <h2 className="mt-20 md:mt-32 text-2xl lg:text-5xl text-gradient">
                        Des addons peaufinés aux petits oignons
                    </h2>
                </div>
                <TabsContent />
            </div>
        </section>
    );
};

export default Retails;
