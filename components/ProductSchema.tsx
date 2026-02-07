interface ProductSchemaProps {
  name: string;
  description: string;
  image?: string;
  price?: string;
  availability?: string;
}

export default function ProductSchema({ name, description, image, price, availability = "InStock" }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image ? `https://coberturapolicarbonato.com.br${image}` : undefined,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BRL",
      "availability": `https://schema.org/${availability}`,
      "price": price || "0",
    },
    "brand": {
      "@type": "Brand",
      "name": "Cobersystem"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Cobersystem"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

