// Description: Fichier contenant les Types pour les données des réseaux sociaux
export interface SocialDatasTypes {
    name: string;
    image: string;
    alt: string;
    url: string;
    width: number;
    height: number;
    styles?: string;
}

// Description: Liste d'image et données pour les réseaux sociaux
export const SocialDatas: SocialDatasTypes[] = [
    {
        name: "Ko-fi",
        image: "/icons/kofi-color.svg",
        alt: "Logo Ko-fi AishUI",
        url: "https://ko-fi.com/aishuutv?action=gallery",
        width: 30,
        height: 30,
        styles: "w-7 h-7 hover:scale-110 transition-scale duration-300 ease-in-out",
    },
    {
        name: "Twitch",
        image: "/icons/twitch-color.svg",
        alt: "Logo Twitch AishUI",
        url: "https://www.twitch.tv/Aishuu",
        width: 30,
        height: 30,
        styles: "w-7 h-6 hover:scale-110 transition-scale duration-300 ease-in-out",
    },
    {
        name: "Youtube",
        image: "/icons/youtube-color.svg",
        alt: "Logo Youtube AishUI",
        url: "https://www.youtube.com/channel/UCCmAVfJTJuwnUIuK42tgOtA",
        width: 30,
        height: 30,
        styles: "w-7 h-7 hover:scale-110 transition-scale duration-300 ease-in-out",
    },
    {
        name: "Discord",
        image: "/icons/discord-color.svg",
        alt: "Logo Discord AishUI",
        url: "",
        width: 30,
        height: 30,
        styles: "w-7 h-7 hover:scale-110 transition-scale duration-300 ease-in-out",
    },
    {
        name: "Twitter",
        image: "/icons/x-color.svg",
        alt: "Logo Twitter AishUI",
        url: "https://x.com/Aishuu_TV",
        width: 30,
        height: 30,
        styles: "w-6 h-6 hover:scale-110 transition-scale duration-300 ease-in-out",
    },
];
