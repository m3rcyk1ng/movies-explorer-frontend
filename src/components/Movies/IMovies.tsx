export interface IMovie {
  country: string;
  director: string;
  duration: number;
  year: string;
  description: string;
  image: string;
  trailer: string;
  thumbnail: string;
  owner?: string;
  movieId: number;
  nameRU: string;
  nameEN: string;
  _id?: string;
}

export interface IMovieSearch {
  arrayForSearch: any[];
}