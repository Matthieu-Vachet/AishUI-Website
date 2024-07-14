import Link from "next/link";
import { TwitchIcon } from "lucide-react";
import Image from "next/image";

type LinkFooterType = {
    title: string;
    link?: string;
    targetBlank?: boolean;
};

const QUICK_LINKS: LinkFooterType[] = [
    { title: "About", link: "#", targetBlank: false },
    { title: "Contact", link: "#", targetBlank: false },
    { title: "Privacy Policy", link: "#", targetBlank: false },
];
const RESOURCES: LinkFooterType[] = [
    { title: "Documentation", link: "#", targetBlank: false },
    { title: "Blog", link: "#", targetBlank: false },
    { title: "Tutorial", link: "#", targetBlank: false },
];
type SocialMediaLink = {
    icon: () => JSX.Element;
    link: string;
    index?: number;
};
const SOCIAL_MEDIAS: SocialMediaLink[] = [
    { icon: (...props) => <TwitterIcon />, link: "#" },
    { icon: (...props) => <FacebookIcon />, link: "#" },
    { icon: (...props) => <LinkedinIcon />, link: "#" },
    { icon: (...props) => <InstagramIcon />, link: "#" },
];
export function Footer() {
    return (
        <footer className="bg-gradient-to-tr from-transparent via-brown-100/15 to-gold-100/10 py-12 text-gray-400 backdrop-blur-lg sm:py-16 border-t border-gold-100/20 rounded-t-3xl z-30">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
                <div className="flex flex-col items-start">
                    <div className="mb-4 flex items-center gap-2">
                        <Image src="/logo/aish_ui_2.webp" alt="Logo" width={40} height={40} />
                        <span className="font-heading3 text-lg font-semibold text-gray-200 md:text-2xl border-t-2 border-b-2 border-gold-100">
                            Aish<span className="text-gold-100">UI</span>
                        </span>
                    </div>
                    <p className="text-sm leading-relaxed">
                        AishUI n&apos;est en aucun cas un outil de triche et n&apos;est pas affilié
                        à Blizzard Entertainment. C&apos;est un ensemble d&apos;addons pour
                        améliorer l&apos;expérience de jeu sur World of Warcraft.
                    </p>
                </div>
                <div className="flex flex-col items-start">
                    <h4 className="mb-4 font-heading2 font-semibold text-gray-200">
                        Liens rapides
                    </h4>
                    <ul className="space-y-2">
                        {QUICK_LINKS.map(({ title, link }) => (
                            <li key={title}>
                                <Link
                                    className="transition-colors hover:text-gray-300"
                                    href={link ?? "#"}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-start">
                    <h4 className="mb-4 font-heading2 font-semibold text-gray-200">Ressources</h4>
                    <ul className="space-y-2">
                        {RESOURCES.map(({ title, link }) => (
                            <li key={title}>
                                <Link
                                    className="transition-colors hover:text-gray-300"
                                    href={link ?? "#"}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-start">
                    <h4 className="mb-4 font-heading2 font-semibold text-gray-200">Suivez-moi</h4>
                    <div className="flex space-x-4">
                        {SOCIAL_MEDIAS.map(({ icon, link, index }) => (
                            <Link
                                key={index}
                                className="transition-colors hover:text-gray-300"
                                href={link}
                            >
                                {icon()}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container flex flex-col mx-auto mt-8 px-4 text-center sm:px-6 lg:px-8 gap-2">
                <p className="text-sm">
                    © 2024{" "}
                    <span className="border-t-2 border-b-2 border-gold-100">
                        Aish<span className="text-gold-100">UI</span>
                    </span>
                    . Tous droits réservés.
                </p>
                <p>
                    Développé et designer par{" "}
                    <Link
                        href="https://www.matthieu-vachet.fr/"
                        className="text-gold-100 hover:text-gold-200"
                    >
                        MatWeb-Innovation
                    </Link>
                </p>
            </div>
        </footer>
    );
}

function FacebookIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InstagramIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function LinkedinIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}

function TwitterIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}
