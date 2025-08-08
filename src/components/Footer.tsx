
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">PRIME</span>
              <span className="text-primary">MOTORS</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Realizando sonhos através da Compra Programada. 
              Seu carro novo sem burocracia, sem entrada e sem análise de crédito.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-4">Compra Programada</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Como Funciona</li>
                  <li>Vantagens</li>
                  <li>Planos Disponíveis</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Contato</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>(65) 99311-9620</li>
                  <li>primemotorsmtmarketing@gmail.com</li>
                  <li className="mt-4">
                    <h5 className="font-semibold text-white mb-2">Atendemos em:</h5>
                    <div className="space-y-1">
                      <div>📍 Sorriso</div>
                      <div>📍 Lucas do Rio Verde</div>
                      <div>📍 Cuiabá</div>
                      <div>📍 Feliz Natal</div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Horário de Atendimento</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Segunda a Sexta: 8h às 18h</li>
                  <li>Sábado: 8h às 12h</li>
                  <li>Domingo: Fechado</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Prime Motors. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Compra Programada - A maneira mais inteligente de adquirir seu veículo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
