import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // Node/Express API
  
  REST_API: string = 'https://trip-to-plan.herokuapp.com/api';
//  REST_API: string = 'http://localhost:8000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

//  Read
  getTrips() {
    return this.httpClient.get(`${this.REST_API}/trip`);
  }

  getSomeTrips(name:any): Observable<any> {
    let API_URL = `${this.REST_API}/trips/${name}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  getHotel(name:any): Observable<any> { 
    let API_URL = `${this.REST_API}/hotel/${name}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  getComparisons() {
    return this.httpClient.get(`${this.REST_API}/comparison`);
  }

  getSomeComparisons(name:any): Observable<any> {
      let API_URL = `${this.REST_API}/comparisons/${name}`;
      return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )

  }

  // Create
  createTrip(name:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/trip/${name}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  createComparison(name:any, data: any): Observable<any> {
      let API_URL = `${this.REST_API}/comparisons/${name}`;
      return this.httpClient.put(API_URL, data, { headers: this.httpHeaders}).pipe(
          catchError(this.handleError)
      );
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}