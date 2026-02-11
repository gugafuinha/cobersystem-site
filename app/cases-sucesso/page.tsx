import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';

export const metadata: Metadata = {
  title: "Cases de Sucesso | Projetos de Cobertura em Policarbonato | Cobersystem",
  description: "Conheça nossos cases de sucesso em cobertura retrátil e cobertura em policarbonato. Projetos residenciais e comerciais com antes e depois. Veja depoimentos reais de clientes satisfeitos.",
  keywords: "cases de sucesso cobertura, projetos cobertura policarbonato, antes e depois cobertura, cobertura retratil instalada, testemunhos cobertura, depoimentos clientes, transformação área gourmet",
  openGraph: {
    title: "Cases de Sucesso | Cobersystem",
    description: "Projetos reais de cobertura retrátil e cobertura em policarbonato. Veja o antes e depois!",
  },
};

// Você vai substituir com os dados reais das fotos do Drive
const casesDeSucesso = [
  {
    id: 1,
    titulo: 'Transformação de Área Gourmet - Zona Leste SP',
    cliente: 'Residência - Família Silva',
    local: 'São Paulo - Zona Leste',
    tipo: 'Cobertura Abre e Fecha - Policarbonato Alveolar',
    descricao: 'Cliente buscava solução para aproveitar a área gourmet durante todo o ano. Antes, o espaço ficava inutilizado nos dias de chuva e com sol forte. Com a cobertura retrátil, o ambiente se tornou versátil e confortável.',
    desafio: 'Espaço pequeno (3x4m) com necessidade de ventilação natural.',
    solucao: 'Cobertura abre e fecha em policarbonato alveolar com automação via controle remoto.',
    resultados: [
      'Área aproveitada 100% do tempo',
      'Redução de 8°C na temperatura nos dias quentes',
      'Ventilação natural preservada',
      'Proteção total contra chuva',
    ],
    depoimento: 'Revolucionou nossa casa! Agora fazemos churrasco até quando chove. A cobertura fecha automaticamente e continuamos aproveitando. Melhor investimento que fizemos!',
    imagemAntes: '/images/cases-antes-depois/case-01-antes.jpg',
    imagemDepois: '/images/cases-antes-depois/case-01-depois.jpg',
    imagensExtras: [
      '/images/cases-antes-depois/case-01-detalhe-1.jpg',
      '/images/cases-antes-depois/case-01-detalhe-2.jpg',
    ],
  },
  {
    id: 2,
    titulo: 'Cobertura Automatizada com Sensor de Chuva - Apartamento Alto Padrão',
    cliente: 'Apartamento - Sr. Roberto',
    local: 'São Paulo - Zona Sul',
    tipo: 'Cobertura Abre e Fecha - Alumínio + Automação Alexa',
    descricao: 'Cliente de apartamento de alto padrão queria tecnologia de ponta. Solicitou integração total com sistema de automação residencial existente.',
    desafio: 'Integração com Alexa e sistema de automação residencial.',
    solucao: 'Cobertura em alumínio com automação via Alexa, sensor de chuva e app mobile.',
    resultados: [
      'Controle por comando de voz',
      'Fechamento automático ao detectar chuva',
      'Integração perfeita com smart home',
      'Design moderno e minimalista',
    ],
    depoimento: 'A cobertura se integrou perfeitamente ao meu sistema de automação. Falo "Alexa, feche a cobertura" e pronto. Quando viajo, posso controlar pelo app. Tecnologia e conforto.',
    imagemAntes: '/images/cases-antes-depois/case-02-antes.jpg',
    imagemDepois: '/images/cases-antes-depois/case-02-depois.jpg',
    imagensExtras: [
      '/images/cases-antes-depois/case-02-detalhe-1.jpg',
      '/images/cases-antes-depois/case-02-detalhe-2.jpg',
    ],
  },
  {
    id: 3,
    titulo: 'Cobertura Fixa para Garagem - Proteção Total',
    cliente: 'Residência - Família Costa',
    local: 'São Paulo - Zona Norte',
    tipo: 'Cobertura Fixa em Policarbonato Compacto',
    descricao: 'Cliente precisava proteger 3 carros da chuva e sol. Optou por cobertura fixa em policarbonato compacto transparente para manter luminosidade.',
    desafio: 'Vão grande (6x8m) com necessidade de estrutura reforçada.',
    solucao: 'Cobertura fixa em policarbonato compacto 6mm com estrutura de alumínio reforçada.',
    resultados: [
      'Proteção total dos veículos',
      'Luminosidade natural mantida',
      'Estrutura robusta e segura',
      'Sem manutenção há 3 anos',
    ],
    depoimento: 'Meus carros estão sempre protegidos e o ambiente continua claro. O policarbonato não amarelou nada em 3 anos. Qualidade excepcional!',
    imagemAntes: '/images/cases-antes-depois/case-03-antes.jpg',
    imagemDepois: '/images/cases-antes-depois/case-03-depois.jpg',
    imagensExtras: [
      '/images/cases-antes-depois/case-03-antes.jpg',
      '/images/cases-antes-depois/case-03-depois.jpg',
    ],
  },
  {
    id: 4,
    titulo: 'Veneziana em Policarbonato - Fechamento Lateral de Quadra',
    cliente: 'Condomínio Residencial',
    local: 'São Paulo - ABC',
    tipo: 'Veneziana em Policarbonato + Cobertura Fixa',
    descricao: 'Condomínio necessitava proteger quadra poliesportiva mantendo ventilação natural. Optou por veneziana em policarbonato para fechamento lateral.',
    desafio: 'Ventilação natural sem comprometer proteção contra chuva.',
    solucao: 'Veneziana em policarbonato compacto + cobertura fixa alveolar.',
    resultados: [
      'Ventilação natural preservada',
      'Proteção total contra chuva lateral',
      'Luminosidade natural',
      'Valorização do condomínio',
    ],
    depoimento: 'A quadra agora é aproveitada o ano todo. A veneziana permite que o vento circule, mas a chuva não entra. Moradores adoraram!',
    imagemAntes: '/images/cases-antes-depois/case-04-antes.jpg',
    imagemDepois: '/images/cases-antes-depois/case-04-depois.jpg',
    imagensExtras: [
      '/images/cases-antes-depois/case-04-antes.jpg',
      '/images/cases-antes-depois/case-04-depois.jpg',
    ],
  },
];

export default function CasesDeSucesso() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Cases de Sucesso
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça projetos reais de cobertura retrátil e cobertura em policarbonato. 
            Veja o antes e depois e leia depoimentos de clientes satisfeitos.
          </p>
        </section>

        {/* Stats */}
        <section className="mb-16 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-700">Projetos Entregues</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-700">Satisfação</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-700">Anos de Experiência</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-700">Garantia</div>
          </div>
        </section>

        {/* Cases */}
        <section className="space-y-16 mb-16">
          {casesDeSucesso.map((caso) => (
            <article key={caso.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Antes e Depois */}
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold z-10">
                    ANTES
                  </div>
                  <div className="h-96">
                    <OptimizedImage
                      src={caso.imagemAntes}
                      alt={`Antes - ${caso.titulo} - Cobertura em Policarbonato Cobersystem`}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold z-10">
                    DEPOIS
                  </div>
                  <div className="h-96">
                    <OptimizedImage
                      src={caso.imagemDepois}
                      alt={`Depois - ${caso.titulo} - Cobertura em Policarbonato Cobersystem`}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-8">
                <div className="mb-6">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {caso.tipo}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {caso.titulo}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6 text-gray-700">
                  <div>
                    <span className="font-semibold">Cliente:</span> {caso.cliente}
                  </div>
                  <div>
                    <span className="font-semibold">Local:</span> {caso.local}
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-6">
                  {caso.descricao}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      Desafio
                    </h3>
                    <p className="text-gray-700">{caso.desafio}</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      Solução
                    </h3>
                    <p className="text-gray-700">{caso.solucao}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Resultados
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {caso.resultados.map((resultado, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">{resultado}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Depoimento */}
                <div className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-5xl text-blue-600 mr-4">"</span>
                    <div>
                      <p className="text-gray-700 italic mb-2">{caso.depoimento}</p>
                      <p className="text-gray-600 font-semibold">— {caso.cliente}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer transformar seu espaço também?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato e solicite um orçamento personalizado. Vamos tornar seu projeto realidade!
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
          >
            Solicitar Orçamento Grátis
          </Link>
        </section>
      </div>
    </main>
  );
}
