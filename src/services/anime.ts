
import { toast } from "@/hooks/use-toast";

export interface Anime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
  };
  synopsis: string;
  score: number;
  genres: Array<{ name: string }>;
  year: number;
}

export interface AnimeResponse {
  data: Anime[];
  pagination: {
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
    };
  };
}

const BASE_URL = "https://api.jikan.moe/v4";

export async function getTopAnime(): Promise<AnimeResponse> {
  try {
    const response = await fetch(`${BASE_URL}/top/anime?type=movie`);
    if (!response.ok) throw new Error("Failed to fetch top anime");
    return await response.json();
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to fetch anime data. Please try again later.",
      variant: "destructive",
    });
    throw error;
  }
}

export async function searchAnime(query: string): Promise<AnimeResponse> {
  try {
    const response = await fetch(`${BASE_URL}/anime?q=${query}&sfw`);
    if (!response.ok) throw new Error("Failed to search anime");
    return await response.json();
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to search anime. Please try again later.",
      variant: "destructive",
    });
    throw error;
  }
}
