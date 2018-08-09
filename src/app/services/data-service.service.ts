import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
/**
* @author  Sourav Keshari Nath
* @version 1.0
* @since   2018-07-15 
*/
export class DataServiceService {
  url: any ="http://localhost:8080/api/";
  constructor(private http:HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  /** POST: add a new hero to the server */
  addData (data): Observable<Object> {
    return this.http.post<Object>(this.url+"saveData", data)
  }
  /** GET: get all data from the server */
  getModulesPlatformsData (): Observable<Object> {
    return this.http.get<Object>(this.url+"getModulesPlatforms")
  }
  getViewData(moduleId,platformId): Observable<Object> {
    return this.http.get<Object>(this.url+"viewData?moduleId="+ moduleId +"&platformId="+ platformId)
  }
}
