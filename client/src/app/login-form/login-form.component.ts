import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    });
  }

  login() {
    const data = {
      userName: this.loginForm.get('userName').value,
      passWord: this.loginForm.get('passWord').value
    };

    this.http.post('http://localhost:3000/user/login', data).subscribe((response: any) => {

      console.log(response);
      alert('Login Successful');

    }, (error) => {

      console.log(error);
      alert('Login Failed');

    });
  }

}
