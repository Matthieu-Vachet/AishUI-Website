"use client";

import React from "react";

interface PulsatingButtonProps {
    text: string;
    pulseColor: string;
    backgroundColor: string;
    textColor: string;
    animationDuration: string;
    buttonWidth: string;
    buttonHeight: string;
}

const PulsatingButton: React.FC<PulsatingButtonProps> = ({
    text,
    pulseColor,
    backgroundColor,
    textColor,
    animationDuration,
    buttonWidth,
    buttonHeight,
}) => {
    const pulseKeyframes = {
        "--tw-pulse-color": pulseColor,
        animation: `pulse ${animationDuration} linear infinite`,
    };

    return (
        <div className="flex items-center justify-center">
            <button
                className="relative flex cursor-pointer items-center justify-center text-center"
                style={{
                    color: textColor,
                    backgroundColor,
                    width: buttonWidth,
                    height: buttonHeight,
                    borderRadius: "12px",
                    ...pulseKeyframes,
                }}
            >
                <div className="text-sm font-medium leading-none tracking-tight lg:text-lg">
                    {text}
                </div>
                <style jsx>
                    {`
                        @keyframes pulse {
                            0% {
                                box-shadow: 0 0 0 0 rgba(var(--tw-pulse-color), 0);
                            }
                            50% {
                                box-shadow: 0 0 0 5px rgba(var(--tw-pulse-color), 0.5);
                            }
                            100% {
                                box-shadow: 0 0 0 0 rgba(var(--tw-pulse-color), 0);
                            }
                        }
                        button::before {
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            width: 100%;
                            height: 100%;
                            border-radius: 12px;
                            background: inherit;
                            animation: inherit;
                            transform: translate(-50%, -50%);
                            z-index: -1;
                        }
                    `}
                </style>
            </button>
        </div>
    );
};

export default PulsatingButton;