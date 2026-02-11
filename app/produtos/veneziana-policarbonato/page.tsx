import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';

export const metadata: Metadata = {
  title: "Veneziana em Policarbonato | Fechamento Lateral Ventilado | Cobersystem",
  description: "Veneziana em policarbonato para fechamento lateral de galpões, quadras e áreas externas. Ventilação controlada mantendo proteção. Ideal para indústrias e comércio.",
  keywords: "veneziana policarbonato, fechamento lateral policarbonato, veneziana para galpão, fechamento ventilado, veneziana industrial, fechamento quadra, policarbonato ventilado",
  openGraph: {
    title: "Veneziana em Policarbonato | Cobersystem",
    description: "Fechamento lateral ventilado para galpões, quadras e áreas externas.",
  },
};

const produtosVeneziana = [
  {
    id: 'veneziana-compacta',
    nome: 'Veneziana em Policarbonato Compacto',
    slug: 'veneziana-compacta',
    descricao: 'Sistema de fechamento lateral com lâminas em policarbonato compacto. Alta resistência e durabilidade com ventilação controlada.',
    caracteristicas: [
      'Lâminas em policarbonato compacto de 4mm ou 6mm',
      'Ventilação natural controlada',
      'Alta resistência a impactos',
      'Proteção UV integrada - não amarela',
      'Transparente ou em cores',
      'Fácil manutenção e limpeza',
    ],
    aplicacoes: [
      'Fechamento lateral de galpões industriais',
      'Quadras poliesportivas',
      'Áreas de lazer comerciais',
      'Fachadas ventiladas',
    ],
    imagem: '/images/projetos/veneziana-compacta.jpg',
  },
  {
    id: 'veneziana-alveolar',
    nome: 'Veneziana em Policarbonato Alveolar',
    slug: 'veneziana-alveolar',
    descricao: 'Sistema de fechamento lateral com lâminas em policarbonato alveolar. Isolamento térmico superior mantendo ventilação.',
    caracteristicas: [
      'Lâminas em policarbonato alveolar de 6mm ou 10mm',
      'Isolamento térmico superior',
      'Ventilação natural com controle de temperatura',
      'Leveza e resistência',
      'Proteção UV integrada',
      'Cores disponíveis',
    ],
    aplicacoes: [
      'Galpões que precisam controle térmico',
      'Áreas comerciais',
      'Depósitos e armazéns',
      'Fachadas de edifícios',
    ],
    imagem: '/images/projetos/veneziana-alveolar.jpg',
  },
  {
    id: 'veneziana-metalica-policarbonato',
    nome: 'Veneziana Metálica com Policarbonato',
    slug: 'veneziana-metalica-policarbonato',
    descricao: 'Sistema híbrido com estrutura metálica e lâminas em policarbonato. Máxima resistência e controle de ventilação.',
    caracteristicas: [
      'Estrutura em alumínio ou aço galvanizado',
      'Lâminas em policarbonato compacto',
      'Abertura fixa ou regulável',
      'Máxima durabilidade',
      'Pintura eletrostática personalizada',
      'Ideal para grandes vãos',
    ],
    aplicacoes: [
      'Grandes galpões industriais',
      'Fábricas',
      'Centros de distribuição',
      'Áreas que exigem ventilação intensa',
    ],
    imagem: '/images/projetos/veneziana-metalica.jpg',
  },
];

export default function VenezianaPolcarbonato() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Veneziana em Policarbonato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fechamento lateral ventilado para galpões, quadras e áreas externas. 
            Ventilação controlada mantendo proteção contra intempéries.
          </p>
        </section>

        {/* O que é */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            O que é Veneziana em Policarbonato?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                A <strong>veneziana em policarbonato</strong> é um sistema de fechamento lateral 
                composto por lâminas horizontais que permitem <strong>ventilação natural controlada</strong> 
                enquanto protegem o ambiente de chuva, vento e insolação direta.
              </p>
              <p className="text-gray-700 mb-4">
                É amplamente utilizada para <strong>fechamento de galpões industriais, quadras poliesportivas, 
                áreas de lazer</strong> e qualquer ambiente que necessite ventilação constante 
                sem comprometer a proteção.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Principais Vantagens:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Ventilação natural:</strong> Circulação de ar constante</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Proteção contra chuva:</strong> Lâminas inclinadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Entrada de luz:</strong> Iluminação natural</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Durabilidade:</strong> Policarbonato não oxida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Baixa manutenção:</strong> Fácil limpeza</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section className="space-y-16 mb-16">
          {produtosVeneziana.map((produto) => (
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
                          <span className="text-green-600 mr-2">✓</span>
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
                          <span className="text-green-600 mr-2">•</span>
                          <span className="text-gray-700">{aplicacao}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Quando Usar */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Quando usar Veneziana em Policarbonato?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4 text-center">🏭</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Galpões Industriais</h3>
              <p className="text-gray-600 text-center">
                Fechamento lateral que permite ventilação constante, essencial para 
                ambientes industriais que precisam renovação de ar.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4 text-center">⚽</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Quadras Poliesportivas</h3>
              <p className="text-gray-600 text-center">
                Proteção contra chuva e vento sem perder a sensação de ambiente aberto. 
                Ideal para quadras cobertas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4 text-center">🏢</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Fachadas Ventiladas</h3>
              <p className="text-gray-600 text-center">
                Fechamento lateral de edifícios comerciais com ventilação natural 
                e entrada de luz controlada.
              </p>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Por que escolher Policarbonato ao invés de Alumínio?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                <span className="text-2xl mr-2">✓</span> Veneziana em Policarbonato
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Não oxida nem enferruja</li>
                <li>• Permite entrada de luz natural</li>
                <li>• Mais leve que alumínio</li>
                <li>• Proteção UV - não amarela</li>
                <li>• Fácil limpeza</li>
                <li>• Cores disponíveis</li>
              </ul>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
                <span className="text-2xl mr-2">○</span> Veneziana em Alumínio
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Pode oxidar com o tempo</li>
                <li>• Ambiente mais escuro</li>
                <li>• Mais pesada</li>
                <li>• Pintura pode descascar</li>
                <li>• Manutenção frequente</li>
                <li>• Custo de manutenção maior</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer saber mais sobre Veneziana em Policarbonato?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Entre em contato e solicite um orçamento personalizado
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition shadow-lg"
          >
            Solicitar Orçamento
          </Link>
        </section>
      </div>
    </main>
  );
}
