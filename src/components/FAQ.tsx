
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "1. Posso pagar Parcelas com meu carro usado?",
      answer: "Sim, você precisa pagar as 6 primeiras parcelas regularmente em dinheiro, do sétimo em diante você pode usar seu veículo usado para antecipar as parcelas restantes e já pegar o seu novo veículo."
    },
    {
      question: "2. É um consórcio?",
      answer: "Não! É muito melhor! No Compra Programada as parcelas são fixas até o final do plano e você sabe exatamente quando vai retirar seu carro, após o pagamento das 12 primeiras sem depender de sorteios ou lances em dinheiro."
    },
    {
      question: "3. Posso mudar o plano da Compra Programada após ter iniciado o contrato?",
      answer: "Pode! Você poderá mudar o plano a qualquer momento desde que não tenha retirado o veículo da loja. Para realizar essa transição será necessário entrar em contato com nossos consultores."
    },
    {
      question: "4. Eu posso pegar meu dinheiro de volta caso eu desista do plano da Compra Programada?",
      answer: "Sim! Você poderá cancelar o plano a qualquer momento e resgatar o seu dinheiro."
    },
    {
      question: "5. Eu tenho restrição no meu nome, posso iniciar um plano de Compra Programada?",
      answer: "Sim! A Compra Programada está disponível para todos os perfis de clientes, até negativados e/ou sem nenhum valor de entrada."
    },
    {
      question: "6. Posso adiantar parcelas para pegar o carro antes?",
      answer: "Sim! Clientes de Compra Programada que quiserem pegar o carro mais rápido, podem antecipar até 6 parcelas do plano, assim conseguem o título do crédito o partir do sétimo mês, desde que todas as 12 primeiras parcelas do plano tenham sido pagas neste período."
    },
    {
      question: "7. Com a Compra Programada, posso usar meu dinheiro para comprar a meu carro da loja que não sejam da Prime?",
      answer: "Não! A Compra Programada é um produto exclusivo e o dinheiro deve ser utilizado nas lojas da rede Prime motors."
    },
    {
      question: "8. Posso optar por não retirar o carro e continuar pagando o plano da Compra Programada após o pagamento das 12 parcelas referentes a entrada?",
      answer: "Sim! Após o pagamento das 12 primeiras parcelas seu crédito estará disponível para uso quando quiser, não há obrigação de uso imediato."
    },
    {
      question: "9. Eu faço a escolha do carro quando escolho o plano ou após o pagamento das 12 primeiras parcelas?",
      answer: "A escolha do carro ocorre após o pagamento das 12 primeiras parcelas e que esteja dentro dos valores do plano que você selecionou."
    },
    {
      question: "10. Qual carro eu posso pegar após o pagamento das 12 primeiras parcelas?",
      answer: "Você poderá pegar qualquer SEMINOVO que esteja disponível para venda em nossas lojas e compatível com o valor do plano que você selecionou."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            PERGUNTAS FREQUENTES
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                  <AccordionTrigger className="text-left text-white hover:text-primary text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

export default FAQ;
