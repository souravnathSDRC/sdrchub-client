import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  heroesUrl: any ="http://localhost:8080/api/";
  constructor(private http:HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  /** POST: add a new hero to the server */
  addData (data): Observable<Object> {
    return this.http.post<Object>(this.heroesUrl+"saveData", data)
  }
  /** GET: get all data from the server */
  getModulesPlatformsData (): Observable<Object> {
    return this.http.get<Object>(this.heroesUrl+"getModulesPlatforms")
  }
}
