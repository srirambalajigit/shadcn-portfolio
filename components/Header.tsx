"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CodeIcon, ExternalLinkIcon, MenuIcon, XIcon } from "lucide-react";
import ModeToggle from "@/components/mode-toggle";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Adjust 768 to your actual mobile breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuVariants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: { opacity: 0, y: "-100%", transitionEnd: { display: "none" } },
  };

  // TODO: Figure out if bg-white/90 dark:bg-black/90 or the current one is better (the current one)
  return (
    <header className="fixed inset-x-0 top-0 z-10 backdrop-blur-lg bg-opacity-20 bg-white/30 dark:bg-black/30">
      <div className="flex items-center justify-between h-14 px-4 md:px-6">
        <Link href="#" className="flex items-center justify-center">
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">Sriram Balaji</span>
        </Link>
        {/* Hamburger Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <span className="sr-only">{isOpen ? "Close" : "Menu"}</span>
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
        {/* Navigation Menu */}
        <div className="hidden md:flex md:items-center md:w-auto">
          <nav className="flex gap-4 lg:gap-6">
          <Link
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              href="#about"
            >
              About
            </Link>
            <a
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              target="_blank"
              href="https://blog.srirambalaji.com"
            >
              Blog <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              target="_blank"
              href="https://ageofcopilots.substack.com"
            >
              Newsletter <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            {/* <Link
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              href="#skills"
            >
              Skills
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              href="#testimonials"
            >
              Testimonials
            </Link> */}
            
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              href="#projects"
            >
              Tools
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              href="#contact"
            >
              Contact
            </Link>
            <ModeToggle />
          </nav>
        </div>
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          className="absolute md:hidden top-full left-0 w-full bg-white dark:bg-black"
        >
          <div className="flex flex-col gap-4 p-4">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              href="#projects"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              href="#about"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              href="#skills"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <a
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              href="https://blog.example.com"
              target="_blank"
              onClick={toggleMenu}
            >
              Blog <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              target="_blank"
              href="https://newsletter.example.com"
              onClick={toggleMenu}
            >
              Newsletter <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              href="#contact"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex items-center justify-end w-full">
              <ModeToggle />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
