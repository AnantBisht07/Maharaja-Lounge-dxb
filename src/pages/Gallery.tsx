import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SEO } from "@/components/SEO";

const images = [
    { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", width: 800, height: 600, alt: "Interior Ambience" },
    { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop", width: 600, height: 800, alt: "Restaurant Dining Area" },
    { src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1936&auto=format&fit=crop", width: 800, height: 1000, alt: "Signature Curry" },
    { src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=2021&auto=format&fit=crop", width: 800, height: 600, alt: "Tandoori Skewers" },
    { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop", width: 800, height: 600, alt: "Cocktails" },
    { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop", width: 600, height: 800, alt: "Service details" },
    { src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?q=80&w=1974&auto=format&fit=crop", width: 800, height: 1000, alt: "Plated Dessert" },
    { src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop", width: 800, height: 600, alt: "Spice Ingredients" },
];

export function Gallery() {
    const [index, setIndex] = useState(-1);

    return (
        <main className="pt-32 pb-24 bg-background min-h-screen">
            <SEO title="Visual Gallery" description="Step inside Maharaja Lounge. View our elegant dining spaces, beautiful interiors, and exquisitely plated dishes." />
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 70, damping: 20, mass: 1 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-secondary tracking-[0.3em] uppercase text-xs md:text-sm font-medium mb-4 block">
                        Visual Journey
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl text-foreground font-semibold mb-8">
                        The Gallery
                    </h1>
                    <div className="w-24 h-[1px] bg-secondary mx-auto"></div>
                </motion.div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ type: "spring", stiffness: 70, damping: 15, delay: (i % 3) * 0.1 }}
                            className="break-inside-avoid cursor-pointer overflow-hidden rounded-sm border border-border/30 group relative"
                            onClick={() => setIndex(i)}
                        >
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none mix-blend-overlay" />
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </div>

                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={images}
                    styles={{ container: { backgroundColor: "rgba(23, 23, 26, 0.98)" } }}
                />
            </div>
        </main>
    );
}
