import { Header } from "@/components/header";
import Hero from "@/components/sections/hero";
import Retails from "@/components/sections/retails";

export default function Home() {
    return (
        <main className="relative dark:bg-black flex justify-center items-center flex-col mx-auto ">
            <div className=" w-full h-full">
                <Header />
                <Hero />
                <Retails />
            </div>
        </main>
    );
}
