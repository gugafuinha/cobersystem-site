import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';

export const metadata: Metadata = {
  title: "Cobertura Termoacústica | Cobertura Sanduíche com Isolamento | Cobersystem",
  description: "Cobertura termoacústica (cobertura sanduíche) com isolamento térmico e acústico superior. Ideal para conforto total em ambientes residenciais e comerciais. Solicite orçamento!",
  keywords: "cobertura termoacustica, cobertura sanduíche, isolamento térmico cobertura, isolamento acústico cobertura, cobertura com isolamento, cobertura térmica, cobertura para galpão",
  openGraph: {
    title: "Cobertura Termoacústica (Sanduíche) | Cobersystem",
    description: "Isolamento térmico e acústico superior para conforto total.",
  },
};

const produtosTermoacustica = [
  {
    id: 'sanduiche-eps',
    nome: 'Cobertura Termoacústica com EPS (Isopor)',
    slug: 'sanduiche-eps',
    descricao: 'Sistema sanduíche com núcleo de EPS (isopor de alta densidade). Excelente custo-benefício com ótimo isolamento térmico e acústico.',
    caracteristicas: [
      'Núcleo em EPS (Poliestireno Expandido) de alta densidade',
      'Isolamento térmico de até 10°C de diferença',
      'Redução de ruído de até 30 dB',
      'Revestimento externo em alumínio ou aço',
      'Leve e resistente',
      'Instalação rápida e limpa',
    ],
    aplicacoes: [
      'Galpões industriais e comerciais',
      'Residências',
      'Áreas de lazer',
      'Coberturas residenciais',
    ],
    espessuras: ['30mm', '50mm', '100mm'],
    imagem: '/images/projetos/termoacustica-eps.jpg',
  },
  {
    id: 'sanduiche-pu',
    nome: 'Cobertura Termoacústica com PU (Poliuretano)',
    slug: 'sanduiche-pu',
    descricao: 'Sistema sanduíche premium com núcleo de Poliuretano. Máxima eficiência em isolamento térmico e acústico.',
    caracteristicas: [
      'Núcleo em PU (Poliuretano) - maior eficiência',
      'Isolamento térmico superior - até 15°C de diferença',
      'Redução de ruído de até 40 dB',
      'Maior durabilidade e resistência',
      'Revestimento externo personalizado',
      'Ideal para ambientes que exigem controle térmico rigoroso',
    ],
    aplicacoes: [
      'Câmaras frias',
      'Galpões industriais',
      'Ambientes comerciais',
      'Residências de alto padrão',
    ],
    espessuras: ['30mm', '50mm', '100mm'],
    imagem: '/images/projetos/termoacustica-pu.jpg',
  },
  {
    id: 'sanduiche-la-rocha',
    nome: 'Cobertura Termoacústica com Lã de Rocha',
    slug: 'sanduiche-la-rocha',
    descricao: 'Sistema sanduíche com núcleo de Lã de Rocha. Máxima proteção acústica e térmica com propriedades anti-chama.',
    caracteristicas: [
      'Núcleo em Lã de Rocha - material incombustível',
      'Isolamento acústico excepcional - até 45 dB',
      'Isolamento térmico de alta eficiência',
      'Proteção contra incêndio (material classe A)',
      'Resistente a altas temperaturas',
      'Ideal para ambientes com requisitos de segurança contra incêndio',
    ],
    aplicacoes: [
      'Galpões industriais',
      'Áreas com risco de incêndio',
      'Ambientes comerciais',
      'Fábricas e indústrias',
    ],
    espessuras: ['50mm', '100mm'],
    imagem: '/images/projetos/termoacustica-la-rocha.jpg',
  },
];

export default function CoberturaTermoacustica() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Cobertura Termoacústica (Cobertura Sanduíche)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema de cobertura sanduíche com isolamento térmico e acústico superior. 
            Conforto total para ambientes residenciais, comerciais e industriais.
          </p>
        </section>

        {/* O que é */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            O que é Cobertura Termoacústica?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                A cobertura termoacústica, também conhecida como <strong>cobertura sanduíche</strong>, 
                é um sistema construtivo composto por três camadas: duas chapas metálicas externas 
                (alumínio ou aço) e um núcleo isolante (EPS, PU ou Lã de Rocha).
              </p>
              <p className="text-gray-700 mb-4">
                Essa estrutura proporciona <strong>isolamento térmico e acústico</strong> excepcional, 
                mantendo ambientes mais frescos no verão, mais quentes no inverno, e reduzindo 
                drasticamente ruídos externos.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Principais Vantagens:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Conforto térmico:</strong> Até 15°C de diferença</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Isolamento acústico:</strong> Redução de até 45 dB</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Economia de energia:</strong> Reduz uso de ar-condicionado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Durabilidade:</strong> Longa vida útil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Instalação rápida:</strong> Sistema modular</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section className="space-y-16 mb-16">
          {produtosTermoacustica.map((produto) => (
            <article key={produto.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {produto.nome}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {produto.descricao}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Características
                    </h3>
                    <ul className="space-y-2">
                      {produto.caracteristicas.map((caracteristica, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-600 mr-2">✓</span>
                          <span className="text-gray-700">{caracteristica}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Aplicações
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {produto.aplicacoes.map((aplicacao, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          <span className="text-gray-700">{aplicacao}</span>
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Espessuras Disponíveis
                    </h3>
                    <div className="flex gap-2">
                      {produto.espessuras.map((esp) => (
                        <span key={esp} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {esp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Comparativo */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Qual tipo escolher?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="p-4 text-gray-800">Tipo</th>
                  <th className="p-4 text-gray-800">Isolamento Térmico</th>
                  <th className="p-4 text-gray-800">Isolamento Acústico</th>
                  <th className="p-4 text-gray-800">Custo-Benefício</th>
                  <th className="p-4 text-gray-800">Melhor Para</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-gray-700">EPS (Isopor)</td>
                  <td className="p-4 text-gray-700">Bom</td>
                  <td className="p-4 text-gray-700">Bom</td>
                  <td className="p-4 text-green-600 font-semibold">Excelente</td>
                  <td className="p-4 text-gray-700">Galpões, residências</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-gray-700">PU (Poliuretano)</td>
                  <td className="p-4 text-green-600 font-semibold">Excelente</td>
                  <td className="p-4 text-green-600 font-semibold">Excelente</td>
                  <td className="p-4 text-gray-700">Bom</td>
                  <td className="p-4 text-gray-700">Alto padrão, câmaras frias</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-700">Lã de Rocha</td>
                  <td className="p-4 text-green-600 font-semibold">Excelente</td>
                  <td className="p-4 text-green-600 font-semibold">Superior</td>
                  <td className="p-4 text-gray-700">Bom</td>
                  <td className="p-4 text-gray-700">Indústrias, anti-incêndio</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer saber mais sobre Cobertura Termoacústica?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Entre em contato e solicite um orçamento personalizado
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition shadow-lg"
          >
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}
