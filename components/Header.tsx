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
    <header className="fixed inset-x-0 top-0 z-10 bg-white/30 bg-opacity-20 backdrop-blur-lg dark:bg-black/30">
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center justify-center">
          {/* TODO: Swap this out with a good icon */}
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
        <div className="hidden md:flex md:w-auto md:items-center">
          <nav className="flex gap-4 lg:gap-6">
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#about"
            >
              About
            </Link>
          
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              href="#projects"
            >
              My Tools
            </Link>
            <a
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              target="_blank"
              href="https://blog.srirambalaji.com"
            >
              Blog <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <a
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              target="_blank"
              href="https://ageofcopilots.substack.com"
            >
              Newsletter <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <a
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              target="_blank"
              href="https://www.youtube.com/@sriram.balaji"
            >
              Videos <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <a
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              target="_blank"
              href="https://www.powerplatformbootcamp.com/2024/location-detail/?id=319439e4-ae7f-ee11-a81c-6045bd5d6a14&city=Hungary+Power+Platform+User+Group"
            >
              Speaking <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <a
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              target="_blank"
              href="https://youtu.be/7ES2rk5pu8o"
            >
              DevConnect Show<ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="/journey"
            >
              My Journey
            </Link>

            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
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
          className="absolute left-0 top-full w-full bg-white md:hidden dark:bg-black"
        >
          <div className="flex flex-col gap-4 p-4">
          <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#about"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#projects"
              onClick={toggleMenu}
            >
              My Tools
            </Link>
           
            <a
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="https://blog.srirambalaji.com"
              target="_blank"
              onClick={toggleMenu}
            >
              Blog <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <a
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              target="_blank"
              href="https://ageofcopilots.substack.com"
              onClick={toggleMenu}
            >
              Newsletter <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <a
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              target="_blank"
              href="https://www.youtube.com/@sriram.balaji"
              onClick={toggleMenu}
            >
              Videos <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <a
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              target="_blank"
              href="https://www.powerplatformbootcamp.com/2024/location-detail/?id=319439e4-ae7f-ee11-a81c-6045bd5d6a14&city=Hungary+Power+Platform+User+Group"
              onClick={toggleMenu}
            >
              Speaking <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <a
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              target="_blank"
              href="https://youtu.be/7ES2rk5pu8o"
              onClick={toggleMenu}
            >
              DevConnect Show <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <a
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              target="_blank"
              href="/journey"
              onClick={toggleMenu}
            >
              My Journey <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
            <Link
              className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
              href="#contact"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex w-full items-center justify-end">
              <ModeToggle />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
