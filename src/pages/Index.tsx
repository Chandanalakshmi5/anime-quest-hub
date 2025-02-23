
import { useQuery } from "@tanstack/react-query";
import { getTopAnime } from "@/services/anime";
import { AnimeGrid } from "@/components/AnimeGrid";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: topAnime, isLoading } = useQuery({
    queryKey: ["topAnime"],
    queryFn: getTopAnime,
  });

  const randomAnime = topAnime?.data[Math.floor(Math.random() * topAnime.data.length)];

  return (
    <div className="min-h-screen bg-gradient-to-b from-anime-secondary to-black text-white">
      <div className="container py-8 space-y-8 animate-fadeIn">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          className="max-w-md mx-auto"
        />

        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-[400px] w-full" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array(4).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-[300px]" />
              ))}
            </div>
          </div>
        ) : (
          <>
            {randomAnime && (
              <section className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src={randomAnime.images.jpg.large_image_url}
                  alt={randomAnime.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h1 className="text-4xl font-bold mb-4">{randomAnime.title}</h1>
                  <p className="text-lg text-gray-200 max-w-2xl line-clamp-2 mb-4">
                    {randomAnime.synopsis}
                  </p>
                  {randomAnime.trailer?.url && (
                    <a
                      href={randomAnime.trailer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-anime-accent hover:bg-anime-accent/80 text-white px-6 py-3 rounded-full transition-colors"
                    >
                      Watch Trailer
                    </a>
                  )}
                </div>
              </section>
            )}

            <section>
              <h2 className="text-2xl font-semibold mb-4">Trending Anime</h2>
              {topAnime && <AnimeGrid animes={topAnime.data.slice(0, 4)} horizontal />}
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">All Anime</h2>
              {topAnime && <AnimeGrid animes={topAnime.data} />}
            </section>
          </>
        )}
      </div>
    </div>
  );
}
