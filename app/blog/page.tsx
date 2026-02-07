import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Blog | Cobertura Retrátil em Policarbonato | Dicas e Informações",
  description: "Aprenda sobre cobertura retrátil, abre e fecha em policarbonato, automação residencial, dicas de instalação e muito mais. Conteúdo exclusivo da Cobersystem.",
  keywords: "blog cobertura retrátil, dicas cobertura policarbonato, automação residencial, sensor chuva, área gourmet, pergolado",
};

// Artigos do blog - você pode expandir isso depois
const artigos = [
  {
    id: 1,
    slug: 'cobertura-retratil-guia-completo',
    titulo: 'Cobertura Retrátil: Guia Completo 2024',
    descricao: 'Tudo que você precisa saber sobre cobertura retrátil em policarbonato. Vantagens, funcionamento e como escolher a melhor opção.',
    data: '2024-11-14',
    categoria: 'Guia',
    palavrasChave: ['cobertura retrátil', 'policarbonato', 'guia completo'],
  },
  {
    id: 2,
    slug: 'cobertura-abre-fecha-vantagens',
    titulo: 'Cobertura Abre e Fecha: Vantagens e Como Funciona',
    descricao: 'Descubra as principais vantagens do sistema de cobertura abre e fecha. Controle total do clima sem perder ventilação.',
    data: '2024-11-14',
    categoria: 'Informações',
    palavrasChave: ['cobertura abre e fecha', 'ventilação', 'controle clima'],
  },
  {
    id: 3,
    slug: 'cobertura-policarbonato-preco-tipos',
    titulo: 'Cobertura em Policarbonato: Preço, Tipos e Instalação',
    descricao: 'Conheça os tipos de policarbonato, faixa de preços e processo de instalação. Tudo para tomar a melhor decisão.',
    data: '2024-11-14',
    categoria: 'Informações',
    palavrasChave: ['cobertura policarbonato', 'preço', 'tipos', 'instalação'],
  },
  {
    id: 4,
    slug: 'cobertura-retratil-churrasqueira',
    titulo: 'Cobertura Retrátil para Churrasqueira: Vale a Pena?',
    descricao: 'Descubra por que a cobertura retrátil é a melhor opção para sua área de churrasqueira. Proteção e ventilação.',
    data: '2024-11-14',
    categoria: 'Aplicações',
    palavrasChave: ['cobertura churrasqueira', 'área gourmet', 'proteção'],
  },
  {
    id: 5,
    slug: 'automacao-alexa-sensor-chuva',
    titulo: 'Automação Residencial: Cobertura com Alexa e Sensor de Chuva',
    descricao: 'Como funciona a automação inteligente. Controle via Alexa e fechamento automático com sensor de chuva.',
    data: '2024-11-14',
    categoria: 'Tecnologia',
    palavrasChave: ['automação', 'Alexa', 'sensor chuva', 'casa inteligente'],
  },
  {
    id: 6,
    slug: 'pergolado-vs-cobertura-retratil',
    titulo: 'Pergolado vs Cobertura Retrátil: Qual Escolher?',
    descricao: 'Comparação completa entre pergolado tradicional e cobertura retrátil. Vantagens e desvantagens de cada opção.',
    data: '2024-11-14',
    categoria: 'Comparação',
    palavrasChave: ['pergolado', 'cobertura retrátil', 'comparação'],
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Blog Cobersystem
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conteúdo exclusivo sobre cobertura retrátil, policarbonato, automação residencial 
            e muito mais. Aprenda tudo para tomar a melhor decisão.
          </p>
        </section>

        {/* Artigos */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artigos.map((artigo) => (
              <article 
                key={artigo.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {artigo.categoria}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {new Date(artigo.data).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {artigo.titulo}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {artigo.descricao}
                  </p>
                  <Link 
                    href={`/blog/${artigo.slug}`}
                    className="text-blue-600 font-semibold hover:underline inline-flex items-center"
                  >
                    Ler mais →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Tem alguma dúvida?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e tire todas suas dúvidas sobre cobertura retrátil
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
          >
            Falar com Especialista
          </Link>
        </section>
      </div>
    </main>
  );
}

