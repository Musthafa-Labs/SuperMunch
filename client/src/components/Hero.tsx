import { motion } from "framer-motion";
import { MessageCircle, Phone, Sandwich, CupSoda, Flame } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 min-h-[90vh] flex flex-col justify-center items-center relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 -right-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-5xl mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
          className="inline-block mb-6 relative"
        >
          <div className="absolute inset-0 bg-yellow-400 comic-border comic-shadow translate-x-3 translate-y-3 -z-10"></div>
          <div className="bg-white comic-border px-8 py-4 relative z-10">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-primary uppercase tracking-wider drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
              Keep Munchin!
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative inline-block mt-8 mb-12"
        >
          <p className="text-2xl md:text-4xl font-display text-foreground bg-accent px-6 py-3 comic-border comic-shadow-sm -rotate-2">
            Burgers, Waffles, Shakes & More – All Veg!
          </p>
          
          {/* Floating animated icons */}
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-10 -left-12 bg-white rounded-full p-3 comic-border comic-shadow-sm">
            <Sandwich className="w-8 h-8 text-orange-500" />
          </motion.div>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} className="absolute -bottom-8 -right-12 bg-white rounded-full p-3 comic-border comic-shadow-sm">
            <CupSoda className="w-8 h-8 text-blue-500" />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"
        >
          <a 
            href="https://wa.me/918939436427?text=Hi%20Super%20Munch"
            target="_blank"
            rel="noopener noreferrer"
            className="comic-button bg-[#25D366] text-white px-8 py-4 text-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-8 h-8 fill-current" />
            Order on WhatsApp
          </a>
          <a 
            href="tel:+918939436427"
            className="comic-button bg-secondary text-secondary-foreground px-8 py-4 text-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Phone className="w-8 h-8 fill-current" />
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
