import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";

interface PincodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  dishName: string;
}

export function PincodeModal({ isOpen, onClose, dishName }: PincodeModalProps) {
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = ["600083", "600034", "600079", "600021"];
    
    if (valid.includes(pincode.trim())) {
      setError(false);
      const msg = `Hi Super Munch, I would like to order ${dishName}`;
      window.open(`https://wa.me/918939436427?text=${encodeURIComponent(msg)}`, '_blank');
      onClose();
      setPincode("");
    } else {
      setError(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-md"
          >
            <div className="bg-white comic-border comic-shadow-lg p-6 relative">
              <button 
                onClick={onClose}
                className="absolute -top-4 -right-4 bg-destructive text-white p-2 comic-border rounded-full hover:scale-110 transition-transform"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-3 mb-4 text-primary">
                <MapPin className="w-8 h-8" />
                <h3 className="font-display text-3xl uppercase tracking-wider">Delivery Check!</h3>
              </div>
              
              <p className="font-body text-xl mb-6 text-foreground/80">
                You're ordering: <strong className="text-foreground">{dishName}</strong><br/>
                Enter your Pincode to check if we deliver to your secret hideout!
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="e.g. 600083"
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value);
                    setError(false);
                  }}
                  className="w-full text-2xl font-display text-center p-4 comic-border focus:outline-none focus:ring-4 focus:ring-accent/30"
                  maxLength={6}
                />
                
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-destructive/10 text-destructive p-3 rounded-lg border-2 border-destructive text-center font-bold"
                  >
                    Sorry! We don't deliver to this area yet 😢
                  </motion.div>
                )}

                <button 
                  type="submit"
                  className="comic-button bg-accent text-white py-4 text-2xl mt-2"
                >
                  VERIFY & ORDER
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
