import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Http, Headers} from '@angular/http';
import { ModulePlatformModel } from '../models/module-platform.model';
import { EntryDetails } from '../models/entry-details';



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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('laxman' + ':' + 'sdrc@123#!')
    })
  };
  constructor(private http:HttpClient) {}

  /** POST: add a new data to the server */
  addData (data): Observable<Object> {
    return this.http.post<Object>("/api/saveData", data,this.httpOptions)
  }
  /** GET: get all data from the server */
  getModulesPlatformsData (): Observable<ModulePlatformModel[]> {
    return this.http.get<ModulePlatformModel[]>("/api/getModulesPlatforms")
  }
  getViewData(moduleId,platformId): Observable<EntryDetails[]> {
    return this.http.get<EntryDetails[]>(this.url+"viewData?moduleId="+ moduleId +"&platformId="+ platformId)
  }
}
