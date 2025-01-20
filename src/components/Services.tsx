import { Building, Key } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Nos Services
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Building className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Construction</h3>
            <p className="text-gray-600">
              Réalisez votre projet immobilier sur mesure avec notre expertise en construction.
              Des maisons modernes et durables conçues selon vos besoins.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Key className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Location</h3>
            <p className="text-gray-600">
              Trouvez le bien idéal parmi notre sélection de propriétés à louer.
              Un accompagnement personnalisé tout au long de votre recherche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};