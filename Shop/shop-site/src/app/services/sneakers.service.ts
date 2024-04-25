import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Sneakers } from '../models/sneakers';


@Injectable({
  providedIn: 'root'
})
export class SneakersService {
  private BASE_URL = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  getProducts(params?: any): Observable<Sneakers> {
    let queryParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        queryParams = queryParams.append(key, params[key]);
      });
    }
    return this.http.get<Sneakers>(`${this.BASE_URL}product/`, { params: queryParams })
      .pipe(catchError(this.handleError));
  }

  // Handle errors
  handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side Error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error('Error occurred:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }


getProductById(id: number): Observable<Sneakers> {
  return this.http.get<Sneakers>(`${this.BASE_URL}product/${id}`)
    .pipe(catchError(this.handleError));
}
  
postProduct(sneakers: Sneakers): Observable<Sneakers> {
  return this.http.post<Sneakers>(`${this.BASE_URL}product-post/`, sneakers, )
  .pipe(catchError(this.handleError));
  
}

deleteProduct(id: number): Observable<any> {
  return this.http.delete<Sneakers>(`${this.BASE_URL}product/${id}`).pipe(catchError(this.handleError));
}

updateProduct(id: number, sneakers: Sneakers): Observable<Sneakers> {
  return this.http.put<Sneakers>(`${this.BASE_URL}product/${id}`, JSON.stringify(sneakers), {
    headers: { 'Content-Type': 'application/json' }
  }).pipe(catchError(this.handleError));
}


 
}