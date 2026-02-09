import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ - Perguntas Frequentes sobre Cobertura Retrátil | Cobersystem',
  description: 'Tire todas suas dúvidas sobre cobertura retrátil em policarbonato: preços, instalação, automação, manutenção e garantia. Respostas de especialistas.',
  keywords: 'cobertura retratil duvidas, perguntas cobertura policarbonato, faq cobertura automatica, quanto custa cobertura retratil',
};

const faqs = [
  {
    pergunta: "Quanto custa uma cobertura retrátil em policarbonato?",
    resposta: "O preço varia de R$ 8.000 a R$ 45.000 dependendo do tamanho, tipo de policarbonato e nível de automação. Para uma área de 15m² com automação básica, o investimento fica em torno de R$ 18.000 a R$ 25.000, incluindo material, instalação e garantia. Oferecemos orçamento gratuito com visita técnica."
  },
  {
    pergunta: "Qual a diferença entre policarbonato compacto e alveolar?",
    resposta: "O policarbonato compacto 2mm oferece 90% de transparência (máxima luminosidade) e é mais leve. Já o alveolar possui câmaras de ar internas que proporcionam isolamento térmico superior (reduz até 40% da temperatura) e isolamento acústico. O alveolar é ideal para regiões muito quentes, enquanto o compacto é perfeito para quem prioriza luz natural."
  },
  {
    pergunta: "Quanto tempo dura uma cobertura retrátil?",
    resposta: "Com manutenção adequada, a estrutura de alumínio dura mais de 20 anos, o policarbonato tem garantia de 10 anos contra amarelamento e vida útil de 15+ anos, e o sistema de automação dura 10+ anos. Oferecemos garantia total de 5 anos (estrutura, policarbonato e automação)."
  },
  {
    pergunta: "Como funciona a automação com Alexa e sensor de chuva?",
    resposta: "A automação permite controle por voz ('Alexa, abra a cobertura'), via smartphone de qualquer lugar, e fechamento automático quando o sensor detecta chuva (em menos de 3 segundos). O sensor funciona 24/7 protegendo móveis e equipamentos mesmo quando você está fora. Também é possível programar horários e rotinas."
  },
  {
    pergunta: "Pode instalar cobertura retrátil em apartamento?",
    resposta: "Sim! A instalação em apartamentos é uma das aplicações mais comuns. Fazemos avaliação estrutural da laje antes da instalação para garantir segurança. A cobertura é perfeita para varandas gourmet, sacadas e áreas externas de apartamentos. Também auxiliamos com documentação para aprovação no condomínio quando necessário."
  },
  {
    pergunta: "Resiste a ventos fortes e granizo?",
    resposta: "Sim, a cobertura é projetada para resistir a ventos de até 80 km/h e o policarbonato é 200x mais resistente que vidro, suportando impactos de granizo sem quebrar. Em situações de ventos extremos (acima de 80 km/h), recomendamos fechar a cobertura para máxima proteção. A estrutura é calculada conforme normas ABNT."
  },
  {
    pergunta: "Qual a manutenção necessária?",
    resposta: "A manutenção é mínima: limpeza anual com água e sabão neutro, verificação semestral de fixações e lubrificação anual dos mecanismos. O policarbonato não amarela (garantia de 10 anos) e não acumula sujeira como coberturas fixas. A automação possui auto-diagnóstico e avisos via app caso haja algum problema."
  },
  {
    pergunta: "Esquenta muito no verão?",
    resposta: "Não! O policarbonato alveolar reduz até 40% da temperatura e bloqueia 99% dos raios UV. Além disso, a grande vantagem da cobertura retrátil é poder ABRIR completamente nos dias quentes, permitindo ventilação total. Isso evita o efeito estufa das coberturas fixas. Você tem controle total: abra para refrescar, feche para proteger."
  },
  {
    pergunta: "Precisa de tomada para funcionar?",
    resposta: "Sim, para a automação (Alexa, sensor de chuva e motor) é necessária uma tomada 110V ou 220V próxima. O consumo de energia é mínimo (similar a uma lâmpada LED). Oferecemos também opção com bateria backup para funcionamento em casos de falta de energia. Há também versão manual (sem motor) para quem preferir."
  },
  {
    pergunta: "Quanto tempo leva a instalação?",
    resposta: "O processo completo leva de 10 a 20 dias: Avaliação técnica (1 dia) → Projeto e aprovação (2-3 dias) → Fabricação sob medida (7-15 dias) → Instalação (1-2 dias) → Treinamento e testes. A instalação em si é rápida (1-2 dias) e pouco invasiva. Durante este período, fornecemos cronograma detalhado e atualizações constantes."
  },
  {
    pergunta: "Valoriza o imóvel?",
    resposta: "Sim! Segundo dados do mercado imobiliário, imóveis com cobertura retrátil automatizada valorizam entre 10% a 15%. É considerado um diferencial competitivo na venda ou locação, pois amplia a área útil do imóvel, oferece tecnologia moderna e baixa manutenção - atributos muito valorizados por compradores."
  },
  {
    pergunta: "Qual a garantia oferecida?",
    resposta: "Oferecemos garantia total de 5 anos que inclui: estrutura de alumínio (5 anos), policarbonato contra amarelamento (10 anos), automação e motor (2 anos) e mão de obra (1 ano). Após o período de garantia, oferecemos assistência técnica e peças de reposição. Todos os produtos possuem certificação ABNT."
  },
  {
    pergunta: "Funciona sem energia elétrica?",
    resposta: "A versão automatizada precisa de energia para o motor e automação. Porém, oferecemos sistema de backup com bateria que permite até 50 acionamentos em caso de falta de energia. Também há opção de acionamento manual de emergência. Para quem prefere, temos versão totalmente manual (sem motor) que não depende de energia."
  },
  {
    pergunta: "Pode instalar em área com churrasqueira?",
    resposta: "Sim! Inclusive é uma das aplicações mais populares. A cobertura retrátil é IDEAL para áreas com churrasqueira porque você pode abrir para ventilação durante o churrasco (eliminando fumaça) e fechar para proteção quando necessário. O policarbonato é resistente ao calor e não sofre danos com fumaça. Distância mínima recomendada da churrasqueira: 1,5 metros."
  },
  {
    pergunta: "Atende em quais regiões?",
    resposta: "Atendemos toda a Grande São Paulo (capital, ABCD, Guarulhos, Osasco) e interior do estado em um raio de 200km da capital, incluindo regiões litorâneas. Para áreas mais distantes, consulte disponibilidade. Oferecemos visita técnica gratuita, projeto personalizado e instalação profissional em todas as regiões atendidas."
  }
];

export default function FAQPage() {
  // Schema.org FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.pergunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.resposta
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <section className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-gray-600">
              Tire todas suas dúvidas sobre cobertura retrátil em policarbonato.
              Não encontrou sua resposta? <Link href="/contato" className="text-blue-600 hover:underline font-semibold">Entre em contato!</Link>
            </p>
          </section>

          {/* FAQs */}
          <section className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <details 
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-6 group"
                >
                  <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between group-hover:text-blue-600 transition">
                    <span className="flex items-start">
                      <span className="text-blue-600 mr-3 text-2xl">❓</span>
                      {faq.pergunta}
                    </span>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 pl-10 text-gray-700 leading-relaxed">
                    {faq.resposta}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Ainda tem dúvidas?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Nossa equipe de especialistas está pronta para te ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
              >
                Solicitar Orçamento Grátis
              </Link>
              <a
                href="https://wa.me/5511943615079"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-2"
              >
                <span>💬</span> WhatsApp: (11) 94361-5079
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
