import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

    this.crearForm();
  }

  ngOnInit(): void {

  }

  crearForm() {

    this.form = this.fb.group({
      email: [ '', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$') ]],
      password: [ '', [ Validators.required, Validators.minLength(8) ] ],
      nombre: [ '', [ Validators.required, Validators.minLength(6) ] ],
      apellidos: [ '', [Validators.required, Validators.minLength(6) ] ],
      fecha: [ '', [ Validators.required ] ],
      genero: [ 'Género', [ Validators.required ] ]
    }, {
      validators: this.selectValidator()
    });
  }

  selectValidator() {
    return ( formGroup: FormGroup ) => {
        const select = formGroup.controls['genero']
        select.value === 'Género' ? select.setErrors({ error: true }) : null;
    }
  }

  invalid( campo: string) {

    return this.form.get(campo)!.invalid  && this.form.get(campo)!.touched;
  }

  register() {
    this.form.get('email')!.markAsTouched()
    this.form.get('password')!.markAsTouched()
    this.form.get('nombre')!.markAsTouched()
    this.form.get('apellidos')!.markAsTouched()
    this.form.get('fecha')!.markAsTouched()
    this.form.get('genero')!.markAsTouched()
  }

}
