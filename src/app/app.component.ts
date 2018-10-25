import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

const validatorfn = (_control: AbstractControl) => {
    return null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isCustomValidatorShown = true;
  formControlName1 = 'formControlName1';
  formControlName2 = 'formControlName2';
  formGroup: FormGroup;
  formControl1: AbstractControl;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
      this.createFormGroup();
  }

  toggleValidator() {
    this.isCustomValidatorShown = !this.isCustomValidatorShown;
  }

  createFormGroup() {
    this.formGroup = this.formBuilder.group({
        [this.formControlName1]: [null, validatorfn],
        [this.formControlName2]: ['']
    });

    this.formControl1 = this.formGroup.get(this.formControlName1);
  }
}
