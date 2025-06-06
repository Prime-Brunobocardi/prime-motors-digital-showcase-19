
import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "ESCOLHA SEU PLANO",
      description: "Primeiro você escolhe o maior plano possível de acordo com seu orçamento.",
      color: "bg-red-500"
    },
    {
      number: "2", 
      title: "CONFIANÇA",
      description: "Aqui você firmará um relacionamento de confiança com a Prime. Sim! Nós confiamos em você!",
      color: "bg-red-500"
    },
    {
      number: "3",
      title: "RETIRADA",
      description: "Após pagar as 12 primeiras parcelas em dia você já poderá levar seu carro ou sua moto pra casa! Não é incrível?",
      color: "bg-red-500"
    },
    {
      number: "4",
      title: "SEU CARRO NOVO",
      description: "Já com o carro, você continua pagando as 36 parcelas restantes até quitar o contrato!",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            COMO FUNCIONA
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {steps.map((step, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 p-6 text-center card-hover">
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-primary font-bold text-lg mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
