import React from "react";

export const Separator = () => {
    return (
        <div className="w-[20rem] md:w-[40rem] relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms]">
            <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-gold-100 to-transparent h-[2px] w-[3/4] blur-sm md:inset-x-20 md:w-[3/4]" />
            <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-gold-100 to-transparent h-px w-3/4 md:inset-x-20 md:w-3/4" />
            <div className="absolute inset-x-[calc(50%-25%)] top-0 bg-gradient-to-r from-transparent via-gold-100 to-transparent h-[5px] w-1/2 blur-sm md:inset-x-60 md:w-1/4" />
            <div className="absolute inset-x-[calc(50%-25%)] top-0 bg-gradient-to-r from-transparent via-gold-100 to-transparent h-px w-1/2 md:inset-x-60 md:w-1/4" />
        </div>
    );
};
