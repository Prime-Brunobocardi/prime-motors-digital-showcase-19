import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Miguel Santos",
      location: "Sinop - MT",
      text: "Estava negativado e consegui meu primeiro carro através da Compra Programada. Excelente atendimento!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Alice Oliveira", 
      location: "Várzea Grande - MT",
      text: "Troquei meu carro velho por um seminovo sem burocracia. Recomendo a todos!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Carlos Mendes",
      location: "Rondonópolis - MT", 
      text: "Processo muito fácil e parcelas que cabem no bolso. Estou muito satisfeito!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Fernanda Silva",
      location: "Cuiabá - MT",
      text: "Tive dúvidas no começo, parecia bom demais pra ser verdade. Mas deu certo! Só não dou 5 estrelas porque tive que correr atrás de algumas informações.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Roberto Costa",
      location: "Primavera do Leste - MT",
      text: "Confesso que no início fiquei com um pé atrás, mas o atendimento foi tão transparente que decidi seguir com a compra. Hoje estou com meu carro novo e feliz com a escolha.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Mariana Santos",
      location: "Lucas do Rio Verde - MT",
      text: "Achei que ia ser mais complicado por estar com o nome sujo, mas me surpreendi. Faltou só uma explicação melhor no início, mas deu tudo certo no fim.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face&auto=format"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-current absolute top-0 left-0" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-yellow-400" />
      );
    }

    return stars;
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Depoimentos reais de quem já realizou o sonho do carro próprio
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-gray-700 p-6 card-hover">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-300 italic">
                  "{testimonial.text}"
                </p>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-primary/20 rounded-2xl border border-primary/30">
            <h3 className="text-2xl font-bold mb-4">
              Junte-se a centenas de clientes satisfeitos!
            </h3>
            <p className="text-gray-300 mb-6">
              *Esta seção será atualizada com mais depoimentos reais dos nossos clientes*
            </p>
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-white">PRIME</span>
              <span className="text-primary">MOTORS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
