import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersserviceService } from '../usersservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user!: User;
  

  constructor(public userService: UsersserviceService) { }
  ngOnInit() {
    this.getUserLogged();
  }

  getUserLogged() {

    this.userService.loginUser(this.user).subscribe((user: any) => {
      console.log(user);
    });
}
}