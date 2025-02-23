
import { AnimeCard } from "./AnimeCard";
import { Anime } from "@/services/anime";
import { ScrollArea } from "./ui/scroll-area";

interface AnimeGridProps {
  animes: Anime[];
  horizontal?: boolean;
  className?: string;
}

export function AnimeGrid({ animes, horizontal, className = "" }: AnimeGridProps) {
  if (horizontal) {
    return (
      <ScrollArea className="w-full">
        <div className={`flex gap-4 pb-4 ${className}`}>
          {animes.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              anime={anime}
              className="w-[200px] flex-shrink-0"
            />
          ))}
        </div>
      </ScrollArea>
    );
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
      {animes.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}
