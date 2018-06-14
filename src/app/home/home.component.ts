import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modulesPlatformsData: Object;
  subject:boolean = false
  constructor(private dataServiceService:DataServiceService){
    
  }
  
  clickonSubject(){
    this.subject = true
  }

  ngOnInit() {
    this.dataServiceService.getModulesPlatformsData()
    .subscribe(data => {
     this.modulesPlatformsData = data;
    });
  }

}
