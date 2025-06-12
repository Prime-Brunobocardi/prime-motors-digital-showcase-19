import { Button } from "@/components/ui/button";
import { Calendar, Car, Shield, CreditCard } from "lucide-react";
const Hero = () => {
  return <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="w-12 h-12 text-white mr-4" />
            <Car className="w-12 h-12 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            COMPRA<br />
            <span className="text-gradient">PROGRAMADA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Já pensou em adquirir o seu veículo em até <strong className="text-primary">48 meses</strong> sem ter que dar nada de entrada e sem análise de crédito?
          </p>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-4xl mx-auto border border-gray-700">
            <p className="text-lg md:text-xl text-white mb-6">
              A Prime Motors tem a solução pra você! Agora você pode programar a compra do seu veículo dos sonhos com parcelas que cabem no seu bolso!
            </p>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl" onClick={() => window.open('https://api.whatsapp.com/message/GUS5BLBIHRFPE1?autoload=1&app_absent=0', '_blank')}>
              CLIQUE AQUI E SAIBA MAIS!
            </Button>
          </div>

          {/* Features Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center animate-bounce-in">
              <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-white text-sm">Sem Análise de Crédito</p>
            </div>
            <div className="text-center animate-bounce-in" style={{
            animationDelay: '0.1s'
          }}>
              <CreditCard className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-white text-sm">Sem Entrada</p>
            </div>
            <div className="text-center animate-bounce-in" style={{
            animationDelay: '0.2s'
          }}>
              <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-white text-sm">Até 48 Meses</p>
            </div>
            <div className="text-center animate-bounce-in" style={{
            animationDelay: '0.3s'
          }}>
              <Car className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-white text-sm">Parcelas Flexíveis </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;