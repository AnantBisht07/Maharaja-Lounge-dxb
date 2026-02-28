import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Text Content Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 lg:pl-8 text-center lg:text-left"
                    >
                        <span className="text-secondary tracking-[0.3em] uppercase text-sm font-medium mb-4 block">
                            Our Heritage
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-8 leading-tight">
                            The Royal Darbar <br />
                            <span className="text-foreground/80 font-light italic text-3xl md:text-4xl">Reimagined</span>
                        </h2>

                        <div className="space-y-6 text-foreground/70 font-light text-base leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                            <p>
                                Welcome to Maharaja Lounge, where centuries of royal Indian culinary heritage meet modern London luxury. We invite you to experience the grandeur of the Indian royal courts, distilled into a contemporary dining experience.
                            </p>
                            <p>
                                Our philosophy is simple: uncompromising authenticity married to visionary presentation. Every dish tells a story of the ancient silk roads, the spice markets of Delhi, and the opulent feasts of the Rajput kings.
                            </p>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <Button variant="outline" className="border-secondary/50 text-foreground hover:bg-secondary/10 hover:text-secondary uppercase tracking-widest text-xs px-10 py-6 rounded-none transition-colors duration-300">
                                Discover Our Story
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Image Collage Area */}
                    <div className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none">
                        {/* Primary Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative z-10 aspect-[3/4] overflow-hidden border border-border/50"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
                                alt="Restaurant Interior"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                        </motion.div>

                        {/* Accent Elements */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="absolute -bottom-10 -left-10 w-48 aspect-square border border-secondary z-20 hidden md:block backdrop-blur-sm bg-background/30 flex items-center justify-center p-6"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1935&auto=format&fit=crop"
                                alt="Spices"
                                className="w-full h-full object-cover grayscale opacity-80"
                            />
                        </motion.div>

                        {/* Corner Decorative Borders */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-secondary z-0" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-secondary z-0 md:hidden" />
                    </div>

                </div>
            </div>
        </section>
    );
}
