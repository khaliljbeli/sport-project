import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = "login";
  actualDate: any = new Date;
  errorMsg: string;
  loginForm: FormGroup
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    })
  }

  login() {
    this.userService.login(this.loginForm.value).subscribe(
      (data) =>{
        if (data.message == "2") {
          localStorage.setItem("userId", data.user.id)
          localStorage.setItem("role", data.user.role)
          this.router.navigate([`profile/${data.user.id}`]);
        } else {
          this.errorMsg = "Please check Email/Pwd"
        }
      }
      );
  }
}