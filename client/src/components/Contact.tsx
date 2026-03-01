import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-accent relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 left-10 text-white opacity-50"><MapPin className="w-24 h-24" /></div>
      <div className="absolute bottom-10 right-10 text-white opacity-50"><Clock className="w-32 h-32" /></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white comic-border comic-shadow-lg p-8 md:p-12 text-center -rotate-1">
          <h2 className="font-display text-5xl md:text-7xl mb-10 text-primary drop-shadow-[2px_2px_0_rgba(0,0,0,1)] uppercase">
            Drop By Or Order!
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-left mb-12">
            <div className="flex flex-col gap-4 bg-yellow-50 p-6 comic-border">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="font-display text-3xl uppercase">Location</h3>
              </div>
              <p className="font-body text-xl font-bold">
                53, 7th Avenue, Sarvamangala Colony,<br />
                Manthope Colony, Ashok Nagar,<br />
                Chennai, Tamil Nadu, India
              </p>
            </div>

            <div className="flex flex-col gap-4 bg-blue-50 p-6 comic-border">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-accent" />
                <h3 className="font-display text-3xl uppercase">Hours</h3>
              </div>
              <p className="font-body text-xl font-bold text-4xl text-primary mt-2">
                12:00 PM<br/>|<br/>9:30 PM
              </p>
              <p className="font-body font-bold text-gray-500 uppercase tracking-widest">Daily</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:+918939436427"
              className="comic-button bg-black text-white px-8 py-4 text-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Phone className="w-8 h-8" />
              Call +91 8939436427
            </a>
            <a 
              href="https://wa.me/918939436427?text=Hi%20Super%20Munch"
              target="_blank"
              rel="noopener noreferrer"
              className="comic-button bg-[#25D366] text-white px-8 py-4 text-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-8 h-8" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
