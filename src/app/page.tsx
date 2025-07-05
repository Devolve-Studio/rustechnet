import HeroSecion from "@/components/HeroSecion";
import StatsCounterSection from "@/components/StatsCounterSection";

export default function Home(){
    return(
        <main>
            <section className="bg-[var(--background)] py-5"><HeroSecion/></section>
            <StatsCounterSection/>
        </main>
    );
}