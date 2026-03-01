import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 px-4 text-center border-t-8 border-primary">
      <div className="flex flex-col items-center gap-4">
        <Zap className="w-12 h-12 text-yellow-400 fill-yellow-400" />
        <h2 className="font-display text-4xl tracking-widest">SUPER MUNCH</h2>
        <p className="font-body text-lg opacity-80">© {new Date().getFullYear()} Keep Munchin. All rights reserved.</p>
      </div>
    </footer>
  );
}
