import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const reservationSchema = z.object({
    date: z.string().min(1, "Please select a date"),
    time: z.string().min(1, "Please select a time"),
    guests: z.string().min(1, "Please select number of guests"),
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    specialRequests: z.string().optional(),
});

type ReservationData = z.infer<typeof reservationSchema>;

export function Reservations() {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors }, trigger } = useForm<ReservationData>({
        resolver: zodResolver(reservationSchema),
    });

    const onNextStep = async () => {
        const isStep1Valid = await trigger(["date", "time", "guests"]);
        if (isStep1Valid) setStep(2);
    };

    const onSubmit = (data: ReservationData) => {
        console.log("Reservation Data:", data);
        setIsSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-background flex">
            <SEO title="Reservations" description="Reserve your table at Maharaja Lounge and secure a truly remarkable luxury dining experience in London." />
            {/* Left side Image - Hidden on small mobile */}
            <div className="hidden lg:block w-1/2 relative bg-primary">
                <img
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Dining"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background" />
                <div className="absolute bottom-24 left-16 max-w-sm">
                    <h2 className="font-heading text-4xl text-secondary mb-4">A Taste of Royalty</h2>
                    <p className="text-foreground/80 font-light leading-relaxed">
                        Reserve your table and prepare for an unparalleled gastronomic journey through the opulent flavors of the Indian subcontinent.
                    </p>
                </div>
            </div>

            {/* Right side Form */}
            <div className="w-full lg:w-1/2 pt-32 pb-24 px-6 md:px-16 lg:px-24 flex items-center">
                <div className="w-full max-w-md mx-auto lg:mx-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 70, damping: 20 }}
                        className="mb-12"
                    >
                        <span className="text-secondary tracking-[0.3em] uppercase text-xs font-medium mb-3 block">
                            Reservations
                        </span>
                        <h1 className="font-heading text-4xl md:text-5xl text-foreground font-semibold">
                            Book a Table
                        </h1>
                    </motion.div>

                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="border border-secondary/30 bg-secondary/5 p-8 text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-2xl text-foreground mb-4">Request Received</h3>
                            <p className="text-muted-foreground font-light text-sm leading-relaxed mb-8">
                                Thank you for choosing Maharaja Lounge. We will contact you shortly to confirm your reservation details.
                            </p>
                            <Button onClick={() => window.location.href = '/'} variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 uppercase tracking-widest text-xs rounded-none w-full">
                                Return to Home
                            </Button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative overflow-hidden min-h-[400px]">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <label className="block text-sm font-medium text-foreground/80 mb-2">Date</label>
                                            <input
                                                type="date"
                                                {...register("date")}
                                                className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:outline-none focus:border-secondary transition-colors"
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-foreground/80 mb-2">Time</label>
                                                <select
                                                    {...register("time")}
                                                    className="w-full bg-background border-b border-border/50 py-3 text-foreground focus:outline-none focus:border-secondary transition-colors appearance-none"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="18:00">18:00</option>
                                                    <option value="18:30">18:30</option>
                                                    <option value="19:00">19:00</option>
                                                    <option value="19:30">19:30</option>
                                                    <option value="20:00">20:00</option>
                                                    <option value="20:30">20:30</option>
                                                    <option value="21:00">21:00</option>
                                                </select>
                                                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-foreground/80 mb-2">Guests</label>
                                                <select
                                                    {...register("guests")}
                                                    className="w-full bg-background border-b border-border/50 py-3 text-foreground focus:outline-none focus:border-secondary transition-colors appearance-none"
                                                >
                                                    <option value="">Select</option>
                                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                                        <option key={num} value={num.toString()}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                                    ))}
                                                </select>
                                                {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>}
                                            </div>
                                        </div>

                                        <div className="pt-6">
                                            <Button type="button" onClick={onNextStep} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 uppercase tracking-widest text-sm py-6 rounded-none w-full shadow-lg">
                                                Continue to Details
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <label className="block text-sm font-medium text-foreground/80 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                {...register("name")}
                                                className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:outline-none focus:border-secondary transition-colors placeholder:text-muted-foreground/50"
                                                placeholder="John Doe"
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    {...register("email")}
                                                    className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:outline-none focus:border-secondary transition-colors placeholder:text-muted-foreground/50"
                                                    placeholder="john@example.com"
                                                />
                                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-foreground/80 mb-2">Phone</label>
                                                <input
                                                    type="tel"
                                                    {...register("phone")}
                                                    className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:outline-none focus:border-secondary transition-colors placeholder:text-muted-foreground/50"
                                                    placeholder="+44 7000 000000"
                                                />
                                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-foreground/80 mb-2">Special Requests (Optional)</label>
                                            <textarea
                                                {...register("specialRequests")}
                                                rows={2}
                                                className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:outline-none focus:border-secondary transition-colors placeholder:text-muted-foreground/50 resize-none"
                                                placeholder="Dietary requirements, celebrations..."
                                            />
                                        </div>

                                        <div className="pt-6 flex gap-4">
                                            <Button type="button" onClick={() => setStep(1)} variant="outline" className="border-border/50 text-foreground hover:bg-border/20 uppercase tracking-widest text-xs rounded-none w-1/3">
                                                Back
                                            </Button>
                                            <Button type="submit" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 uppercase tracking-widest text-sm py-6 rounded-none w-2/3 shadow-lg">
                                                Confirm Booking
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    )}
                </div>
            </div>
        </main>
    );
}
