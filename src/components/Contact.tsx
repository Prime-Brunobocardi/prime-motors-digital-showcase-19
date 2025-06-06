
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const regions = [
    {
      name: "PRIME SORRISO",
      color: "bg-red-500",
      consultors: [
        { name: "Bruno", phone: "(66) 99255-7948" },
        { name: "Maicon", phone: "(66) 99647-1678" },
        { name: "Sidinei", phone: "(66) 99249-0319" }
      ]
    },
    {
      name: "PRIME FELIZ NATAL",
      color: "bg-red-500",
      consultors: [
        { name: "Emerson", phone: "(65) 99309-4875" }
      ]
    },
    {
      name: "PRIME LUCAS",
      color: "bg-red-500",
      consultors: [
        { name: "Ezequiel", phone: "(65) 99933-4239" },
        { name: "Jones", phone: "(65) 99253-2900" },
        { name: "Junior", phone: "(65) 99226-2126" },
        { name: "Paulo", phone: "(65) 99343-2590" },
        { name: "Rafael", phone: "(65) 99292-0759" },
        { name: "Rafaela", phone: "(65) 99223-4822" }
      ]
    },
    {
      name: "CARRO FÁCIL",
      color: "bg-red-500",
      consultors: [
        { name: "Eduardo", phone: "(65) 99268-0982" }
      ]
    }
  ];

  const handleWhatsAppClick = (phone: string, consultorName: string) => {
    const message = `Olá ${consultorName}! Gostaria de saber mais sobre a Compra Programada.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=55${phone.replace(/\D/g, '')}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ENTRE EM CONTATO
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Nossos consultores estão prontos para ajudar você a realizar seu sonho
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {regions.map((region, index) => (
              <Card key={index} className="p-6 shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-4 h-4 rounded-full ${region.color} mr-3`}></div>
                  <h3 className="text-xl font-bold text-gray-900">{region.name}</h3>
                </div>
                
                <div className="space-y-3">
                  {region.consultors.map((consultor, consultorIndex) => (
                    <div 
                      key={consultorIndex}
                      className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
                      onClick={() => handleWhatsAppClick(consultor.phone, consultor.name)}
                    >
                      <div className="flex items-center">
                        <MessageCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-semibold text-gray-900">{consultor.name}</p>
                          <p className="text-sm text-gray-600">{consultor.phone}</p>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-green-500 text-sm font-medium">Clique para conversar</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center shadow-lg border-0 card-hover">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Central</h3>
              <p className="text-gray-600">(65) 9278-2092</p>
            </Card>
            
            <Card className="p-6 text-center shadow-lg border-0 card-hover">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">E-mail</h3>
              <p className="text-gray-600">primemotorsmtmarketing@gmail.com</p>
            </Card>
            
            <Card className="p-6 text-center shadow-lg border-0 card-hover">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Região</h3>
              <p className="text-gray-600">Mato Grosso</p>
            </Card>
            
            <Card className="p-6 text-center shadow-lg border-0 card-hover">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Horário</h3>
              <p className="text-gray-600">Seg - Sex: 8h às 18h</p>
            </Card>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 shadow-2xl border-0 bg-gradient-to-r from-primary/5 to-primary/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quer saber mais sobre a Compra Programada?
              </h3>
              <p className="text-gray-600 mb-8">
                Fale com nossos consultores especializados e descubra como realizar seu sonho do carro próprio de forma simples e sem burocracia.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
                onClick={() => window.open('https://api.whatsapp.com/message/GUS5BLBIHRFPE1?autoload=1&app_absent=0', '_blank')}
              >
                SIMULAR MINHA COMPRA PROGRAMADA
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
