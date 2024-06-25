"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import { HamburgerIcon } from "@/components/icons/Hamburger";
import { ModeToggle } from "@/components/themeToggle";

import { IoChevronBackCircleOutline } from "react-icons/io5";

export const Header = () => {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
    }, [hamburgerMenuIsOpen]);

    useEffect(() => {
        const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

        window.addEventListener("orientationchange", closeHamburgerNavigation);
        window.addEventListener("resize", closeHamburgerNavigation);

        return () => {
            window.removeEventListener("orientationchange", closeHamburgerNavigation);
            window.removeEventListener("resize", closeHamburgerNavigation);
        };
    }, [setHamburgerMenuIsOpen]);

    const handleLinkClick = () => {
        setHamburgerMenuIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-transparent backdrop-blur-[12px] p-3 rounded-b-3xl bg-white/5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <div className="flex justify-between items-center mx-4 ">
                <Link className="flex items-center text-md gap-3" href="/">
                    <Image
                        src="/logo/aish_ui_2.webp"
                        alt="Logo AishUI"
                        width={40}
                        height={36}
                        priority
                        className="w-10 h-10"
                    />
                    <p className="flex text-2xl border-t-2 border-b-2 border-gold-100/50">
                        Aish <span className="text-gold-100">UI</span>
                    </p>
                </Link>

                <div
                    className={classNames(
                        "transition-[visibility] md:visible",
                        hamburgerMenuIsOpen ? "visible" : "delay-500 invisible",
                    )}
                >
                    <nav
                        className={classNames(
                            "fixed bg-black-100/95 top-0 left-0 h-[100vh] w-[100vw] overflow-auto transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
                            hamburgerMenuIsOpen
                                ? "translate-x-0 opacity-100"
                                : "translate-x-[-100vw] opacity-0",
                        )}
                    >
                        <div>
                            <IoChevronBackCircleOutline
                                className="w-10 h-10 text-white m-5 cursor-pointer hover:text-purple duration-300 md:hidden"
                                onClick={() => setHamburgerMenuIsOpen(false)}
                            />
                        </div>
                        <ul
                            className={classNames(
                                "flex h-full flex-col md:flex-row md:items-center md:[&_li]:border-none text-3xl",
                                "ease-in [&_a:hover]:text-purple gap-5 [&_a]:flex [&_a]:w-full [&_a]:translate-y-0  [&_a]:justify-center [&_a]:text-3xl [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm lg:[&_a]:text-md xl:[&_a]:text-xl md:hover:[&_a]:text-purple [&_a]:md:transition-colors",
                                hamburgerMenuIsOpen && "[&_a]:translate-y-0",
                            )}
                        >
                            <li>
                                <Link href="#Home" onClick={handleLinkClick}>
                                    Acceuil
                                </Link>
                            </li>
                            <li>
                                <Link href="#aishui" onClick={handleLinkClick}>
                                    Aish UI
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="relative hidden md:flex md:justify-center md:items-center md:text-center md:gap-3 z-10 opacity-50">
                    <ModeToggle />
                    <Link href="https://ko-fi.com/aishuutv?action=gallery" passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/icons/kofi-color.svg"
                                alt="Logo Ko-fi AishUI"
                                width={30}
                                height={30}
                                priority
                                className="w-7 h-7 hover:scale-110 transition-scale duration-300 ease-in-out"
                            />
                        </a>
                    </Link>
                    <Link href="https://www.twitch.tv/Aishuu" passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/icons/twitch-color.svg"
                                alt="Logo Twitch AishUI"
                                width={30}
                                height={30}
                                priority
                                className="w-7 h-6 hover:scale-110 transition-scale duration-300 ease-in-out"
                            />
                        </a>
                    </Link>
                    <Link
                        href="https://www.youtube.com/channel/UCCmAVfJTJuwnUIuK42tgOtA"
                        passHref
                        legacyBehavior
                    >
                        <a target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/icons/youtube-color.svg"
                                alt="Logo Youtube AishUI"
                                width={30}
                                height={30}
                                priority
                                className="w-7 h-7 hover:scale-110 transition-scale duration-300 ease-in-out"
                            />
                        </a>
                    </Link>
                    <Link href="" passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/icons/discord-color.svg"
                                alt="Logo Discord AishUI"
                                width={30}
                                height={30}
                                priority
                                className="w-7 h-7 hover:scale-110 transition-scale duration-300 ease-in-out"
                            />
                        </a>
                    </Link>
                    <Link href="https://x.com/Aishuu_TV" passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/icons/x-color.svg"
                                alt="Logo Twitter AishUI"
                                width={30}
                                height={30}
                                priority
                                className="w-6 h-6 hover:scale-110 transition-scale duration-300 ease-in-out"
                            />
                        </a>
                    </Link>
                </div>
                <button
                    className="ml-6 md:hidden"
                    onClick={() => setHamburgerMenuIsOpen((open) => !open)}
                >
                    <span className="sr-only">Toggle menu</span>
                    <HamburgerIcon />
                </button>
            </div>
        </header>
    );
};
