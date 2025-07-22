"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  Home,
  FolderKanban,
  ScrollText,
  Mail,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const links = [
  { label: "Home", href: "/", icon: Home },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Writeups", href: "/writeups", icon: ScrollText },
  { label: "Contacts", href: "/contacts", icon: Mail },
];

export default function SidebarMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Sidebar */}
          <motion.aside
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed top-0 right-0 w-72 h-screen bg-black/70 backdrop-blur-xl border-l border-white/10 text-white p-6 z-50 flex flex-col"
          >
            {/* Close button */}
            {/* <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button> */}
            <div className="w-full flex flex-col justify-center items-center pb-3">
                <h1 className="px-4 py-3 rounded-lg transition 
                      hover:bg-white/10 text-lg text-muted-foreground font-medium">
                    Menu
                </h1>
                <Separator/>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2">
              {links.map(({ label, href, icon: Icon }) => {
                const isActive = pathname === href;

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={onClose}
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg transition 
                      hover:bg-white/10 text-sm font-medium
                      ${isActive ? "bg-white/10 text-white" : "text-muted-foreground"}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-base">{label}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
