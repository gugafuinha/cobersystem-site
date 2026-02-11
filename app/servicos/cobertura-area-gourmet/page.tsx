import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSchema from '@/components/FAQSchema';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Cobertura para Área Gourmet | Preço e Ideias | Cobersystem",
  description: "Cobertura retrátil para área gourmet em policarbonato. Ideias, preços e orçamento. Sistema abre e fecha com automação. Proteção contra chuva e sol sem perder ventilação.",
  keywords: "cobertura para área gourmet, cobertura área gourmet preço, cobertura churrasqueira, cobertura retrátil área gourmet, cobertura gourmet SP",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/servicos/cobertura-area-gourmet',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cobertura para Área Gourmet',
  description: 'Cobertura retrátil em policarbonato para área gourmet com automação via Alexa e sensor de chuva.',
  image: ['https://coberturapolicarbonato.com.br/images/blog/cobertura-retratil-area-gourmet.jpg'],
  brand: { '@type': 'Brand', name: 'Cobersystem' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://coberturapolicarbonato.com.br/servicos/cobertura-area-gourmet',
  },
};

const faqs = [
  {
    question: 'Quanto custa uma cobertura para área gourmet?',
    answer: 'O preço de uma cobertura para área gourmet varia conforme o tamanho, material e sistema de automação. Em média, o investimento fica entre R$ 250 e R$ 450 por m², incluindo estrutura de alumínio, telhas de policarbonato e automação. Para áreas gourmet maiores, o valor por m² tende a diminuir.',
  },
  {
    question: 'Qual o melhor tipo de cobertura para área gourmet?',
    answer: 'A cobertura retrátil é ideal para área gourmet, pois permite abrir totalmente para ventilação durante churrascos e fechar quando chover ou esfriar. O sistema abre e fecha oferece flexibilidade total, diferente das coberturas fixas que não permitem controle do clima.',
  },
  {
    question: 'A cobertura para área gourmet precisa de ventilação?',
    answer: 'Sim! A ventilação é essencial em áreas gourmet, especialmente durante churrascos. A cobertura retrátil permite abrir totalmente para máxima ventilação, evitando acúmulo de fumaça e mantendo o ambiente agradável. Quando fechada, protege contra chuva e sol.',
  },
  {
    question: 'Posso automatizar a cobertura da área gourmet?',
    answer: 'Sim! A cobertura para área gourmet pode ser automatizada com Alexa, controle remoto ou sensor de chuva. Isso permite controle total sem precisar sair de casa, e o sensor fecha automaticamente quando detecta chuva, protegendo móveis e equipamentos.',
  },
];

export default function CoberturaAreaGourmet() {
  return (
    <>
      <SchemaMarkup type="product" data={productSchema} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: 'Cobertura para Área Gourmet', href: '/servicos/cobertura-area-gourmet' },
          ]} />

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cobertura para Área Gourmet
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Cobertura retrátil em policarbonato perfeita para área gourmet e churrasqueira. Sistema abre e fecha 
            com automação via Alexa e sensor de chuva. Controle total do clima sem perder ventilação. 
            Ideal para quem ama receber e fazer churrascos.
          </p>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que Cobertura Retrátil para Área Gourmet?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                A área gourmet é um dos espaços mais importantes da casa moderna. É onde você recebe amigos, 
                faz churrascos e cria memórias. Por isso, precisa de uma cobertura que ofereça flexibilidade: 
                aberta para ventilação durante eventos e fechada para proteção quando necessário.
              </p>
              <p className="mb-4">
                A cobertura retrátil é a solução perfeita porque permite abrir totalmente para máxima ventilação 
                (essencial durante churrascos) e fechar quando chover ou esfriar, protegendo móveis, equipamentos 
                e pessoas. Diferente das coberturas fixas, você tem controle total sobre o ambiente.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Vantagens para Área Gourmet</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🔥 Ventilação Total</h3>
                <p className="text-gray-600">Abra totalmente durante churrascos para evitar acúmulo de fumaça e manter o ambiente agradável.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🌧️ Proteção Automática</h3>
                <p className="text-gray-600">Sensor de chuva fecha automaticamente, protegendo móveis, churrasqueira e equipamentos.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">☀️ Controle de Sol</h3>
                <p className="text-gray-600">Feche nos dias muito quentes para sombra ou abra para aproveitar o sol quando quiser.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🤖 Automação Inteligente</h3>
                <p className="text-gray-600">Controle via Alexa ou controle remoto. Abra ou feche sem sair de casa.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ideias e Modelos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Área Gourmet Completa</h3>
                <p className="text-gray-600">Cobertura retrátil cobrindo toda a área gourmet, incluindo churrasqueira, mesa e área de estar.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Apenas Churrasqueira</h3>
                <p className="text-gray-600">Cobertura focada na churrasqueira, protegendo equipamentos e permitindo uso mesmo com chuva.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Integrada com Varanda</h3>
                <p className="text-gray-600">Cobertura que integra área gourmet com varanda, criando um espaço único e versátil.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Fotos de Projetos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <OptimizedImage src="/images/blog/cobertura-retratil-area-gourmet.jpg" alt="Cobertura retrátil área gourmet São Paulo" width={400} height={300} className="rounded-lg" />
              <OptimizedImage src="/images/blog/churrasqueira.jpg" alt="Cobertura churrasqueira automatizada" width={400} height={300} className="rounded-lg" />
              <OptimizedImage src="/images/blog/churrasqueira.jpg" alt="Área gourmet apartamento cobertura" width={400} height={300} className="rounded-lg" />
            </div>
          </section>

          <FAQSchema faqs={faqs} />

          <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center mt-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
            <p className="text-xl mb-8 text-gray-900">Cobertura perfeita para sua área gourmet</p>
            <Link href="/contato" className="inline-block bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition">
              Solicitar Orçamento
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

