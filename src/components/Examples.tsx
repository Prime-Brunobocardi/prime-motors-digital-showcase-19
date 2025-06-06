
import { Card } from "@/components/ui/card";

const Examples = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            EXEMPLOS DE SUCESSO
          </h2>
          
          {/* Exemplo 1 */}
          <Card className="max-w-4xl mx-auto mb-12 p-8 shadow-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              EXEMPLO 1: CONQUISTA DO PRIMEIRO CARRO
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤔</span>
                </div>
                <p className="text-gray-700">
                  Miguel estava negativado e não tinha nenhum valor para dar de entrada...
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <p className="text-gray-700">
                  Ficou sabendo do Compra Programada e escolheu um plano que cabia no seu bolso
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏪</span>
                </div>
                <p className="text-gray-700">
                  Ele programou a compra do seu carro e pagou em dias as 12 primeiras parcelas do plano
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <p className="text-gray-700">
                  Agora ele já está com seu carro novo na garagem e pagando as 36 parcelas fixas restantes do plano
                </p>
              </div>
            </div>
          </Card>
          
          {/* Exemplo 2 */}
          <Card className="max-w-4xl mx-auto mb-12 p-8 shadow-2xl bg-gradient-to-r from-pink-50 to-purple-50 border-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              EXEMPLO 2: TROCANDO SEU USADO POR UM NOVO
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👩‍💼</span>
                </div>
                <p className="text-gray-700">
                  Alice estava negativada e não conseguia aprovar financiamento para trocar seu veículo velhinho por um mais novo
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <p className="text-gray-700">
                  Ficou sabendo do Compra Programada e escolheu um plano que cabia no seu bolso
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏪</span>
                </div>
                <p className="text-gray-700">
                  Ele programou a compra do seu carro novo, pagou as 6 primeiras parcelas e usou seu carro usado para antecipar as demais parcelas até totalizar 12 pagos
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <p className="text-gray-700">
                  Agora ele já está com seu carro novo na garagem e pagando as 36 parcelas fixas restantes do plano
                </p>
              </div>
            </div>
          </Card>
          
          {/* Resultado Final - Layout Mobile Responsivo */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl md:text-3xl">💰</span>
                </div>
                <p className="font-bold text-gray-900 text-sm md:text-base">PLANEJAMENTO</p>
                <p className="text-primary font-bold text-sm md:text-base">12 Parcelas</p>
              </div>
              
              <div className="text-2xl md:text-4xl text-gray-400 rotate-90 md:rotate-0">+</div>
              
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl md:text-3xl">🚗</span>
                </div>
                <p className="font-bold text-gray-900 text-sm md:text-base">CARRO NOVO</p>
                <p className="text-primary font-bold text-sm md:text-base">36 Parcelas</p>
              </div>
              
              <div className="text-2xl md:text-4xl text-gray-400 rotate-90 md:rotate-0">=</div>
              
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl md:text-3xl">🎉</span>
                </div>
                <p className="font-bold text-gray-900 text-sm md:text-base">SONHO REALIZADO</p>
              </div>
            </div>
            
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

export default Examples;
