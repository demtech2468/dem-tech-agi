import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Dem-Tech</h3>
            <p className="text-gray-400">
              Votre partenaire de confiance pour tous vos projets immobiliers
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-secondary" />
                <span>123 Avenue des Champs-Élysées, Paris</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-secondary" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-secondary" />
                <span>contact@dem-tech.fr</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Horaires</h4>
            <div className="space-y-2 text-gray-400">
              <p>Lundi - Vendredi: 9h - 18h</p>
              <p>Samedi: 10h - 16h</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dem-Tech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};