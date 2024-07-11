"use client";

import Image from "next/image";
import { useState } from "react";

export const BeforeAfter = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isDragging) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="w-full relative border-2 border-gold-100/50 rounded-2xl max-w-[90vw] lg:max-w-[70vw] 3xl:max-w-[50vw] mx-auto mt-10"
            onMouseUp={handleMouseUp}
        >
            <div
                className="relative w-full aspect-[70/45] m-auto overflow-hidden select-none rounded-2xl"
                onMouseMove={handleMove}
                onMouseDown={handleMouseDown}
            >
                <Image
                    alt="Capture d'écran de World of Warcraft avec Reshade"
                    fill
                    draggable={false}
                    priority
                    src="/image/reshade-After.webp"
                    quality={100}
                />

                <div
                    className="absolute top-0 left-0 right-0 w-full aspect-[70/45] m-auto overflow-hidden select-none rounded-2xl"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <Image
                        fill
                        priority
                        draggable={false}
                        alt="Capture d'écran de World of Warcraft sans Reshade"
                        src="/image/reshade-Before.webp"
                        quality={100}
                    />
                </div>
                <div
                    className="absolute top-0 bottom-0 w-1 bg-gold-100/50 cursor-ew-resize"
                    style={{
                        left: `calc(${sliderPosition}% - 1px)`,
                    }}
                >
                    <div className="bg-gold-100 absolute rounded-full h-4 w-4 -left-1.5 top-[calc(50%-5px)]" />
                </div>
            </div>
        </div>
    );
};
