import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Contact} from './models/contact.model'
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  createMessageUrl: string = 'http://localhost:8081/api/v1/contact';
  getAppsUrl: string = 'http://localhost:8081/api/v1/apps';
  getTweetsUrl: string = 'http://localhost:8081/api/v1/socials';

  constructor(private http: HttpClient) {

  }

  response: Observable<HttpResponse<any>>;

  sendMessage(messageContent: Contact): Observable<HttpResponse<any>> {
    const headers = {'content-type': 'application/json'}
    const body=JSON.stringify(messageContent);
    console.log(body);
    
    return this.http.post<any>(this.createMessageUrl, body,{observe: 'response', headers}).pipe(
      catchError(this.handleError)
    );;
  }

  getApps(){
    return this.http.get<any>(this.getAppsUrl, {responseType: "json", observe: "body"}).pipe(
      catchError(this.handleError)
    );;
  }

  getTweets(){
    return this.http.get<any>(this.getTweetsUrl, {responseType: "json", observe: "body"}).pipe(
      catchError(this.handleError)
    );;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}