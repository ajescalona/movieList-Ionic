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
    '&query='+searchStr+'&language=en-US&primary_release_date.gte=2017-04-15&primary_release_date.lte=2017-12-25&include_adult=false&include_video=false&page=1'

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
  
/*   addProduct (product): Observable<Product> {
    return this.http.post<Product>(apiUrl, product, httpOptions).pipe(
      tap((product: Product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }
  
  updateProduct (id, product): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  
  deleteProduct (id): Observable<Product> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  } */
  
}
