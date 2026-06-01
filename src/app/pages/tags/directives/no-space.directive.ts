import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[noInputSpace]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NoSpaceDirective,
    multi: true
  }]
})
export class NoSpaceDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value && /\s/.test(control.value)) {
      return { noSpaces: true };
    }
    return null;
  }
}
