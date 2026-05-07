import { Skull } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md border-b ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Skull className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Cenmatry</h1>
            <p className="text-xs"> Digital graveyard of abandoned projects</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
