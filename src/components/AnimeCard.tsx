
import { Card } from "@/components/ui/card";
import { Anime } from "@/services/anime";
import { useNavigate } from "react-router-dom";

interface AnimeCardProps {
  anime: Anime;
  className?: string;
}

export function AnimeCard({ anime, className = "" }: AnimeCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      className={`relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
      onClick={() => navigate(`/anime/${anime.mal_id}`)}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-4 w-full">
          <h3 className="text-white font-semibold text-lg line-clamp-2">{anime.title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-anime-accent px-2 py-0.5 rounded-full text-white text-sm">
              {anime.score.toFixed(1)}
            </span>
            {anime.year && (
              <span className="text-white/80 text-sm">{anime.year}</span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
