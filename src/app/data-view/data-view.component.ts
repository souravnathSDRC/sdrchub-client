import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})

/**
* @author  Sourav Keshari Nath
* @version 1.0
* @since   2018-07-15 
*/
export class DataViewComponent implements OnInit {
  viewDataList: Object;
  moduleName:string
  platformName:string
  constructor(private dataService:DataServiceService,
  private commonService:CommonServiceService) {
    this.moduleName = this.commonService.moduleName
    this.platformName = this.commonService.platformName
  }

  ngOnInit() {
    this.getViewData()
  }
  getViewData(){
    this.dataService.getViewData(this.commonService.moduleId,this.commonService.platformId)
    .subscribe(data => {
     this.viewDataList = data;
    });
  }

}
