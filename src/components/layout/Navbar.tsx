import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const location = useLocation();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70, damping: 20, mass: 1 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled
                ? "bg-background/90 backdrop-blur-md border-border/50 shadow-sm py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <span className="font-heading text-2xl md:text-3xl font-semibold tracking-wider text-secondary">
                        MAHARAJA
                    </span>
                    <span className="block text-xs uppercase tracking-[0.3em] text-foreground/80 mt-1">
                        Lounge & Dining
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-sm font-medium tracking-widest uppercase transition-colors ${location.pathname === link.href ? "text-secondary" : "text-foreground/80 hover:text-secondary"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/reservations"
                        className="inline-flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90 uppercase tracking-widest text-xs px-8 py-4 h-12 rounded-none transition-colors"
                    >
                        Book a Table
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground hover:text-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
                    <div className="flex flex-col items-center py-8 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-lg font-medium tracking-widest uppercase transition-colors ${location.pathname === link.href ? "text-secondary" : "text-foreground hover:text-secondary"
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/reservations"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="inline-flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90 uppercase tracking-widest w-3/4 mt-4 h-12 rounded-none transition-colors"
                        >
                            Book a Table
                        </Link>
                    </div>
                </div>
            )}
        </motion.nav>
    );
}
