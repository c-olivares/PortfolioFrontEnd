import { Component, OnInit } from "@angular/core";
import { UsersserviceService } from "../usersservice.service";
import { User } from "../user";

@Component({

  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  
  user:User =new User();
  constructor(private loginuserservice: UsersserviceService) {}

  ngOnInit(): void {
      
  }

  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data=> {
      window.location.href="/home"
    },error=>alert("Por favor ingrese un usuario y contraseña correcto"));
  } 
}
