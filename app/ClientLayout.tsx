"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SidebarMenu from "./components/Navbar/SidebarMenu";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
        >
            <div className="min-h-screen flex flex-col mx-auto">
                <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
                    <Navbar onOpenSidebar={() => setSidebarOpen(true)} />
                </header>

                <main className="flex-1">
                    <div
                        className="fixed inset-0 -z-50 bg-cover bg-center bg-no-repeat filter blur-md brightness-80"
                        style={{
                            backgroundImage: 'url("img/main_background2.jpg")',
                        }}
                    />
                    {children}
                </main>

                <footer className="w-full z-50">
                    <Footer />
                </footer>

                <SidebarMenu
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />
            </div>
        </ThemeProvider>
    );
}
