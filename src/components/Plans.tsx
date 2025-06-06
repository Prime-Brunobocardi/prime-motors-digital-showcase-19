
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Plans = () => {
  const plans = [
    { credit: "30.000,00", installment: "1.250,00", duration: "48" },
    { credit: "35.000,00", installment: "1.463,00", duration: "48" },
    { credit: "40.000,00", installment: "1.672,00", duration: "48" },
    { credit: "45.000,00", installment: "1.880,00", duration: "48" },
    { credit: "50.000,00", installment: "2.089,00", duration: "48" },
    { credit: "55.000,00", installment: "2.298,00", duration: "48" },
    { credit: "60.000,00", installment: "2.508,00", duration: "48" },
    { credit: "65.000,00", installment: "2.716,00", duration: "48" },
    { credit: "70.000,00", installment: "2.925,00", duration: "48" },
    { credit: "75.000,00", installment: "3.134,00", duration: "48" }
  ];

  return (
    <section id="planos" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            PLANOS
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Escolha o plano ideal pra você
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 p-6 card-hover">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">VALOR DO CRÉDITO</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    R$ {plan.credit}
                  </h3>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-center">
                      <p className="bg-black text-white px-3 py-1 rounded text-sm font-bold">
                        PARCELA
                      </p>
                      <p className="text-primary font-bold mt-2">
                        R$ {plan.installment}
                      </p>
                      <p className="text-gray-400 text-xs">POR MÊS</p>
                    </div>
                    <div className="text-center">
                      <p className="bg-black text-white px-3 py-1 rounded text-sm font-bold">
                        PRAZO
                      </p>
                      <p className="text-white font-bold mt-2 text-2xl">
                        {plan.duration}
                      </p>
                      <p className="text-gray-400 text-xs">MESES</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3">
                    🖱️ QUERO ESSE PLANO
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16">
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

export default Plans;
