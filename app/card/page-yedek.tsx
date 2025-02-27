import PortfolioCard from "@/components/PortfolioCard";

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "Imperial Turkiz Resort Hotel",
      description:
        "With expertise in customer relationships. We upgrade your businesses with creativity.",
      image: "/turkiz-main.jpg",
      link: "/portfolyo/imperial-turkiz",
    },
    // Diğer portfolyo öğeleri buraya eklenebilir
  ];

  return (
    <div className="bg-white min-h-screen items-center justify-center">
      {" "}
      {/* Sayfa arka planını beyaz yap */}
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Portfolyo</h1>

        {/* Mevcut filtreleme ve arama bileşenleriniz burada kalacak */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
