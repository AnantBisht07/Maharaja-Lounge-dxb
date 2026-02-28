import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function RootLayout() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary selection:text-secondary-foreground flex flex-col">
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <footer className="py-12 border-t border-border/50 text-center text-muted-foreground">
                <p>© {new Date().getFullYear()} Maharaja Lounge Grand World L.L.C. All rights reserved.</p>
            </footer>
        </div>
    );
}
