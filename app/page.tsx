import { Header } from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Fonctionnalités from "@/components/sections/features";

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
