import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function Navbar() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Highlights", href: "#highlights" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Area */}
        <div className="bg-primary text-primary-foreground comic-border comic-shadow-sm px-4 py-2 transform -rotate-2 pointer-events-auto cursor-pointer">
          <a href="#home" className="flex items-center gap-2">
            <Zap className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            <span className="font-display text-3xl tracking-widest">SUPER MUNCH</span>
          </a>
        </div>

        {/* Navigation - No hamburger, horizontal scroll/wrap on small screens */}
        <nav className="pointer-events-auto bg-white comic-border comic-shadow-sm px-4 py-2 flex flex-wrap justify-end gap-2 sm:gap-6 overflow-x-auto max-w-[60vw] sm:max-w-none">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-display text-lg sm:text-xl text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="font-display text-lg sm:text-xl text-secondary hover:text-primary transition-colors whitespace-nowrap bg-foreground px-3 rounded-md border-2 border-foreground hover:bg-white"
          >
            ORDER NOW!
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
