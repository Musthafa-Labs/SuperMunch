import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { MenuItem } from "@shared/schema";

interface HighlightsProps {
  items: MenuItem[];
  onSelectCategory: (category: string) => void;
}

export function Highlights({ items, onSelectCategory }: HighlightsProps) {
  if (!items.length) return null;

  return (
    <section id="highlights" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <h2 className="font-display text-6xl md:text-7xl text-white bg-primary comic-border comic-shadow-sm px-8 py-4 -rotate-2 inline-block relative z-10">
              STAR PICKS!
            </h2>
            <Star className="absolute -top-6 -right-6 w-16 h-16 text-yellow-400 fill-yellow-400 z-20 animate-spin-slow" style={{ animationDuration: '10s' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onSelectCategory(item.category)}
              className="comic-card cursor-pointer group p-6 relative overflow-hidden"
            >
              {/* Decorative background blast */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 z-0"></div>
              
              <div className="relative z-10">
                <div className="bg-primary text-white text-sm font-display tracking-widest px-3 py-1 comic-border inline-block mb-4 -rotate-3">
                  {item.category.toUpperCase()}
                </div>
                <h3 className="font-display text-4xl mb-2">{item.name}</h3>
                <div className="flex justify-between items-center mt-6">
                  <p className="font-display text-3xl text-secondary stroke-black" style={{ textShadow: '2px 2px 0 #000' }}>₹{item.price}</p>
                  <span className="font-body font-bold text-accent group-hover:underline">VIEW MENU &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
