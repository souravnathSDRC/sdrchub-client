import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl} from '@angular/forms';
import { DataServiceService } from '../services/data-service.service';
import { RequireValidator } from '../validators/require-validator/require-validator.component';
import { Entryforms } from '../interfaces/entryforms';
import { CommonServiceService } from '../services/common-service.service';
declare var $: any;
@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
/**
* @author  Sourav Keshari Nath
* @version 1.0
* @since   2018-07-15 
*/
export class DataEntryComponent implements OnInit {
  dataEntryForm: FormGroup;
  moduleName:string
  platformName:string
  constructor(private fb: FormBuilder, 
    private dataServiceService:DataServiceService,
    private commonService:CommonServiceService) {
    this.moduleName = this.commonService.moduleName
    this.platformName = this.commonService.platformName
    this.createForm();
  }
  async createForm() {
    this.dataEntryForm = this.fb.group({
      subject: new FormControl('',[ Validators.required, Validators.minLength(50)]),
      comment:  new FormControl('',[Validators.required , Validators.minLength(50)]),
      referenceLinks: ['', Validators.required ],
      videoLinks: ['', Validators.required ],
      tags: new FormControl('',[RequireValidator(true)])
    });
  }
  
  passwordMatchValidator(g: FormGroup) {
    return g.root.get('tags').value == "" ? null : {'required': true};
  }
  ngOnInit(): void {
    
  }
  save(){
    if (this.dataEntryForm.valid) {
       let formmodel:Entryforms = this.dataEntryForm.value
       formmodel.moduleId = this.commonService.moduleId
       formmodel.platformId = this.commonService.platformId

       this.dataServiceService.addData(formmodel)
       .subscribe(data => {
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
