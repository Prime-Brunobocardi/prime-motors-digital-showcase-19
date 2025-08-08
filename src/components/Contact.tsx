
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  const regions = [
    {
      name: "PRIME SORRISO",
      color: "bg-red-500",
      consultors: [
        { name: "Bruno", phone: "(66) 99255-7948" }
      ]
    },
    {
      name: "PRIME LUCAS",
      color: "bg-red-500",
      consultors: [
        { name: "Hygor", phone: "(65) 99311-9620" }
      ]
    }
  ];

  const whatsappLinks = [
    "https://web.whatsapp.com/send?phone=5566992557948",
    "https://wa.me/message/GUS5BLBIHRFPE1"
  ];

  let clickCounter = 0;

  const handleWhatsAppClick = (phone: string, consultorName: string) => {
    const selectedLink = whatsappLinks[clickCounter % 2];
    clickCounter++;
    window.open(selectedLink, '_blank');
  };

  const handleMainButtonClick = () => {
    const selectedLink = whatsappLinks[clickCounter % 2];
    clickCounter++;
    window.open(selectedLink, '_blank');
  };

  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FALE COM NOSSOS CONSULTORES
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Escolha seu consultor e tire suas dúvidas pelo WhatsApp
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {regions.map((region, index) => (
              <Card key={index} className="p-6 shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-3 h-3 rounded-full ${region.color} mr-2`}></div>
                  <h3 className="text-lg font-bold text-gray-900">{region.name}</h3>
                </div>
                
                <div className="space-y-2">
                  {region.consultors.map((consultor, consultorIndex) => (
                    <div 
                      key={consultorIndex}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-200 cursor-pointer group"
                      onClick={() => handleWhatsAppClick(consultor.phone, consultor.name)}
                    >
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{consultor.name}</p>
                          <p className="text-xs text-gray-600">{consultor.phone}</p>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-green-500 text-xs font-medium">Conversar</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={handleMainButtonClick}
            >
              SIMULAR MINHA COMPRA PROGRAMADA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
