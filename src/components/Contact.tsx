import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center shadow-lg border-0 card-hover">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600">(65) 9278-2092</p>
            </Card>
            
            <Card className="p-6 text-center shadow-lg border-0 card-hover">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">E-mail</h3>
              <p className="text-gray-600">primemotorsmtmarketing@gmail.com</p>
            </Card>
            
            <Card className="p-6 text-center shadow-lg border-0 card-hover">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Endereço</h3>
              <p className="text-gray-600">Cuiabá e Região</p>
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
