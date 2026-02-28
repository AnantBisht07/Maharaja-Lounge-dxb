import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Subtly move the background down as the user scrolls down, creating parallax
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Spring configuration for realistic, bouncing-less organic motion
    const transitionSpring = {
        type: "spring" as const,
        stiffness: 70,
        damping: 20,
        mass: 1,
    };

    return (
        <section ref={containerRef} className="relative h-min-screen h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image/Overlay with Parallax Effect */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 bg-background origin-top">
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...transitionSpring, delay: 0.1 }}
                    className="flex flex-col items-center"
                >
                    <span className="text-secondary tracking-[0.4em] uppercase text-sm md:text-base font-medium mb-6 block">
                        The Pinnacle of Indian Dining
                    </span>
                    <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-foreground leading-[0.9] mb-8">
                        MAHARAJA
                    </h1>
                    <p className="text-foreground/80 md:text-xl font-light max-w-2xl mx-auto tracking-wide mb-12 leading-relaxed">
                        Experience the untold riches of Royal Indian cuisine. A modern
                        homage to the grandeur of the Maharajas.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...transitionSpring, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] uppercase tracking-widest text-sm px-12 py-8 rounded-none border border-secondary transition-all">
                            Reserve a Table
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <Button
                            variant="outline"
                            className="border-secondary/50 text-foreground hover:bg-secondary/10 hover:text-secondary uppercase tracking-widest text-sm px-12 py-8 rounded-none transition-all"
                        >
                            Explore Menu
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative scroll indicator */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 64 }}  // 64px = h-16
                transition={{ ...transitionSpring, delay: 0.8 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-full bg-gradient-to-b from-secondary to-transparent" />
            </motion.div>
        </section>
    );
}
