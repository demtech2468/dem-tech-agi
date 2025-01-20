import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">Dem-Tech</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
            <a href="#properties" className="text-gray-700 hover:text-primary transition-colors">Biens</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">À propos</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#properties" className="text-gray-700 hover:text-primary transition-colors">Biens</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">À propos</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};