import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
/**
* @author  Sourav Keshari Nath
* @version 1.0
* @since   2018-07-15 
*/
export class HeaderComponent implements OnInit {
  formtype:boolean=false
  showformtype: boolean;
  constructor(private commonService:CommonServiceService,private location: Location, private router: Router,private appService: AppService) {
    this.router.events.subscribe((res) => { 
    if(this.router.url != "/"){
        this.showformtype = true
      } else {
        this.showformtype = false
      }
    })
  }

  ngOnInit() {
  }
  doSomething(event){
    console.log(this.router.url);
    if(event){
      this.router.navigate(['view']);
    }else{
      this.router.navigate(['entry']);
    }
  }
  logout(){
    this.appService.logout()
  }
}
