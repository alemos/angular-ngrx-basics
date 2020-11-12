export interface ITopRatedMedia {
  page: number;
  results: Array<any>;
  total_pages: number;
  totals_results: number;
}

export interface IMediaItem {
  adult?: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
  name?: string;
  origin_country?: [string];
  original_name?: string;
}
