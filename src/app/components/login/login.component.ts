import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  width: number = 0;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

    this.crearForm();
  }

  ngOnInit(): void {
    this.width = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.width = event.target.innerWidth;
	}

  crearForm() {

    this.form = this.fb.group({
      email: [ '', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$') ]],
      password: [ '', [Validators.required, Validators.minLength(8) ] ]
    });
  }

  invalid( campo: string) {

    return this.form.get(campo)!.invalid  && this.form.get(campo)!.touched;
  }

  login() {
    this.form.get('email')!.markAsTouched()
    this.form.get('password')!.markAsTouched()
  }

}
