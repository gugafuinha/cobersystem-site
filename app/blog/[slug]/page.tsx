import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const artigos: Record<string, any> = {
  'cobertura-retratil-guia-completo': {
    slug: 'cobertura-retratil-guia-completo',
    titulo: 'Cobertura Retrátil: Guia Completo 2024',
    descricao: 'Tudo que você precisa saber sobre cobertura retrátil em policarbonato.',
  },
  'cobertura-abre-fecha-vantagens': {
    slug: 'cobertura-abre-fecha-vantagens',
    titulo: 'Cobertura Abre e Fecha: Vantagens e Como Funciona',
    descricao: 'Descubra as principais vantagens do sistema de cobertura abre e fecha.',
  },
  'cobertura-policarbonato-preco-tipos': {
    slug: 'cobertura-policarbonato-preco-tipos',
    titulo: 'Cobertura em Policarbonato: Preço, Tipos e Instalação',
    descricao: 'Conheça os tipos de policarbonato, faixa de preços e processo de instalação.',
  },
  'cobertura-retratil-churrasqueira': {
    slug: 'cobertura-retratil-churrasqueira',
    titulo: 'Cobertura Retrátil para Churrasqueira: Vale a Pena?',
    descricao: 'Descubra por que a cobertura retrátil é a melhor opção para sua área de churrasqueira.',
  },
  'automacao-alexa-sensor-chuva': {
    slug: 'automacao-alexa-sensor-chuva',
    titulo: 'Automação Residencial: Cobertura com Alexa e Sensor de Chuva',
    descricao: 'Como funciona a automação inteligente.',
  },
  'pergolado-vs-cobertura-retratil': {
    slug: 'pergolado-vs-cobertura-retratil',
    titulo: 'Pergolado vs Cobertura Retrátil: Qual Escolher?',
    descricao: 'Comparação completa entre pergolado tradicional e cobertura retrátil.',
  },
};

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const artigo = artigos[params.slug];
  
  if (!artigo) {
    return {
      title: 'Post não encontrado',
    };
  }

  return {
    title: `${artigo.titulo} | Cobersystem Blog`,
    description: artigo.descricao,
  };
}

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const artigo = artigos[params.slug];

  if (!artigo) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{artigo.titulo}</h1>
          <p className="text-xl text-gray-700 mb-8">{artigo.descricao}</p>
          
          <div className="prose prose-lg max-w-none">
            <p>Conteúdo do artigo em desenvolvimento...</p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/contato"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(artigos).map((slug) => ({
    slug,
  }));
}
