import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";

export function Contact() {
    return (
        <main className="pt-32 pb-24 bg-background min-h-screen">
            <SEO title="Contact Us" description="Get in touch with Maharaja Lounge. Find our location in Mayfair, London, operating hours, and direct contact details." />
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 70, damping: 20 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-secondary tracking-[0.3em] uppercase text-xs md:text-sm font-medium mb-4 block">
                        Get in touch
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl text-foreground font-semibold mb-8">
                        Contact Us
                    </h1>
                    <div className="w-24 h-[1px] bg-secondary mx-auto"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Contact Details & Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.2 }}
                        className="w-full lg:w-1/2 space-y-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 text-foreground/80 hover:text-secondary transition-colors group">
                                    <MapPin className="text-secondary mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h4 className="font-heading text-xl text-foreground mb-1">Address</h4>
                                        <p className="font-light text-sm leading-relaxed">45 Mayfair St, London<br />W1K 6ZZ, United Kingdom</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 text-foreground/80 hover:text-secondary transition-colors group">
                                    <Phone className="text-secondary mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h4 className="font-heading text-xl text-foreground mb-1">Phone</h4>
                                        <p className="font-light text-sm leading-relaxed">+44 20 7123 4567</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 text-foreground/80 hover:text-secondary transition-colors group">
                                    <Mail className="text-secondary mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h4 className="font-heading text-xl text-foreground mb-1">Email</h4>
                                        <p className="font-light text-sm leading-relaxed">reservations@maharaja.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 text-foreground/80 hover:text-secondary transition-colors group">
                                    <Clock className="text-secondary mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h4 className="font-heading text-xl text-foreground mb-1">Hours</h4>
                                        <p className="font-light text-sm leading-relaxed">Mon - Sun<br />5:30 PM - 11:30 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary/5 p-8 border border-border/30 rounded-sm">
                            <h3 className="font-heading text-2xl text-foreground mb-6">Send an Inquiry</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:outline-none focus:border-secondary transition-colors placeholder:text-muted-foreground/50"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:outline-none focus:border-secondary transition-colors placeholder:text-muted-foreground/50"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Your Message..."
                                        rows={4}
                                        className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:outline-none focus:border-secondary transition-colors placeholder:text-muted-foreground/50 resize-none"
                                    ></textarea>
                                </div>
                                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 uppercase tracking-widest text-sm py-6 rounded-none w-full shadow-lg">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.4 }}
                        className="w-full lg:w-1/2 min-h-[400px] border border-border/30 p-2 bg-primary/5"
                    >
                        <div className="w-full h-full relative overflow-hidden" style={{ filter: 'grayscale(100%) invert(90%) contrast(85%) hue-rotate(180deg)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.18237255146!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "450px" }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Maharaja Lounge Location"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
