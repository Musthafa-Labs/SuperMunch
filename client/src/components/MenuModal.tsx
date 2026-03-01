import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, UtensilsCrossed } from "lucide-react";
import type { MenuItem } from "@shared/schema";
import { PincodeModal } from "./PincodeModal";

interface MenuModalProps {
  category: string | null;
  items: MenuItem[];
  onClose: () => void;
}

export function MenuModal({ category, items, onClose }: MenuModalProps) {
  const [selectedDish, setSelectedDish] = useState<string | null>(null);

  if (!category) return null;

  return (
    <AnimatePresence>
      {category && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed top-10 bottom-10 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[800px] z-50 flex flex-col"
          >
            <div className="bg-white comic-border comic-shadow-lg flex flex-col h-full overflow-hidden relative">
              
              <div className="bg-primary text-white p-6 border-b-4 border-black flex justify-between items-center relative overflow-hidden">
                {/* Comic dots overlay for header */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '12px 12px' }}></div>
                <h2 className="font-display text-5xl tracking-widest relative z-10">{category.toUpperCase()}</h2>
                <button 
                  onClick={onClose}
                  className="relative z-10 bg-white text-black p-2 comic-border rounded-full hover:scale-110 transition-transform hover:bg-yellow-400"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 bg-secondary/10">
                <div className="grid gap-4">
                  {items.map((item) => (
                    <div key={item.id} className="bg-white p-4 comic-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:-translate-y-1 transition-transform">
                      <div>
                        <h3 className="font-display text-2xl">{item.name}</h3>
                        <p className="font-display text-xl text-primary mt-1">₹{item.price}</p>
                      </div>
                      
                      <div className="flex gap-2 w-full sm:w-auto">
                        <button 
                          onClick={() => setSelectedDish(item.name)}
                          className="flex-1 sm:flex-none comic-button bg-[#25D366] text-white px-4 py-2 text-lg flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span className="hidden sm:inline">WhatsApp</span>
                        </button>
                        <a 
                          href="https://zomato.com" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none comic-button bg-[#E23744] text-white px-4 py-2 text-lg flex items-center justify-center gap-2"
                        >
                          <UtensilsCrossed className="w-5 h-5" />
                          <span className="hidden sm:inline">Zomato</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <PincodeModal 
            isOpen={!!selectedDish} 
            onClose={() => setSelectedDish(null)} 
            dishName={selectedDish || ""} 
          />
        </>
      )}
    </AnimatePresence>
  );
}
