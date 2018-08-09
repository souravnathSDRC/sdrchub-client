import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  formtype:boolean=true
  constructor() { }

  ngOnInit() {
  }
  doSomething(evnt){
   alert(evnt)
  }
}
