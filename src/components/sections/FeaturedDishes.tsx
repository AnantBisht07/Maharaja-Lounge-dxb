import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const dishes = [
    {
        name: "Murgh Makhani",
        description: "Tandoor-smoked chicken simmered in a velvet tomato and fenugreek gravy, finished with cultivated cream.",
        price: "£28",
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1884&auto=format&fit=crop",
    },
    {
        name: "Nawabi Lamb Shank",
        description: "Slow-braised overnight in Lucknowi spices, caramelized onions, and a rich saffron bone marrow reduction.",
        price: "£36",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop",
    },
    {
        name: "Tandoori Lobster",
        description: "Whole Scottish lobster marinated in strained yogurt, carom seeds, and Kashmiri chili, roasted in the clay oven.",
        price: "£52",
        image: "https://images.unsplash.com/photo-1551244072-5d128d4fa158?q=80&w=1874&auto=format&fit=crop",
    },
];

export function FeaturedDishes() {
    return (
        <section className="py-24 bg-[#111114]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-secondary tracking-[0.3em] uppercase text-sm font-medium mb-4 block">
                            Signature Creations
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl text-foreground font-semibold">
                            A Culinary Journey
                        </h2>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 uppercase tracking-widest text-xs px-8 py-6 rounded-none hidden md:inline-flex shrink-0">
                            View Full Menu
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dishes.map((dish, index) => (
                        <motion.div
                            key={dish.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ type: "spring", stiffness: 70, damping: 20, delay: index * 0.15 }}
                        >
                            <Card className="bg-background border-border/50 rounded-none overflow-hidden group hover:border-secondary transition-colors duration-500">
                                <div className="relative h-80 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={dish.image}
                                        alt={dish.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    />
                                </div>
                                <CardContent className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="font-heading text-2xl text-foreground group-hover:text-secondary transition-colors">{dish.name}</h3>
                                        <span className="text-secondary font-medium tracking-wider">{dish.price}</span>
                                    </div>
                                    <p className="text-foreground/70 font-light text-sm leading-relaxed">
                                        {dish.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="mt-12 flex justify-center md:hidden">
                    <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 uppercase tracking-widest text-xs px-8 py-6 w-full rounded-none">
                        View Full Menu
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
