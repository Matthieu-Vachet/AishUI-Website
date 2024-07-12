"use client";

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useAnimation, useMotionValue, useTransform } from "framer-motion";

export const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

type UseMediaQueryOptions = {
    defaultValue?: boolean;
    initializeWithValue?: boolean;
};

const IS_SERVER = typeof window === "undefined";

export function useMediaQuery(
    query: string,
    { defaultValue = false, initializeWithValue = true }: UseMediaQueryOptions = {},
): boolean {
    const getMatches = (query: string): boolean => {
        if (IS_SERVER) {
            return defaultValue;
        }
        return window.matchMedia(query).matches;
    };

    const [matches, setMatches] = useState<boolean>(() => {
        if (initializeWithValue) {
            return getMatches(query);
        }
        return defaultValue;
    });

    const handleChange = () => {
        setMatches(getMatches(query));
    };

    useIsomorphicLayoutEffect(() => {
        const matchMedia = window.matchMedia(query);
        handleChange();

        matchMedia.addEventListener("change", handleChange);

        return () => {
            matchMedia.removeEventListener("change", handleChange);
        };
    }, [query]);

    return matches;
}

const imageNames = [
    "reshadepicture1.png",
    "reshadepicture2.png",
    "reshadepicture3.webp",
    "reshadepicture4.webp",
    "reshadepicture5.png",
    "reshadepicture6.webp",
    "reshadepicture7.webp",
    "reshadepicture8.webp",
    "reshadepicture9.webp",
    "reshadepicture10.webp",
    "reshadepicture11.webp",
];

const duration = 0.15;
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" };
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] };

const Carousel = memo(
    ({
        handleClick,
        controls,
        cards,
        isCarouselActive,
    }: {
        handleClick: (imgUrl: string, index: number) => void;
        controls: any;
        cards: string[];
        isCarouselActive: boolean;
    }) => {
        const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
        const cylinderWidth = isScreenSizeSm ? 1500 : 2200;
        const faceCount = cards.length;
        const faceWidth = cylinderWidth / faceCount;
        const radius = cylinderWidth / (2 * Math.PI);
        const rotation = useMotionValue(0);
        const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`);

        return (
            <div
                className="flex h-full items-center justify-center"
                style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                }}
            >
                <motion.div
                    drag={isCarouselActive ? "x" : false}
                    className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
                    style={{
                        transform,
                        rotateY: rotation,
                        width: cylinderWidth,
                        transformStyle: "preserve-3d",
                    }}
                    onDrag={(_, info) =>
                        isCarouselActive && rotation.set(rotation.get() + info.offset.x * 0.02)
                    }
                    onDragEnd={(_, info) =>
                        isCarouselActive &&
                        controls.start({
                            rotateY: rotation.get() + info.velocity.x * 0.05,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 30,
                                mass: 0.1,
                            },
                        })
                    }
                    animate={controls}
                >
                    {cards.map((imgUrl, i) => (
                        <motion.div
                            key={`key-${imgUrl}-${i}`}
                            className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2 md:p-5"
                            style={{
                                width: `${faceWidth}px`,
                                transform: `rotateY(${
                                    i * (360 / faceCount)
                                }deg) translateZ(${radius}px)`,
                            }}
                            onClick={() => handleClick(imgUrl, i)}
                        >
                            <motion.img
                                src={imgUrl}
                                alt={`imageNames_${i} ${imgUrl}`}
                                layoutId={`img-${imgUrl}`}
                                className="pointer-events-none  w-full rounded-xl object-cover aspect-square border border-gold-100"
                                initial={{ filter: "blur(4px)" }}
                                layout="position"
                                animate={{ filter: "blur(0px)" }}
                                transition={transition}
                                style={{
                                    maskImage: isCarouselActive ? visibleMask : hiddenMask,
                                    WebkitMaskImage: isCarouselActive ? visibleMask : hiddenMask, // Pour la compatibilité avec Safari
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        );
    },
);

Carousel.displayName = "Carousel";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
export default function ThreeDPhotoCarousel() {
    const [activeImg, setActiveImg] = useState<string | null>(null);
    const [isCarouselActive, setIsCarouselActive] = useState(true);
    const controls = useAnimation();
    const cards = useMemo(() => imageNames.map((imageName) => `/reshade/${imageName}`), []);

    useEffect(() => {
        console.log("Cards loaded:", cards);
    }, [cards]);

    const handleClick = (imgUrl: string) => {
        setActiveImg(imgUrl);
        setIsCarouselActive(false);
        controls.stop();
    };

    const handleClose = () => {
        setActiveImg(null);
        setIsCarouselActive(true);
    };

    return (
        <motion.div layout className="relative">
            <AnimatePresence mode="sync">
                {activeImg && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        layoutId={`img-container-${activeImg}`}
                        layout="position"
                        onClick={handleClose}
                        className="fixed inset-0 bg-transparent/90 transform-gpu border border-gold-100/50 dark:[box-shadow:0_-20px_80px_-20px_#BC994D4f_inset] flex items-center justify-center z-50 m-1 md:m-[5rem] lg:mx-[19rem] rounded-3xl"
                        style={{ willChange: "opacity" }}
                        transition={transitionOverlay}
                    >
                        <motion.img
                            layoutId={`img-${activeImg}`}
                            src={activeImg}
                            className="max-w-full max-h-full rounded-lg shadow-lg"
                            initial={{ scale: 0.5 }} // Start with a smaller scale
                            animate={{ scale: 1 }} // Animate to full scale
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: [0.25, 0.1, 0.25, 1],
                            }} // Clean ease-out curve
                            style={{
                                willChange: "transform",
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="relative h-[250px] md:h-[350px] 3xl:h-[400px] w-full overflow-hidden">
                <Carousel
                    handleClick={handleClick}
                    controls={controls}
                    cards={cards}
                    isCarouselActive={isCarouselActive}
                />
            </div>
        </motion.div>
    );
}
