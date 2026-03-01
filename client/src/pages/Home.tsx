import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { MenuSection } from "@/components/MenuSection";
import { MenuModal } from "@/components/MenuModal";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useMenuData } from "@/hooks/use-menu";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { categories, highlights, itemsByCategory, isLoading, error } = useMenuData();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center halftone-bg">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="bg-primary p-6 rounded-full comic-border comic-shadow-lg mb-6"
        >
          <Loader2 className="w-16 h-16 text-white animate-spin" />
        </motion.div>
        <h2 className="font-display text-4xl text-primary bg-white px-6 py-2 comic-border">LOADING MENU...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 comic-border comic-shadow-lg text-center max-w-lg">
          <h2 className="font-display text-5xl text-destructive mb-4">CRASH! BANG! BOOM!</h2>
          <p className="font-body text-xl">Failed to load the menu. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background halftone-bg">
      <Navbar />
      
      <main>
        <Hero />
        <Highlights 
          items={highlights} 
          onSelectCategory={setSelectedCategory} 
        />
        <MenuSection 
          categories={categories} 
          onSelectCategory={setSelectedCategory} 
        />
        <Contact />
      </main>

      <Footer />

      <MenuModal 
        category={selectedCategory}
        items={selectedCategory ? itemsByCategory[selectedCategory] || [] : []}
        onClose={() => setSelectedCategory(null)}
      />
    </div>
  );
}
