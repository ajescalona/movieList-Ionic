import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  readonly URL_API = 'http://localhost:3000'
  apiKey: string=  'c3f8781a0b183d020ab41421d293ba5c';

  constructor(private http: HttpClient) { } 

  getPopularMovie(): Observable<any>{
    return this.http.get(this.URL_API + '/tabs/home/popular')
  }

  searchMovies(searchStr:any): Observable<any> {
    return this.http.post(this.URL_API + '/tabs/home/search', searchStr)
  }

  getMovie(id: any): Observable<any>{
    return this.http.post(this.URL_API + '/tabs/home/movie', id)
  }

  getGenres(): Observable<any>{
    return this.http.get(this.URL_API + '/filter/genres')
  }

  getMoviesByGenre(genre: any): Observable<any>{
    return this.http.post(this.URL_API + '/filter/movieByGenres', genre)
  }

  addFavoriteMovie(movie: any ): Observable<any>{
    return this.http.post(this.URL_API + '/tabs/home/favoriteMovie', movie)
  }
  
  deleteFavoriteMovie(id: any ): Observable<any>{
    return this.http.delete(this.URL_API + '/tabs/home' +`/${id}` )
  }
}
