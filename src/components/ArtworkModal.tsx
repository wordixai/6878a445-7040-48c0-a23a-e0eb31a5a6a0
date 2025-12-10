import { X } from "lucide-react";
import { useEffect } from "react";

interface ArtworkModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  artist: string;
  imageUrl: string;
  year: string;
  description: string;
}

export const ArtworkModal = ({
  isOpen,
  onClose,
  title,
  artist,
  imageUrl,
  year,
  description,
}: ArtworkModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-scale-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full mx-4 bg-card rounded-2xl shadow-[var(--shadow-card-hover)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-[3/4] md:aspect-auto">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {title}
                </h2>
                <p className="text-lg text-muted-foreground">{artist}</p>
                <p className="text-sm text-muted-foreground mt-1">{year}</p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-foreground/80 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
