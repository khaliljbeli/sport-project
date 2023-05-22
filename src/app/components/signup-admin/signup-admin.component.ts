import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {
  errorMsg:string;
  users:any;
  signupAdminForm:FormGroup

  constructor(private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.signupAdminForm = this.formBuilder.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      password: [""],
      role: ["admin"],
    })
  }

  signupAdmin(){
  this.userService.signup(this.signupAdminForm.value, null).subscribe(
    (data) => {
      console.log("Here data after signup", data.message);
      this.errorMsg = data.message;
    }
  );
}
  
}
