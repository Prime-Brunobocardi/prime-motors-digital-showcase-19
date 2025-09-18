import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState, useRef } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
const Plans = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const clickCounterRef = useRef(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isPaused, setIsPaused] = useState(false);
  const plans = [{
    credit: "15.000,00",
    promoInstallment: "520,00",
    duration: "60"
  }, {
    credit: "20.000,00",
    promoInstallment: "670,00",
    duration: "60"
  }, {
    credit: "25.000,00",
    promoInstallment: "830,00",
    duration: "60"
  }, {
    credit: "30.000,00",
    promoInstallment: "950,00",
    duration: "60"
  }, {
    credit: "35.000,00",
    promoInstallment: "1.080,00",
    duration: "60"
  }, {
    credit: "40.000,00",
    promoInstallment: "1.230,00",
    duration: "60"
  }, {
    credit: "45.000,00",
    promoInstallment: "1.350,00",
    duration: "60"
  }, {
    credit: "50.000,00",
    promoInstallment: "1.500,00",
    duration: "60"
  }, {
    credit: "55.000,00",
    promoInstallment: "1.670,00",
    duration: "60"
  }, {
    credit: "60.000,00",
    promoInstallment: "1.850,00",
    duration: "60"
  }, {
    credit: "65.000,00",
    promoInstallment: "2.000,00",
    duration: "60"
  }, {
    credit: "70.000,00",
    promoInstallment: "2.150,00",
    duration: "60"
  }, {
    credit: "75.000,00",
    promoInstallment: "2.250,00",
    duration: "60"
  }, {
    credit: "80.000,00",
    promoInstallment: "2.400,00",
    duration: "60"
  }, {
    credit: "90.000,00",
    promoInstallment: "2.700,00",
    duration: "60"
  }, {
    credit: "100.000,00",
    promoInstallment: "3.000,00",
    duration: "60"
  }];
  const whatsappLinks = ["https://web.whatsapp.com/send?phone=5565993119620", "https://wa.me/5566992557948"];

  // Inicializar o temporizador
  useEffect(() => {
    const initTimer = () => {
      const savedStartTime = localStorage.getItem('primemotors-timer-start');
      const now = Date.now();
      if (savedStartTime) {
        const startTime = parseInt(savedStartTime);
        const elapsed = now - startTime;
        const timerDuration = 10 * 60 * 60 * 1000; // 10 horas em ms
        const resetDuration = 60 * 60 * 1000; // 1 hora em ms

        // Se passou mais de 11 horas (10h + 1h de reset), resetar o timer
        if (elapsed > timerDuration + resetDuration) {
          localStorage.setItem('primemotors-timer-start', now.toString());
          return timerDuration;
        }

        // Se ainda está dentro das 10 horas, continuar contando
        if (elapsed < timerDuration) {
          return timerDuration - elapsed;
        }

        // Se zerou mas ainda não passou o tempo de reset, manter em 0
        return 0;
      } else {
        // Primeiro acesso, salvar o tempo de início
        localStorage.setItem('primemotors-timer-start', now.toString());
        return 10 * 60 * 60 * 1000; // 10 horas em ms
      }
    };
    let remainingTime = initTimer();
    const updateTimer = () => {
      if (remainingTime > 0) {
        remainingTime -= 1000;
        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor(remainingTime % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(remainingTime % (1000 * 60) / 1000);
        setTimeLeft({
          hours,
          minutes,
          seconds
        });
      } else {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };
    updateTimer(); // Atualizar imediatamente
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);
  const handlePlanClick = (plan: {
    credit: string;
    promoInstallment: string;
    duration: string;
  }) => {
    console.log('handlePlanClick called with plan:', plan);
    const selectedLink = whatsappLinks[clickCounterRef.current % 2];
    clickCounterRef.current++;
    console.log('Selected WhatsApp link:', selectedLink);
    const message = `Parabéns!! seu credito da compra programada já esta *APROVADA*, você escolheu o credito de R$ ${plan.credit} com parcelas de R$ ${plan.promoInstallment} em ${plan.duration} meses. Gostaria de mais informações?`;
    console.log('Generated message:', message);
    const encodedMessage = encodeURIComponent(message);
    const linkWithMessage = selectedLink.includes('web.whatsapp.com') ? `${selectedLink}&text=${encodedMessage}` : `${selectedLink}?text=${encodedMessage}`;
    console.log('Final WhatsApp link:', linkWithMessage);
    window.open(linkWithMessage, '_blank');
  };
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Auto-play with loop effect - only when not paused
    const interval = setInterval(() => {
      if (!isPaused) {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }
    }, 8000); // 8 second delay

    return () => clearInterval(interval);
  }, [api, isPaused]);
  return <section id="planos" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            PLANOS
          </h2>
          
          {/* Nova Modalidade */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-lg mx-auto max-w-lg">
              <p className="text-lg font-bold mb-2">✅ COMPRA PROGRAMADA</p>
              <p className="text-sm mb-2">Agora mais acessível com parcelamento em</p>
              <div className="text-2xl font-bold">
                60 MESES
              </div>
              <p className="text-xs mt-1 opacity-90">Facilite seu sonho automotivo</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-12">
            Escolha o plano ideal pra você
          </p>
          
          <div className="max-w-6xl mx-auto">
            <Carousel setApi={setApi} className="w-full" opts={{
            align: "start",
            loop: true
          }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {plans.map((plan, index) => <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-gray-800 border-gray-700 p-6 card-hover h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}>
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
                             <div className="mt-2">
                               <p className="text-green-500 font-bold text-lg">
                                 R$ {plan.promoInstallment}
                               </p>
                             </div>
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
                        
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3" onClick={() => handlePlanClick(plan)}>
                          🖱️ QUERO ESSE PLANO
                        </Button>
                      </div>
                    </Card>
                  </CarouselItem>)}
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
    </section>;
};
export default Plans;