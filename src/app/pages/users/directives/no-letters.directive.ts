
import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[noLetters]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: noLettersDirective,
      multi: true
    }
  ]
})

export class noLettersDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value && /[a-zA-Z]/.test(control.value)) {
      return { lettersNotAllowed: true };
    }
    return null;
  }
}

