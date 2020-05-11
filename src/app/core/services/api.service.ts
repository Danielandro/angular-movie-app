import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, tap } from "rxjs/operators";

export interface Trending {
  page: number;
  results: (Movie | TvShow)[];
  totalPages: number;
  totalResults: number;
}

export interface Movie {
  id: number;
  video: boolean;
  voteCount: number;
  voteAverage: number;
  title: string;
  releaseDate: Date;
  originalLanguage: string;
  originalTitle: string;
  genreIDS: number[];
  backdropPath: string | null;
  adult: boolean;
  overview: string;
  posterPath: string | null;
  popularity: number;
  mediaType: string;
}

export interface TvShow {
  backdropPath: string;
  firstAirDate: Date;
  genreIDS: number[];
  id: number;
  name: string;
  originCountry: string[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  posterPath: string;
  voteAverage: number;
  voteCount: number;
  popularity: number;
  mediaType: string;
}

export interface APIConfig {
  images: Images;
  changeKeys: string[];
}

export interface Images {
  baseURL: string;
  secureBaseURL: string;
  backdropSizes: string[];
  logoSizes: string[];
  posterSizes: string[];
  profileSizes: string[];
  stillSizes: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // public readonly trendingAll$: Observable<TrendingResponse[]>;
  // private readonly trendingAll: Subject<TrendingResponse[]> = new Subject<TrendingResponse[]>();
  private readonly bearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTVkMmI5MDQ3OTYxNjMwZWNiZDc4Zjc0MjgzYzhiZiIsInN1YiI6IjVlYWJkZjk2YzhmM2M0MDAyNWE5ZTMyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K6KrroE3subUet3-3gRGuEVUc6fEJ4Mx103YA3BJ0I0";
  private readonly baseUrl = "https://api.themoviedb.org/3";
  private readonly httpOptions = {
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.bearerToken}`
    })
  };


  constructor(private http: HttpClient) {
    // this.trendingAll$ = this.trendingAll.asObservable();
    // this.getTrending();
  }

  public getTrending(): Observable<Trending> {
    return this.http.get<Trending>(`${this.baseUrl}/trending/movie/week`, this.httpOptions)
      .pipe(
        tap(res => console.log("TRENDING: ", res.results))
      );
  }
}
