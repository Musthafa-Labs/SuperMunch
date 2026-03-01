import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

interface MenuSectionProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const CATEGORY_COLORS = [
  "bg-primary", "bg-secondary", "bg-accent", "bg-green-400", "bg-purple-400", "bg-pink-400"
];

export function MenuSection({ categories, onSelectCategory }: MenuSectionProps) {
  return (
    <section id="menu" className="py-20 px-4 bg-white comic-border-y-8 border-y-black relative overflow-hidden">
      {/* Halftone background */}
      <div className="absolute inset-0 halftone-bg opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-4 bg-white comic-border comic-shadow-sm px-10 py-4 rotate-1">
            <Utensils className="w-10 h-10 text-primary" />
            <h2 className="font-display text-6xl md:text-7xl text-foreground uppercase">
              Full Menu
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, i) => {
            const colorClass = CATEGORY_COLORS[i % CATEGORY_COLORS.length];
            const textColor = colorClass === "bg-secondary" || colorClass === "bg-green-400" ? "text-black" : "text-white";
            
            return (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectCategory(category)}
                className={`comic-border comic-shadow p-6 sm:p-8 flex items-center justify-center text-center ${colorClass} ${textColor} transition-transform`}
              >
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-widest break-words w-full" style={{ textShadow: colorClass !== 'bg-secondary' ? '2px 2px 0 #000' : 'none' }}>
                  {category}
                </h3>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
