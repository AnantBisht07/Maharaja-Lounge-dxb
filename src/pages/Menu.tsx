import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

const menuData = {
    starters: [
        { name: "Samosa Chaat", desc: "Crispy pastry, spiced chickpeas, sweet yogurt, tamarind chutney", price: "£12" },
        { name: "Tandoori Paneer Tikka", desc: "Cottage cheese marinated in yogurt and spices, char-grilled", price: "£14" },
        { name: "Pani Puri", desc: "Hollow crispy puri, spiced potato, tamarind water", price: "£10" },
        { name: "Lajawab Prawns", desc: "Tiger prawns tossed in garlic, chili, and crushed black pepper", price: "£22" },
    ],
    mains: [
        { name: "Murgh Makhani", desc: "Classic butter chicken in a rich tomato and fenugreek sauce", price: "£24" },
        { name: "Nawabi Lamb Shank", desc: "Slow-braised overnight in Lucknowi spices and a rich saffron bone marrow reduction", price: "£36" },
        { name: "Malai Kofta", desc: "Paneer and potato dumplings in a creamy cashew and saffron sauce", price: "£22" },
        { name: "Tandoori Lobster", desc: "Whole Scottish lobster marinated in strained yogurt, carom seeds, and Kashmiri chili", price: "£52" },
    ],
    desserts: [
        { name: "Gulab Jamun", desc: "Warm milk dumplings in cardamom syrup with pistachio", price: "£10" },
        { name: "Rasmalai", desc: "Soft cheese patties in sweet, thickened saffron milk", price: "£12" },
        { name: "Mango Kulfi", desc: "Traditional slow-churned Indian ice cream with alphonso mango", price: "£11" },
    ]
};

export function Menu() {
    return (
        <main className="pt-32 pb-24 bg-background min-h-screen relative">
            <SEO title="Our Royal Menu" description="Explore our exquisite culinary offerings, from tandoor specialties to rich, slow-cooked curries." />
            {/* Background accent */}
            <div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 70, damping: 20, mass: 1 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-secondary tracking-[0.3em] uppercase text-xs md:text-sm font-medium mb-4 block">
                        A Gastronomic Heritage
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl text-foreground font-semibold mb-8">
                        The Royal Menu
                    </h1>
                    <div className="w-24 h-[1px] bg-secondary mx-auto"></div>
                </motion.div>

                <Tabs defaultValue="mains" className="w-full">
                    <TabsList className="flex flex-wrap h-auto w-full justify-center bg-transparent gap-3 mb-16">
                        <TabsTrigger
                            value="starters"
                            className="rounded-full px-8 py-3 text-sm md:text-base uppercase tracking-wider transition-all data-[state=active]:bg-secondary data-[state=active]:text-primary data-[state=active]:shadow-lg data-[state=inactive]:text-foreground/70 data-[state=inactive]:border data-[state=inactive]:border-border/50 hover:data-[state=inactive]:border-secondary hover:data-[state=inactive]:text-secondary"
                        >
                            Starters
                        </TabsTrigger>
                        <TabsTrigger
                            value="mains"
                            className="rounded-full px-8 py-3 text-sm md:text-base uppercase tracking-wider transition-all data-[state=active]:bg-secondary data-[state=active]:text-primary data-[state=active]:shadow-lg data-[state=inactive]:text-foreground/70 data-[state=inactive]:border data-[state=inactive]:border-border/50 hover:data-[state=inactive]:border-secondary hover:data-[state=inactive]:text-secondary"
                        >
                            Tandoor & Mains
                        </TabsTrigger>
                        <TabsTrigger
                            value="desserts"
                            className="rounded-full px-8 py-3 text-sm md:text-base uppercase tracking-wider transition-all data-[state=active]:bg-secondary data-[state=active]:text-primary data-[state=active]:shadow-lg data-[state=inactive]:text-foreground/70 data-[state=inactive]:border data-[state=inactive]:border-border/50 hover:data-[state=inactive]:border-secondary hover:data-[state=inactive]:text-secondary"
                        >
                            Desserts
                        </TabsTrigger>
                    </TabsList>

                    {Object.entries(menuData).map(([category, items]) => (
                        <TabsContent key={category} value={category} className="mt-8 outline-none focus:ring-0">
                            <div className="space-y-12">
                                {items.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ type: "spring", stiffness: 70, damping: 15, delay: idx * 0.1 }}
                                        className="flex flex-col sm:flex-row justify-between sm:items-baseline border-b border-border/30 pb-6 group"
                                    >
                                        <div className="max-w-[85%] pr-4 mb-2 sm:mb-0">
                                            <h3 className="font-heading text-2xl md:text-3xl text-foreground font-medium mb-3 group-hover:text-secondary transition-colors duration-300">
                                                {item.name}
                                            </h3>
                                            <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed tracking-wide">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="text-xl md:text-2xl text-secondary font-medium shrink-0 font-heading">
                                            {item.price}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </main>
    );
}
