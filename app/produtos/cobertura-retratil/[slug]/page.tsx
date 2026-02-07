import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import ProductSchema from '@/components/ProductSchema';

const produtos: Record<string, {
  nome: string;
  descricao: string;
  descricaoLonga: string[];
  caracteristicas: string[];
  aplicacoes: string[];
  vantagens: string[];
  imagem: string;
  preco: string;
}> = {
  'policarbonato-compacto-2mm': {
    nome: 'Cobertura Retrátil em Policarbonato Compacto 2mm',
    descricao: 'Totalmente transparente ou colorido. Ideal para máxima luminosidade e proteção visual.',
    descricaoLonga: [
      'A cobertura retrátil em policarbonato compacto 2mm é a solução ideal para quem busca máxima transparência e luminosidade. Com espessura de 2mm, oferece resistência superior mantendo a transparência total.',
      'Disponível em versão totalmente transparente ou em diversas cores personalizadas, permite que você escolha o visual perfeito para seu projeto. A proteção UV integrada garante durabilidade e proteção contra os raios solares.',
      'O sistema de abertura de 0 a 90 graus permite controle total da ventilação. Em dias quentes, você pode abrir completamente para manter o ambiente fresco. Em dias de chuva, fecha totalmente para proteção.',
      'A estrutura de alumínio é personalizada para cada projeto, garantindo resistência e durabilidade. A pintura eletrostática pode ser feita na cor de sua escolha, harmonizando perfeitamente com o ambiente.',
    ],
    caracteristicas: [
      'Transparência total ou cores personalizadas',
      'Espessura: 2mm (alta resistência)',
      'Proteção UV integrada',
      'Resistente a impactos',
      'Abertura de 0 a 90 graus',
      'Estrutura de alumínio personalizada',
      'Pintura eletrostática na cor desejada',
      'Instalação profissional',
    ],
    aplicacoes: [
      'Área de churrasqueira',
      'Varanda de apartamento',
      'Pergolado residencial',
      'Área gourmet',
      'Quintal e jardim',
      'Espaço de convivência',
    ],
    vantagens: [
      'Máxima luminosidade natural',
      'Controle total do clima',
      'Proteção contra chuva e sol',
      'Manutenção da ventilação',
      'Automação disponível (Alexa + sensor de chuva)',
      'Alta durabilidade',
    ],
    imagem: '/images/projetos/cobertura-retratil-policarbonato-capa.jpg',
    preco: 'Solicite orçamento personalizado',
  },
  'policarbonato-alveolar': {
    nome: 'Cobertura Retrátil em Policarbonato Alveolar',
    descricao: 'Excelente isolamento térmico e acústico. Perfeito para áreas que precisam de maior conforto.',
    descricaoLonga: [
      'A cobertura retrátil em policarbonato alveolar oferece isolamento térmico e acústico superior, sendo ideal para áreas que precisam de maior conforto e proteção contra ruídos externos.',
      'A estrutura em favo de mel do policarbonato alveolar cria uma barreira natural contra o calor e o frio, mantendo a temperatura do ambiente mais estável. Isso resulta em maior economia de energia e conforto.',
      'Além do isolamento térmico, o material também reduz significativamente o ruído externo, criando um ambiente mais tranquilo e agradável. Perfeito para áreas próximas a ruas movimentadas ou vizinhança barulhenta.',
      'O sistema retrátil mantém todas as vantagens de controle de ventilação, permitindo que você aproveite o melhor dos dois mundos: isolamento quando fechado e ventilação quando aberto.',
    ],
    caracteristicas: [
      'Isolamento térmico superior',
      'Redução de ruído',
      'Alta resistência',
      'Espessuras: 4mm, 6mm, 8mm, 10mm, 12mm',
      'Abertura de 0 a 90 graus',
      'Estrutura de alumínio personalizada',
      'Proteção UV integrada',
      'Instalação profissional',
    ],
    aplicacoes: [
      'Área de lazer',
      'Quintal e jardim',
      'Espaço de convivência',
      'Área externa coberta',
      'Área gourmet',
      'Varanda residencial',
    ],
    vantagens: [
      'Isolamento térmico superior',
      'Redução de ruído externo',
      'Maior conforto térmico',
      'Economia de energia',
      'Controle total do clima',
      'Automação disponível',
    ],
    imagem: '/images/projetos/cobertura-retratil-policarbonato-capa.jpg',
    preco: 'Solicite orçamento personalizado',
  },
  'automacao-inteligente': {
    nome: 'Cobertura Retrátil com Automação Inteligente',
    descricao: 'Controle total via Alexa, sensor de chuva automático e controle remoto. Tecnologia de ponta.',
    descricaoLonga: [
      'A automação inteligente transforma sua cobertura retrátil em um sistema de última geração. Com integração Alexa, você controla sua cobertura apenas com comandos de voz, sem precisar se levantar.',
      'O sensor de chuva é um diferencial importante. Ele detecta a umidade no ar e fecha automaticamente a cobertura quando começa a chover, mesmo que você não esteja em casa. Sua área externa fica sempre protegida.',
      'Além do controle via Alexa e sensor automático, você também pode usar o controle remoto ou aplicativo no celular. Controle sua cobertura de qualquer lugar do mundo, com total segurança e praticidade.',
      'O sistema permite programação automática. Você pode definir horários específicos para abrir e fechar, criar rotinas personalizadas e integrar com outros dispositivos de automação residencial.',
    ],
    caracteristicas: [
      'Controle via Alexa (comando de voz)',
      'Sensor de chuva automático',
      'Controle remoto',
      'Aplicativo para celular',
      'Fechamento automático em caso de chuva',
      'Abertura programada',
      'Integração com automação residencial',
      'Instalação profissional',
    ],
    aplicacoes: [
      'Qualquer cobertura retrátil',
      'Sistema integrado',
      'Automação residencial completa',
      'Casa inteligente',
    ],
    vantagens: [
      'Controle por voz (Alexa)',
      'Proteção automática contra chuva',
      'Controle remoto de qualquer lugar',
      'Programação personalizada',
      'Integração com outros dispositivos',
      'Praticidade e segurança',
    ],
    imagem: '/images/projetos/cobertura-retratil-policarbonato-capa.jpg',
    preco: 'Solicite orçamento personalizado',
  },
};

export async function generateStaticParams() {
  return Object.keys(produtos).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const produto = produtos[slug];
  
  if (!produto) {
    return {
      title: 'Produto não encontrado',
    };
  }

  return {
    title: `${produto.nome} | Cobersystem`,
    description: produto.descricao,
    keywords: `cobertura retrátil, ${produto.nome.toLowerCase()}, policarbonato, automação`,
    openGraph: {
      title: produto.nome,
      description: produto.descricao,
    },
  };
}

export default async function ProdutoDetalhe({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const produto = produtos[slug];

  if (!produto) {
    notFound();
  }

  return (
    <>
      <ProductSchema
        name={produto.nome}
        description={produto.descricao}
        image={produto.imagem}
        price={produto.preco}
        url={`https://coberturapolicarbonato.com.br/produtos/cobertura-retratil/${slug}`}
      />
      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Início</Link>
          {' / '}
          <Link href="/produtos" className="text-blue-600 hover:underline">Produtos</Link>
          {' / '}
          <Link href="/produtos/cobertura-retratil" className="text-blue-600 hover:underline">Cobertura Retrátil</Link>
          {' / '}
          <span className="text-gray-600">{produto.nome}</span>
        </nav>

        {/* Hero */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <OptimizedImage
                src={produto.imagem}
                alt={`${produto.nome} - Cobertura Retrátil em Policarbonato com Automação - Cobersystem`}
                title={`${produto.nome} - Cobersystem`}
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {produto.nome}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {produto.descricao}
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <p className="text-2xl font-bold text-blue-600 mb-2">
                  {produto.preco}
                </p>
                <Link
                  href="/contato"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Descrição Longa */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Sobre o Produto
          </h2>
          <div className="prose prose-lg max-w-none">
            {produto.descricaoLonga.map((paragrafo, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4 text-lg">
                {paragrafo}
              </p>
            ))}
          </div>
        </section>

        {/* Características e Aplicações */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Características
              </h3>
              <ul className="space-y-3">
                {produto.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700 text-lg">{caracteristica}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Aplicações
              </h3>
              <ul className="space-y-3">
                {produto.aplicacoes.map((aplicacao, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">•</span>
                    <span className="text-gray-700 text-lg">{aplicacao}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Principais Vantagens
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {produto.vantagens.map((vantagem, index) => (
              <div key={index} className="flex items-center">
                <span className="text-blue-600 mr-3 text-2xl">★</span>
                <span className="text-gray-700 text-lg">{vantagem}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer saber mais sobre este produto?
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
    </>
  );
}

