import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Produtos | Cobertura Retrátil em Policarbonato | Cobersystem",
  description: "Conheça nossos produtos: cobertura retrátil em policarbonato compacto e alveolar, com automação via Alexa e sensor de chuva. Estruturas de alumínio personalizadas.",
  keywords: "cobertura retrátil policarbonato, cobertura abre e fecha, policarbonato compacto, policarbonato alveolar, automação Alexa, sensor chuva",
};

export default function Produtos() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Nossos Produtos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cobertura retrátil e fixa em policarbonato com automação inteligente. 
            Soluções completas para transformar seus espaços externos.
          </p>
        </section>

        {/* Categorias */}
        <section className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <Link href="/produtos/cobertura-retratil" className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-64 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🔄</div>
                  <h2 className="text-3xl font-bold">Cobertura Retrátil</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-4">
                  Sistema abre e fecha com automação via Alexa e sensor de chuva. 
                  Controle total do clima com abertura de 0 a 90 graus.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Policarbonato Compacto 2mm</li>
                  <li>✓ Policarbonato Alveolar</li>
                  <li>✓ Automação Inteligente</li>
                </ul>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Ver Produtos Retráteis →
                </span>
              </div>
            </div>
          </Link>

          <Link href="/produtos/cobertura-policarbonato" className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-64 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏠</div>
                  <h2 className="text-3xl font-bold">Cobertura em Policarbonato</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-4">
                  Proteção permanente com alta qualidade. Cobertura fixa em policarbonato 
                  compacto e alveolar para áreas que precisam de proteção constante.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Policarbonato Compacto</li>
                  <li>✓ Policarbonato Alveolar</li>
                  <li>✓ Proteção Permanente</li>
                </ul>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Ver Coberturas em Policarbonato →
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* Novos Produtos */}
        <section className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <Link href="/produtos/cobertura-termoacustica" className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-orange-600 to-orange-800 h-64 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🔇</div>
                  <h2 className="text-3xl font-bold">Cobertura Termoacústica</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-4">
                  Cobertura sanduíche com isolamento térmico e acústico superior. 
                  Ideal para conforto total em ambientes residenciais e comerciais.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Isolamento Térmico</li>
                  <li>✓ Isolamento Acústico</li>
                  <li>✓ Sistema Sanduíche</li>
                </ul>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Ver Coberturas Termoacústicas →
                </span>
              </div>
            </div>
          </Link>

          <Link href="/produtos/veneziana-policarbonato" className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-green-600 to-green-800 h-64 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🌬️</div>
                  <h2 className="text-3xl font-bold">Veneziana em Policarbonato</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-4">
                  Fechamento lateral ventilado para galpões, quadras e áreas externas. 
                  Permite ventilação controlada mantendo proteção.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Ventilação Controlada</li>
                  <li>✓ Fechamento Lateral</li>
                  <li>✓ Ideal para Galpões</li>
                </ul>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Ver Venezianas em Policarbonato →
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* Diferenciais */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Diferenciais da Cobersystem
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-xl font-semibold mb-2">Controle de Clima</h3>
              <p className="text-gray-600">
                Abertura de 0 a 90 graus para controle total da ventilação
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">Automação</h3>
              <p className="text-gray-600">
                Alexa, sensor de chuva e controle remoto integrados
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">Ventilação Natural</h3>
              <p className="text-gray-600">
                Cobertura sem perder a ventilação natural do ambiente
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer saber mais sobre nossos produtos?
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

