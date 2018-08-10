import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
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
  constructor(private commonService:CommonServiceService,private location: Location, private router: Router) {
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
      this.router.navigate(['data-view']);
    }else{
      this.router.navigate(['data']);
    }
  }
}
