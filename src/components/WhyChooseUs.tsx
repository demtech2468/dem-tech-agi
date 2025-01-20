import { Award, Shield, Users } from "lucide-react";

export const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pourquoi Nous Choisir
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Expertise Reconnue</h3>
            <p className="text-white/80">
              Plus de 15 ans d'expérience dans l'immobilier et la construction
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Qualité Garantie</h3>
            <p className="text-white/80">
              Des biens sélectionnés avec soin et des constructions aux normes
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Service Personnalisé</h3>
            <p className="text-white/80">
              Un accompagnement sur mesure pour chaque client
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};