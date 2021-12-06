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

//   Get all objects
  GetTrips() {
    return this.httpClient.get(`${this.REST_API}/trip`);
  }

  // Get single object
  GetTrip(id:any): Observable<any> { 
    let API_URL = `${this.REST_API}/trip/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  GetSomeTrips(name:any): Observable<any> {
    let API_URL = `${this.REST_API}/trips/${name}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  GetHotel(id:any): Observable<any> { 
    let API_URL = `${this.REST_API}/hotel/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  GetComparisons() {
    return this.httpClient.get(`${this.REST_API}/comparison`);
  }

  GetSomeComparisons(id:any): Observable<any> {
      let API_URL = `${this.REST_API}/comparisons/${id}`;
      return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )

  }

  // Update
  updateTrip(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/trip/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  updateComparison(id:any, data: any): Observable<any> {
      let API_URL = `${this.REST_API}/comparisons/${id}`;
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