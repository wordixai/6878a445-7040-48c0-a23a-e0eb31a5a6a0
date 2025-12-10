import { useState } from "react";
import { ArtworkCard } from "../components/ArtworkCard";
import { ArtworkModal } from "../components/ArtworkModal";

interface Artwork {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  year: string;
  description: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "梦境之旅",
    artist: "张艺",
    imageUrl: "https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?w=800&q=80",
    year: "2023",
    description: "这幅作品探索了意识与潜意识之间的边界，通过抽象的色彩和流动的线条，邀请观者进入一个超现实的梦境世界。",
  },
  {
    id: 2,
    title: "静谧时光",
    artist: "李明",
    imageUrl: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80",
    year: "2023",
    description: "以极简主义手法捕捉日常生活中被忽视的美好瞬间，探讨现代都市人对宁静与平和的渴望。",
  },
  {
    id: 3,
    title: "色彩交响",
    artist: "王芳",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    year: "2024",
    description: "大胆运用对比色彩和几何形状，创造出充满活力和动感的视觉体验，象征着生命的多样性和复杂性。",
  },
  {
    id: 4,
    title: "山水意境",
    artist: "陈浩",
    imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    year: "2023",
    description: "融合传统中国山水画的写意精神与当代艺术语言，展现东方美学在现代语境下的新诠释。",
  },
  {
    id: 5,
    title: "都市印象",
    artist: "赵丽",
    imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80",
    year: "2024",
    description: "通过碎片化的视角记录现代城市的快节奏生活，反思技术进步与人性温度之间的平衡。",
  },
  {
    id: 6,
    title: "自然之声",
    artist: "刘洋",
    imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&q=80",
    year: "2023",
    description: "用柔和的色调和有机的形态表达对自然的敬畏，呼吁人们重新建立与自然世界的连接。",
  },
];

const Index = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="px-6 pt-32 pb-20 md:pt-40 md:pb-28 max-w-7xl mx-auto">
        <div className="max-w-2xl animate-fade-in">
          <div className="mb-6 text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
            Contemporary Art Collection
          </div>
          <h1 className="text-6xl md:text-8xl font-light text-foreground mb-8 tracking-tight leading-[0.95]">
            艺术画廊
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-xl">
            探索当代艺术的精粹
          </p>
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              title={artwork.title}
              artist={artwork.artist}
              imageUrl={artwork.imageUrl}
              year={artwork.year}
              onClick={() => setSelectedArtwork(artwork)}
            />
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedArtwork && (
        <ArtworkModal
          isOpen={!!selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          title={selectedArtwork.title}
          artist={selectedArtwork.artist}
          imageUrl={selectedArtwork.imageUrl}
          year={selectedArtwork.year}
          description={selectedArtwork.description}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 艺术画廊 · 探索艺术之美
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
