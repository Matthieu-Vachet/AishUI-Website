import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedElementProps = {
    children: React.ReactNode;
    delay: number;
    duration?: number;
    className?: string;
    direction?: "bottom" | "left" | "right";
    blur?: boolean; // Ajout de la propriété blur
};

export default function AnimatedElement({
    children,
    delay,
    duration = 0.3,
    className,
    direction = "bottom",
    blur = false, // Valeur par défaut pour préserver le comportement existant
}: AnimatedElementProps) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        } else {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    // Ajustement des variantes en fonction de la direction et de l'effet de flou
    const ElementVariante = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "bottom" ? "2em" : 0,
            filter: blur ? "blur(10px)" : "none", // Applique un flou si blur est vrai
        },
        visible: {
            opacity: 1,
            x: "0%",
            y: "0%",
            filter: "blur(0px)", // Dissipe le flou
            transition: {
                delay: delay,
                duration: duration,
                ease: [0.9, 0.9, 0.9, 0.9],
                delayChildren: 0.5,
                staggerChildren: 0.5,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={ctrls}
            variants={ElementVariante}
            className={className}
        >
            {children}
        </motion.div>
    );
}
