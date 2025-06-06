
import { Card } from "@/components/ui/card";
import { HandHeart, Percent, PieChart, Calendar } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: HandHeart,
      title: "Disponível também para negativados",
      description: "Sem restrições para quem está com o nome sujo"
    },
    {
      icon: Percent,
      title: "Parcelas que cabem no bolso",
      description: "Valores acessíveis que se adaptam ao seu orçamento"
    },
    {
      icon: PieChart,
      title: "Melhor do que consórcio",
      description: "Mais vantajoso e sem sorteios"
    },
    {
      icon: Calendar,
      title: "Veículo entregue já na 12ª parcela",
      description: "Receba seu carro rapidamente"
    }
  ];

  return (
    <section id="vantagens" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            VANTAGENS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-8 text-center card-hover bg-white border-0 shadow-lg">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </Card>
            ))}
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              SEM LANCE E SEM SORTEIO
            </h3>
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-gray-600">PRIME</span>
              <span className="text-primary">MOTORS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
