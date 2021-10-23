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

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

//   Get all objects
  GetTrips() {
    return this.httpClient.get(`${this.REST_API}/trip`);
  }
  
  GetTripMax() {
      return this.httpClient.get(`${this.REST_API}/trip-max`)
  }

  GetHotelMax() {
    return this.httpClient.get(`${this.REST_API}/hotel-max`); 
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

  GetHotel(id:any): Observable<any> { 
    let API_URL = `${this.REST_API}/hotel/${id}`;
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
    console.log(data);
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  updateHotel(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/hotel/${id}`;
    console.log(data);
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

//  // Delete
//  deleteBook(id:any): Observable<any> {
//    let API_URL = `${this.REST_API}/delete-book/${id}`;
//    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
//        catchError(this.handleError)
//      )
//  }


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
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}