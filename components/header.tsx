"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import { HamburgerIcon } from "@/components/icons/Hamburger";
import { IoChevronBackCircleOutline } from "react-icons/io5";

// import { ModeToggle } from "@/components/ui/themeToggle";

import { HeroDatas } from "@/data/heroDatas";
import { SocialDatas, SocialDatasTypes } from "@/data/socialDatas";

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
            <div className="flex justify-between items-center mx-4">
                <div className="flex gap-10 items-center text-center ">
                    <div>
                        <Link className="flex items-center text-md gap-1" href="/">
                            <Image
                                src={HeroDatas.logo.src}
                                alt={HeroDatas.logo.alt}
                                width={40}
                                height={36}
                                priority
                                className="w-10 h-10"
                            />
                            <p className="flex text-2xl border-t-2 border-b-2 border-gold-100/50">
                                Aish <span className="text-gold-100">UI</span>
                            </p>
                        </Link>
                    </div>
                    <div className="relative hidden md:flex md:justify-center md:items-center md:gap-3 z-10">
                        {/* <ModeToggle /> */}
                        <div className="flex justify-center items-center gap-3">
                            {SocialDatas.map((social: SocialDatasTypes) => (
                                <Link key={social.name} href={social.url} passHref legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <Image
                                            src={social.image}
                                            alt={social.alt}
                                            width={social.width}
                                            height={social.height}
                                            priority
                                            className={`hover:scale-125 transition-all duration-300 ease-in-out  ${social.styles}`}
                                        />
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className={classNames(
                        "transition-[visibility] md:visible",
                        hamburgerMenuIsOpen ? "visible" : "delay-500 invisible",
                    )}
                >
                    <nav
                        className={classNames(
                            "fixed bg-black-100/95 top-0 left-0 h-[100vh] w-[100vw] overflow-auto transition-opacity duration-500 md:relative md:top-0 md:flex md:justify-center md:items-center md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
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
                                "flex h-full flex-col md:flex-row md:items-center md:justify-center text-3xl",
                                "ease-in [&_a:hover]:text-gold-100 gap-5 [&_a]:flex [&_a]:w-full [&_a]:translate-y-0  [&_a]:justify-center [&_a]:text-3xl [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-xl lg:[&_a]:text-xl xl:[&_a]:text-xl md:hover:[&_a]:text-gold-100 [&_a]:md:transition-colors",
                                hamburgerMenuIsOpen && "[&_a]:translate-y-0",
                            )}
                        >
                            <li>
                                <Link href="#home" onClick={handleLinkClick}>
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="#aishui" onClick={handleLinkClick}>
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#addons" onClick={handleLinkClick}>
                                    Addons
                                </Link>
                            </li>
                            <li>
                                <Link href="#weakauras" onClick={handleLinkClick}>
                                    WeakAuras
                                </Link>
                            </li>
                            <li>
                                <Link href="#reshade" onClick={handleLinkClick}>
                                    Reshade
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" onClick={handleLinkClick}>
                                    Tarifs
                                </Link>
                            </li>
                        </ul>
                    </nav>
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
