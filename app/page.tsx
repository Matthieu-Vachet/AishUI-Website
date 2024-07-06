import { Header } from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Fonctionnalités from "@/components/sections/Features";

export default function Home() {
    return (
        <main className="relative dark:bg-black flex justify-center items-center flex-col mx-auto ">
            <div className=" w-full h-full">
                <Header />
                <Hero />
                <Fonctionnalités />
            </div>
        </main>
    );
}
