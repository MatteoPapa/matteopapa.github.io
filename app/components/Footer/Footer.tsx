import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="z-50 w-full px-8 py-8 bg-black text-muted-foreground">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        <hr className="w-full border-border" />

        <div className="flex gap-6 items-center">
          <Link
            href="https://github.com/MatteoPapa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <Github className="w-5 h-5" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/matteo-papa-27b225374/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
          </Link>

          <Link
            href="mailto:matteo.papa@icloud.com"
            aria-label="Email"
            className="hover:text-white transition"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Matteo Papa. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
