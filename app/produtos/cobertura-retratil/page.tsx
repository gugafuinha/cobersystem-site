import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';

export const metadata: Metadata = {
  title: "Cobertura Retrátil em Policarbonato | Abre e Fecha com Automação | Cobersystem",
  description: "Cobertura retrátil em policarbonato com sistema abre e fecha. Automação via Alexa e sensor de chuva. Controle total do clima com abertura de 0 a 90 graus. Solicite orçamento!",
  keywords: "cobertura retrátil, cobertura retrátil policarbonato, cobertura abre e fecha, cobertura retrátil área gourmet, cobertura retrátil churrasqueira",
  openGraph: {
    title: "Cobertura Retrátil em Policarbonato | Cobersystem",
    description: "Cobertura retrátil com automação via Alexa e sensor de chuva. Controle total do clima.",
  },
};

const produtosRetratil = [
  {
    id: 'policarbonato-compacto-2mm',
    nome: 'Cobertura Retrátil em Policarbonato Compacto 2mm',
    slug: 'policarbonato-compacto-2mm',
    descricao: 'Totalmente transparente ou colorido. Ideal para máxima luminosidade e proteção visual.',
    caracteristicas: [
      'Transparência total ou cores personalizadas',
      'Resistente a impactos',
      'Proteção UV integrada',
      'Abertura de 0 a 90 graus',
      'Estrutura de alumínio personalizada',
    ],
    aplicacoes: [
      'Área de churrasqueira',
      'Varanda de apartamento',
      'Pergolado residencial',
      'Área gourmet',
    ],
    imagem: '/images/projetos/cobertura-retratil-policarbonato-capa.jpg',
  },
  {
    id: 'policarbonato-alveolar',
    nome: 'Cobertura Retrátil em Policarbonato Alveolar',
    slug: 'policarbonato-alveolar',
    descricao: 'Excelente isolamento térmico e acústico. Perfeito para áreas que precisam de maior conforto.',
    caracteristicas: [
      'Isolamento térmico superior',
      'Redução de ruído',
      'Alta resistência',
      'Abertura de 0 a 90 graus',
      'Estrutura de alumínio personalizada',
    ],
    aplicacoes: [
      'Área de lazer',
      'Quintal e jardim',
      'Espaço de convivência',
      'Área externa coberta',
    ],
    imagem: '/images/projetos/cobertura-retratil-policarbonato-capa.jpg',
  },
  {
    id: 'automacao-inteligente',
    nome: 'Cobertura Retrátil com Automação Inteligente',
    slug: 'automacao-inteligente',
    descricao: 'Controle total via Alexa, sensor de chuva automático e controle remoto. Tecnologia de ponta.',
    caracteristicas: [
      'Controle via Alexa (comando de voz)',
      'Sensor de chuva automático',
      'Controle remoto',
      'Fechamento automático em caso de chuva',
      'Abertura programada',
    ],
    aplicacoes: [
      'Qualquer cobertura retrátil',
      'Sistema integrado',
      'Automação residencial',
    ],
    imagem: '/images/projetos/cobertura-retratil-policarbonato-capa.jpg',
  },
];

export default function CoberturaRetratil() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Cobertura Retrátil em Policarbonato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema abre e fecha com automação inteligente. Controle total do clima 
            com abertura de 0 a 90 graus. Sem perder ventilação, com proteção completa.
          </p>
        </section>

        {/* Produtos */}
        <section className="space-y-16 mb-16">
          {produtosRetratil.map((produto) => {
            // Buscar múltiplas imagens para cada produto - usando imagens de capa e produtos
            const imagens = produto.id === 'policarbonato-compacto-2mm'
              ? [
                  '/images/projetos/cobertura-retratil-policarbonato-capa.jpg',
                  '/images/projetos/policarbonato-compacto-2mm-produto.jpg',
                  '/images/projetos/area-gourmet-varanda-23.JPG',
                ]
              : produto.id === 'policarbonato-alveolar'
              ? [
                  '/images/projetos/cobertura-retratil-policarbonato-capa.jpg',
                  '/images/projetos/policarbonato-alveolar-produto.jpg',
                  '/images/projetos/estrutura-aluminio-projeto-11.JPG',
                ]
              : [
                  '/images/projetos/cobertura-retratil-policarbonato-capa.jpg',
                  '/images/projetos/cobertura-abre-fecha-apartamento-24.JPG',
                  '/images/projetos/cobertura-retratil-aluminio.jpg',
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
                          alt={`${produto.nome} - ${produto.id === 'policarbonato-compacto-2mm'
                            ? idx === 0 ? 'Cobertura Retrátil Policarbonato Compacto 2mm'
                            : idx === 1 ? 'Policarbonato Compacto 2mm - Produto'
                            : 'Aplicação em Área Gourmet e Varanda'
                            : produto.id === 'policarbonato-alveolar'
                            ? idx === 0 ? 'Cobertura Retrátil Policarbonato Alveolar'
                            : idx === 1 ? 'Policarbonato Alveolar - Produto'
                            : 'Estrutura em Alumínio'
                            : idx === 0 ? 'Automação Inteligente Cobertura Retrátil'
                            : idx === 1 ? 'Cobertura Abre e Fecha em Apartamento'
                            : 'Cobertura Retrátil em Alumínio'} - Cobersystem`}
                          title={`${produto.nome} - Cobersystem`}
                          width={1200}
                          height={800}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition">
                          <div className="absolute bottom-2 left-2 right-2 text-white text-sm">
                            <p className="font-semibold">
                              {produto.id === 'policarbonato-compacto-2mm'
                                ? idx === 0 ? 'Policarbonato Compacto 2mm - Transparência Total'
                                : idx === 1 ? 'Aplicação em Varanda'
                                : 'Sistema Abre e Fecha'
                                : produto.id === 'policarbonato-alveolar'
                                ? idx === 0 ? 'Policarbonato Alveolar - Isolamento Térmico'
                                : idx === 1 ? 'Instalação Profissional'
                                : 'Detalhe da Estrutura'
                                : idx === 0 ? 'Automação em Área Gourmet'
                                : idx === 1 ? 'Controle em Churrasqueira'
                                : 'Sistema em Apartamento'}
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
                    href={`/produtos/cobertura-retratil/${produto.slug}`}
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Ver Detalhes Completos →
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer saber mais sobre cobertura retrátil?
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

