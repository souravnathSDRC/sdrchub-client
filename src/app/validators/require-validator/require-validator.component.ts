import { AbstractControl, ValidatorFn } from '@angular/forms';


/** A hero's name can't match the given regular expression */
export function RequireValidator(status: boolean): ValidatorFn  {
  return (control: AbstractControl)=>{
    if (status && control.value=="") {
      return {'required': true};
    }
    
  }
    
}

