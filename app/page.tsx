import Link from 'next/link';
import type { Metadata } from 'next';
import OptimizedImage from '@/components/OptimizedImage';
import CoberturaAnimation from '@/components/CoberturaAnimation';

export const metadata: Metadata = {
  title: "Cobertura em Policarbonato Retrátil | Abre e Fecha com Automação | Cobersystem",
  description: "Cobertura retrátil em policarbonato com sistema abre e fecha. Automação via Alexa e sensor de chuva. Controle total do clima com abertura de 0 a 90 graus. Estruturas de alumínio personalizadas.",
  keywords: "cobertura retrátil, cobertura abre e fecha, cobertura em policarbonato, cobertura automática, sensor de chuva, automação residencial, Alexa",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 relative overflow-hidden">
        {/* Animação de cobertura no fundo */}
        <div className="absolute inset-0 opacity-20">
          <CoberturaAnimation />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  Cobertura em Policarbonato Retrátil
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Sistema abre e fecha com automação via Alexa e sensor de chuva
                </p>
                <p className="text-lg mb-10 text-gray-300">
                  Controle total do clima com abertura de 0 a 90 graus. Sem perder ventilação, 
                  com proteção completa contra chuva e sol.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contato" 
                    className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C9A030] transition shadow-lg text-center"
                  >
                    Solicitar Orçamento Grátis
                  </Link>
                  <Link 
                    href="/produtos" 
                    className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#D4AF37] hover:text-black transition text-center"
                  >
                    Ver Produtos
                  </Link>
                </div>
              </div>
              <div className="relative">
                <CoberturaAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Nossos Projetos
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <OptimizedImage
                src="/images/blog/cobertura-abre-fecha.jpg"
                alt="Cobertura Retrátil em Área Gourmet e Varanda"
                width={1200}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Área Gourmet e Varanda</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <OptimizedImage
                src="/images/projetos/cobertura-retratil-aluminio.jpg"
                alt="Cobertura Retrátil em Alumínio"
                width={1200}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Cobertura em Alumínio</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <OptimizedImage
                src="/images/blog/cobertura-abre-fecha.jpg"
                alt="Cobertura Retrátil que Abre e Fecha em Apartamento"
                width={1200}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Abre e Fecha - Apartamento</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <OptimizedImage
                src="/images/projetos/abre-fecha-alveolar-02.jpg"
                alt="Estrutura em Alumínio para Projeto Personalizado"
                width={1200}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Estrutura em Alumínio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Por que escolher a Cobersystem?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-2xl font-semibold mb-4">Controle Total do Clima</h3>
              <p className="text-gray-600">
                Abertura de 0 a 90 graus permite controlar perfeitamente a ventilação. 
                Abra nos dias quentes e feche quando chover ou esfriar.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold mb-4">Automação Inteligente</h3>
              <p className="text-gray-600">
                Controle via Alexa, controle remoto ou sensor de chuva automático. 
                Sua cobertura fecha sozinha quando detecta chuva!
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-semibold mb-4">Sem Perder Ventilação</h3>
              <p className="text-gray-600">
                Única cobertura que permite cobrir sua casa sem perder a ventilação natural. 
                Funciona como uma persiana horizontal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section com Imagens */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Nossos Produtos
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Cobertura retrátil e fixa em policarbonato para todos os tipos de projeto
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/produtos/cobertura-retratil/policarbonato-compacto-2mm" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/projetos/policarbonato-compacto-2mm-produto.jpg"
                    alt="Cobertura Retrátil em Policarbonato Compacto 2mm - Transparente e Colorido para Máxima Luminosidade"
                    title="Cobertura Retrátil Policarbonato Compacto 2mm - Cobersystem"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-[#D4AF37] transition">
                    Cobertura Retrátil
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Policarbonato Compacto 2mm - Totalmente transparente ou colorido. 
                    Ideal para máxima luminosidade.
                  </p>
                  <span className="text-[#D4AF37] font-semibold group-hover:underline">
                    Ver detalhes →
                  </span>
                </div>
              </div>
            </Link>
            
            <Link href="/produtos/cobertura-policarbonato" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/projetos/policarbonato-alveolar-produto.jpg"
                    alt="Cobertura em Policarbonato Fixa - Alveolar e Compacto para Garagens e Áreas"
                    title="Cobertura Policarbonato Fixa - Alta Resistência - Cobersystem"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-[#D4AF37] transition">
                    Cobertura Policarbonato
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Cobertura fixa em policarbonato alveolar ou compacto. 
                    Ideal para garagens, áreas e proteção permanente.
                  </p>
                  <span className="text-[#D4AF37] font-semibold group-hover:underline">
                    Ver detalhes →
                  </span>
                </div>
              </div>
            </Link>
            
            <Link href="/produtos/cobertura-retratil/automacao-inteligente" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/blog/cobertura-retratil-area-gourmet.jpg"
                    alt="Automação Inteligente para Cobertura Retrátil - Controle via Alexa, Sensor de Chuva Automático e Controle Remoto"
                    title="Automação Inteligente Cobertura Retrátil - Alexa e Sensor de Chuva - Cobersystem"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-[#D4AF37] transition">
                    Automação Inteligente
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Controle via Alexa, sensor de chuva automático e controle remoto. 
                    Tecnologia de ponta.
                  </p>
                  <span className="text-[#D4AF37] font-semibold group-hover:underline">
                    Ver detalhes →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para transformar seu espaço?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Solicite um orçamento gratuito e sem compromisso
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C9A030] transition shadow-lg"
          >
            Solicitar Orçamento Agora
          </Link>
        </div>
      </section>
    </main>
  );
}
