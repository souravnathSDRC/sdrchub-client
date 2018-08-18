import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { CommonServiceService } from '../services/common-service.service';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ModulePlatformModel } from '../models/module-platform.model';
import { EntryDetails } from '../models/entry-details';
import { AppService } from '../app.service';
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
  modulesPlatformsData: ModulePlatformModel[];
  module:ModulePlatformModel = {id:0, typeLevelId: 0, name: "", typeLevelName: "", typeOrder: 0}
  modules: ModulePlatformModel[];
  platforms: ModulePlatformModel[];
  platform: ModulePlatformModel;
  appService: AppService;
  viewData: EntryDetails[];
  subject:boolean = false
  constructor(private dataService:DataServiceService,
    private commonService:CommonServiceService,
    private router:Router,
    private app: AppService){
    
  }
  clickonModule(module){
    this.module = module;
    this.commonService.moduleId = module.id
    this.commonService.moduleName = module.name
    this.subject = true
  }
  clickonPlatform(platform){
    this.commonService.platformId = platform.id
    this.commonService.platformName = platform.name
    this.router.navigate(['entry']);
  }
  ngOnInit() {
    this.getModulesPlatformsData()
  }
  getModulesPlatformsData(){
    this.dataService.getModulesPlatformsData()
    .subscribe(data => {
     this.modulesPlatformsData = data;
     this.modules = data.filter((d) => {
       return d.typeLevelId == 1;
     });
     this.platforms = data.filter((d) => {
      return d.typeLevelId == 2;
    });
    console.log(this.modules);
    
    });
  }
}
