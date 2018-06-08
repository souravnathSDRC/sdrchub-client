import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  heroesUrl: any ="http://localhost:8080/api/saveData";
  constructor(private http:HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  /** POST: add a new hero to the server */
  addData (hero): Observable<Object> {
    return this.http.post<Object>(this.heroesUrl, hero)
  }

}
