
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const Plans = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  const plans = [{
    credit: "30.000,00",
    installment: "1.250,00",
    duration: "48"
  }, {
    credit: "35.000,00",
    installment: "1.463,00",
    duration: "48"
  }, {
    credit: "40.000,00",
    installment: "1.672,00",
    duration: "48"
  }, {
    credit: "45.000,00",
    installment: "1.880,00",
    duration: "48"
  }, {
    credit: "50.000,00",
    installment: "2.089,00",
    duration: "48"
  }, {
    credit: "55.000,00",
    installment: "2.298,00",
    duration: "48"
  }, {
    credit: "60.000,00",
    installment: "2.508,00",
    duration: "48"
  }, {
    credit: "65.000,00",
    installment: "2.716,00",
    duration: "48"
  }, {
    credit: "70.000,00",
    installment: "2.925,00",
    duration: "48"
  }, {
    credit: "75.000,00",
    installment: "3.134,00",
    duration: "48"
  }];

  const whatsappLinks = [
    "https://web.whatsapp.com/send?phone=5566992557948",
    "https://wa.me/message/GUS5BLBIHRFPE1"
  ];

  let clickCounter = 0;

  const handlePlanClick = () => {
    const selectedLink = whatsappLinks[clickCounter % 2];
    clickCounter++;
    window.open(selectedLink, '_blank');
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Auto-play with loop effect
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000); // 3 second delay

    return () => clearInterval(interval);
  }, [api]);
  
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
          
          <div className="max-w-6xl mx-auto">
            <Carousel setApi={setApi} className="w-full" opts={{
              align: "start",
              loop: true
            }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {plans.map((plan, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-gray-800 border-gray-700 p-6 card-hover h-full">
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
                        
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3"
                          onClick={handlePlanClick}
                        >
                          🖱️ QUERO ESSE PLANO
                        </Button>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white border-white hover:text-black -left-12 bg-slate-50" />
              <CarouselNext className="border-white hover:bg-white -right-12 text-slate-950" />
            </Carousel>
            
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({
              length: plans.length
            }).map((_, index) => <button key={index} className={`w-2 h-2 rounded-full transition-colors ${index === current - 1 ? 'bg-primary' : 'bg-gray-600'}`} onClick={() => api?.scrollTo(index)} />)}
            </div>
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
