"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

const options = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Writeups", href: "/writeups" },
    { label: "Contacts", href: "/contacts" },
];

const Navbar = ({ onOpenSidebar }: { onOpenSidebar: () => void }) => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`w-full flex justify-center items-center py-5 transition-colors duration-300 ${
                scrolled
                    ? "bg-black/80 backdrop-blur shadow-md"
                    : "bg-transparent"
            }`}
        >
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex w-full px-6 justify-between items-center max-w-6xl">
                <Link href="/">
                    <Image
                        src="/img/white_logo.png"
                        alt="Matteo Papa Logo"
                        width={40}
                        height={40}
                        className="will-change-opacity"
                        priority
                    />
                </Link>

                <div className="flex gap-5">
                    {options.map((option) => {
                        const isActive = pathname === option.href;
                        return (
                            <NavigationMenuLink
                                key={option.label}
                                href={option.href}
                                className={`font-medium transition-colors hover:text-white hover:bg-transparent focus:bg-transparent ${
                                    isActive ? "" : "text-muted-foreground"
                                }`}
                            >
                                {option.label}
                            </NavigationMenuLink>
                        );
                    })}
                </div>
            </NavigationMenu>

            {/* Mobile Navigation (Logo + Menu Button + Sidebar) */}
            <div className="w-full flex justify-between items-center px-6 md:hidden">
                <Link href="/">
                    <Image
                        src="/img/white_logo.png"
                        alt="Matteo Papa Logo"
                        width={40}
                        height={40}
                        className="will-change-opacity"
                        priority
                    />
                </Link>
                <div className="md:hidden ml-auto">
                    <button onClick={onOpenSidebar}>
                        <Menu size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
