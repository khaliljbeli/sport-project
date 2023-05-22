import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { generateId } from 'src/app/shared/generateId';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMsg:string;
  users: any;
  signupForm: FormGroup;
  imagePreview: any;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router:Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      confirmPwd: [""],
      tel: ["", [Validators.minLength(8), Validators.maxLength(8)]],
      img: [""],
      role:["user"],
    })
  }

  signup(){
    this.userService.signup(this.signupForm.value,this.signupForm.value.img).subscribe(
      (data) => {
        console.log("Here data after signup", data.message);
        if (data.message) {
          this.router.navigate(["signin"])
        } else {
          this.errorMsg = "Email Exists";
        }
      });
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
}
