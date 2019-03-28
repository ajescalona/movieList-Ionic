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
  
  apiKey: string=  'c3f8781a0b183d020ab41421d293ba5c';

  constructor(private http: HttpClient) { } 

  getPopularMovie(): Observable<any> {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key='+this.apiKey+
    '&language=en-US&sort_by=popularity.desc'
    
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched popular movies`))
    );
  }

  searchMovies(searchStr:string){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key='+this.apiKey+
    '&query='+searchStr+'&language=en-US&include_adult=false&include_video=false&page=1'

    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`search movies`))
    );
  }

  getMovie(id: any){
    const url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.apiKey+'&language=en-US'

    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`movies details`))
    );
  }

  getGenres(){
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key='+this.apiKey+
    '&language=en-US'

    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`get genres`))
    );
  }

  getMoviesByGenre(genreId, page){
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key='+this.apiKey+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+page+'&with_genres='+genreId

    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`get movies by genres`))
    );

  }
  
  
}
