import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';

export const metadata: Metadata = {
  title: "Cobertura Fixa em Policarbonato | Cobersystem",
  description: "Cobertura fixa em policarbonato compacto e alveolar. Proteção permanente com alta qualidade. Ideal para áreas que precisam de cobertura constante.",
  keywords: "cobertura fixa policarbonato, cobertura fixa, policarbonato compacto, policarbonato alveolar, cobertura permanente",
  openGraph: {
    title: "Cobertura Fixa em Policarbonato | Cobersystem",
    description: "Cobertura fixa em policarbonato com alta qualidade e durabilidade.",
  },
};

const produtosFixa = [
  {
    id: 'fixa-compacto',
    nome: 'Cobertura Fixa em Policarbonato Compacto',
    slug: 'fixa-compacto',
    descricao: 'Cobertura permanente em policarbonato compacto. Transparência total ou cores personalizadas. Proteção constante contra chuva e sol.',
    caracteristicas: [
      'Transparência total ou cores personalizadas',
      'Proteção permanente',
      'Resistente a impactos',
      'Proteção UV integrada',
      'Estrutura de alumínio robusta',
    ],
    aplicacoes: [
      'Área de estacionamento',
      'Entrada de residência',
      'Área de serviço',
      'Cobertura permanente',
    ],
    imagem: '/images/projetos/cobertura-fixa-policarbonato-capa.jpg',
  },
  {
    id: 'fixa-alveolar',
    nome: 'Cobertura Fixa em Policarbonato Alveolar',
    slug: 'fixa-alveolar',
    descricao: 'Cobertura fixa com excelente isolamento térmico e acústico. Perfeita para áreas que precisam de proteção constante e conforto.',
    caracteristicas: [
      'Isolamento térmico superior',
      'Redução de ruído',
      'Alta resistência',
      'Proteção permanente',
      'Estrutura de alumínio robusta',
    ],
    aplicacoes: [
      'Área de lazer permanente',
      'Garagem coberta',
      'Área de convivência',
      'Cobertura industrial',
    ],
    imagem: '/images/projetos/cobertura-fixa-policarbonato-capa.jpg',
  },
];

export default function CoberturaFixa() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Cobertura Fixa em Policarbonato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proteção permanente com alta qualidade. Cobertura fixa em policarbonato 
            compacto e alveolar para áreas que precisam de proteção constante.
          </p>
        </section>

        {/* Produtos */}
        <section className="space-y-16 mb-16">
          {produtosFixa.map((produto) => {
            // Buscar múltiplas imagens para cada produto - usando imagens de capa e produtos
            const imagens = produto.id === 'fixa-compacto' 
              ? [
                  '/images/projetos/cobertura-fixa-policarbonato-capa.jpg',
                  '/images/projetos/policarbonato-compacto-varanda-3.JPG',
                  '/images/projetos/estrutura-aluminio-policarbonato-compacto-34.JPG',
                ]
              : [
                  '/images/projetos/cobertura-fixa-policarbonato-capa.jpg',
                  '/images/projetos/policarbonato-alveolar-instalacao-30.JPG',
                  '/images/projetos/estrutura-aluminio-projeto-11.JPG',
                ];
            
            return (
              <article key={produto.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {produto.nome}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {produto.descricao}
                  </p>
                  
                  {/* Galeria de Imagens */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {imagens.map((img, idx) => (
                      <div key={idx} className="relative h-48 rounded-lg overflow-hidden group">
                        <OptimizedImage
                          src={img}
                          alt={`${produto.nome} - ${produto.id === 'fixa-compacto'
                            ? idx === 0 ? 'Cobertura Fixa Policarbonato Compacto - Capa'
                            : idx === 1 ? 'Policarbonato Compacto em Varanda'
                            : 'Estrutura de Alumínio para Policarbonato Compacto'
                            : idx === 0 ? 'Cobertura Fixa Policarbonato Alveolar - Capa'
                            : idx === 1 ? 'Policarbonato Alveolar - Instalação Profissional'
                            : 'Estrutura em Alumínio'} - Cobersystem`}
                          title={`${produto.nome} - Cobersystem`}
                          width={1200}
                          height={800}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition">
                          <div className="absolute bottom-2 left-2 right-2 text-white text-sm">
                            <p className="font-semibold">
                              {produto.id === 'fixa-compacto' 
                                ? idx === 0 ? 'Policarbonato Compacto em Varanda' 
                                : idx === 1 ? 'Policarbonato Compacto - Detalhe' 
                                : 'Estrutura de Alumínio'
                                : idx === 0 ? 'Policarbonato Alveolar - Instalação'
                                : idx === 1 ? 'Policarbonato Alveolar - Detalhe'
                                : 'Isolamento Térmico Superior'}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        Características
                      </h3>
                      <ul className="space-y-2">
                        {produto.caracteristicas.map((caracteristica, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span className="text-gray-700">{caracteristica}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        Aplicações
                      </h3>
                      <ul className="space-y-2">
                        {produto.aplicacoes.map((aplicacao, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span className="text-gray-700">{aplicacao}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link
                    href={`/produtos/cobertura-fixa/${produto.slug}`}
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Ver Detalhes Completos →
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

        {/* Comparação */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Cobertura Fixa vs Retrátil
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Cobertura Fixa
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Proteção permanente</li>
                <li>✓ Custo mais baixo</li>
                <li>✓ Instalação mais simples</li>
                <li>✗ Sem controle de ventilação</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Cobertura Retrátil
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Controle total do clima</li>
                <li>✓ Ventilação quando necessário</li>
                <li>✓ Automação inteligente</li>
                <li>✗ Investimento maior</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer saber mais sobre cobertura fixa?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato e solicite um orçamento personalizado
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
          >
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}

