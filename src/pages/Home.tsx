import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedDishes } from "@/components/sections/FeaturedDishes";
import { SEO } from "@/components/SEO";

export function Home() {
    return (
        <main>
            <SEO
                title="Luxury Indian Dining"
                description="Experience the untold riches of Royal Indian cuisine at Maharaja Lounge, an authentic homage to the grandeur of the Maharajas in London."
            />
            <Hero />
            <About />
            <FeaturedDishes />
        </main>
    );
}
