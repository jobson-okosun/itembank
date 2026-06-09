import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appPhoneInput]'
})
export class PhoneInputDirective {
    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        const inputElement = event.target as HTMLInputElement;

        const systemKeys = ['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
        if (systemKeys.includes(event.key)) {
            return;
        }

        if (event.key === '+') {
            if (inputElement.selectionStart !== 0 || inputElement.value.includes('+')) {
                event.preventDefault();
            }
            return;
        }

        if (!/^[0-9]$/.test(event.key)) {
            event.preventDefault();
        }
    }

    @HostListener('paste', ['$event'])
    onPaste(event: ClipboardEvent) {
        const pastedData = event.clipboardData?.getData('text') || '';
        if (!/^\+?[0-9]*$/.test(pastedData)) {
            event.preventDefault();
        }
    }
}
