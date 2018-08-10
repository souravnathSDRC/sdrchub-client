import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
* @author  Sourav Keshari Nath
* @version 1.0
* @since   2018-07-15 
*/
export class CommonServiceService {
  formtype:boolean=true
  moduleId:number
  platformId:number
  moduleName: any;
  platformName: any;
  constructor() { }
}
