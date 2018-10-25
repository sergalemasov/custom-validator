import {Component, forwardRef, Input, OnDestroy} from '@angular/core';
import {
    Validator,
    ControlValueAccessor,
    ValidationErrors,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    AbstractControl,
    FormControl
} from '@angular/forms';

@Component({
    template: '',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: CustomValidatorComponent,
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: CustomValidatorComponent,
            multi: true
        }
    ],
    selector: 'custom-validator'
})
export class CustomValidatorComponent implements Validator, ControlValueAccessor, OnDestroy{
    @Input() formControl: FormControl;

    writeValue() {

    }

    ngOnDestroy() {
        this.formControl.clearValidators();
    }

    validate(_control: AbstractControl): ValidationErrors | null {
        console.log('validate');
        return null;
    }

    registerOnChange() {}

    registerOnTouched() {}
}