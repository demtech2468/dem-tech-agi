export const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Villa Moderne",
      type: "Vente",
      price: "450 000 €",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      location: "Bordeaux Centre",
    },
    {
      id: 2,
      title: "Appartement Luxueux",
      type: "Location",
      price: "1 800 €/mois",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      location: "Quartier des Chartrons",
    },
    {
      id: 3,
      title: "Maison Contemporaine",
      type: "Vente",
      price: "380 000 €",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      location: "Mérignac",
    },
  ];

  return (
    <section id="properties" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Biens à la Une
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full">
                  {property.type}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-secondary font-bold text-lg">{property.price}</p>
                <button className="mt-4 w-full bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};