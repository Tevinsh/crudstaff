import { Injectable } from '@angular/core';
import { Users } from './interfaceUsers';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  endpoint: string = 'http://localhost:4000/Users/';
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    let api = `${this.endpoint}`;
    return this.http.get<Users>(api).pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(msg);
  }
}
