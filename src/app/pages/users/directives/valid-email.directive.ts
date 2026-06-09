import { Directive, HostBinding, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[appEmailValidate]'
})
export class EmailValidateDirective {

    private emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // @HostBinding('class.is-invalid') isInvalid = false;

    constructor(private ngControl: NgControl) { }

    @HostListener('input', ['$event.target.value'])
    onInput(value: string) {
        if (!value) {
            // this.isInvalid = false;
            return;
        }

        const isValid = this.emailRegex.test(value);

        // this.isInvalid = !isValid;

        if (this.ngControl && this.ngControl.control) {
            if (!isValid) {
                this.ngControl.control.setErrors({ invalidEmailFormat: true });
            } else {
                const errors = this.ngControl.control.errors;
                if (errors) {
                    delete errors['invalidEmailFormat'];
                    this.ngControl.control.setErrors(Object.keys(errors).length ? errors : null);
                }
            }
        }
    }
}
