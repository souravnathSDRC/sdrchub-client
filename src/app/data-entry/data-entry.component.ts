import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit {
  dataEntryForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  async createForm() {
    this.dataEntryForm = this.fb.group({
      subject: ['', Validators.required ],
      comment:  new FormControl('',[Validators.required , Validators.minLength(100)]),
      referenceLinks: ['', Validators.required ],
      videoLinks: ['', Validators.required ],
      tags: ['', Validators.required ],
    });
  }
  ngOnInit(): void {
    
  }
  save(){
    if (this.dataEntryForm.valid) {
       console.log(this.dataEntryForm.value);
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
