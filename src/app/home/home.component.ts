import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { CommonServiceService } from '../services/common-service.service';
import { Router } from '@angular/router';
/**
* @author  Sourav Keshari Nath
* @version 1.0
* @since   2018-07-15 
*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modulesPlatformsData: Object;
  subject:boolean = false
  constructor(private dataService:DataServiceService,
    private commonService:CommonServiceService,
    private router:Router){
    
  }
  clickonModule(moduleId){
    this.commonService.moduleId = moduleId
    this.subject = true
  }
  clickonPlatform(platformId){
    this.commonService.platformId = platformId
    this.router.navigate(['data']);
  }
  ngOnInit() {
    this.getModulesPlatformsData()
  }
  getModulesPlatformsData(){
    this.dataService.getModulesPlatformsData()
    .subscribe(data => {
     this.modulesPlatformsData = data;
    });
  }
}
