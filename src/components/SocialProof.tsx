import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Miguel Santos",
      location: "Sinop - MT",
      text: "Estava negativado e consegui meu primeiro carro através da Compra Programada. Excelente atendimento!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Alice Oliveira", 
      location: "Várzea Grande - MT",
      text: "Troquei meu carro velho por um seminovo sem burocracia. Recomendo a todos!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Carlos Mendes",
      location: "Rondonópolis - MT", 
      text: "Processo muito fácil e parcelas que cabem no bolso. Estou muito satisfeito!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format"
    }
  ];

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
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
              *Esta seção será atualizada com depoimentos reais dos nossos clientes*
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
