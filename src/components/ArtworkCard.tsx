interface ArtworkCardProps {
  title: string;
  artist: string;
  imageUrl: string;
  year: string;
  onClick: () => void;
}

export const ArtworkCard = ({ title, artist, imageUrl, year, onClick }: ArtworkCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer animate-fade-in"
    >
      <div className="relative overflow-hidden rounded-lg bg-card transition-all duration-300 ease-out hover:shadow-[var(--shadow-card-hover)] shadow-[var(--shadow-card)]">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-foreground mb-1 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{artist}</p>
          <p className="text-xs text-muted-foreground mt-1">{year}</p>
        </div>
      </div>
    </div>
  );
};
