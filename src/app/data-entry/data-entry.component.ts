import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl} from '@angular/forms';
import { DataServiceService } from '../services/data-service.service';
declare var $: any;
@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit {
  dataEntryForm: FormGroup;
  
  constructor(private fb: FormBuilder, private dataServiceService:DataServiceService) {
    this.createForm();
  }
  async createForm() {
    this.dataEntryForm = this.fb.group({
      subject: new FormControl('',[ Validators.required, Validators.minLength(50)]),
      comment:  new FormControl('',[Validators.required , Validators.minLength(50)]),
      referenceLinks: ['', Validators.required ],
      videoLinks: ['', Validators.required ],
      tags: ['', Validators.required ],
    });
  }
  ngOnInit(): void {
    
  }
  save(){
    if (this.dataEntryForm.valid) {
       this.dataServiceService.addData(this.dataEntryForm.value)
       .subscribe(hero => {
        $(".toastsuccess").fadeIn('slow');
        setTimeout(function(){
          $(".toastsuccess").fadeOut('slow');
        }, 4000)
       });
    }
  }
  cancel(){
    this.dataEntryForm.setValue({
      subject: '',
      comment: '',
      referenceLinks:'',
      videoLinks:'',
      tags:''
    });
  }
}
