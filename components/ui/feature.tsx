"use client";

import React from "react";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { Container } from "./container";

type FeaturesProps = {
    children: React.ReactNode;
    color: string;
    colorDark: string;
};

export const Features = ({ children, color, colorDark }: FeaturesProps) => {
    const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: false });

    return (
        <div
            ref={ref}
            className={classNames(
                "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0",
                inView && "is-visible before:opacity-30 before:[transform:rotate(180deg)_scale(2)]",
                !inView && "before:rotate-180 before:opacity-40",
            )}
            style={
                {
                    "--feature-color": color,
                    "--feature-color-dark": colorDark,
                } as React.CSSProperties
            }
        >
            <div className="mt-[12.8rem] mb-16 w-full md:mt-[25.2rem] md:mb-[12.8rem]">
                {children}
            </div>
        </div>
    );
};

type MainFeatureProps = {
    text?: React.ReactNode;
    title: React.ReactNode;
    imageSize?: "small" | "large";
};

const MainFeature = ({ text, title, imageSize = "small" }: MainFeatureProps) => {
    return (
        <>
            <div className="relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.01),transparent)]">
                <Container
                    className={classNames(
                        "max-w-[95%] text-center",
                        imageSize === "small" ? "w-[78rem]" : "w-[102.4rem]",
                    )}
                >
                    <h1 className="text-gradient mb-11 translate-y-[40%] pt-[12rem] text-center text-5xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:pt-0 md:text-8xl [.is-visible_&]:translate-y-0">
                        {title}
                    </h1>
                </Container>
            </div>
            <Container className="w-[78rem] max-w-[90%] text-center">
                <h2 className="mx-auto mb-[2rem] md:mb-[5rem] my-16 text-xl leading-tight text-white md:w-[80%] md:text-4xl">
                    {text}
                </h2>
                <hr className="mb-[5rem] md:mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2)_50%,transparent)]" />
            </Container>
        </>
    );
};

Features.Main = MainFeature;
