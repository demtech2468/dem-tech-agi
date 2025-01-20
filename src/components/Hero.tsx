export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80')] 
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Votre Partenaire Immobilier de Confiance
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Construction et location de biens immobiliers d'exception
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#properties" 
              className="bg-secondary text-white px-8 py-3 rounded-md text-center hover:bg-secondary/90 transition-colors"
            >
              Découvrir nos biens
            </a>
            <a 
              href="#contact" 
              className="bg-white text-primary px-8 py-3 rounded-md text-center hover:bg-gray-100 transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};