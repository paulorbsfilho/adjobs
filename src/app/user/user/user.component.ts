import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  show: boolean;
  userEdit: FormGroup;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.show = false;
    this.currentUser();
    this.userEdit = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  currentUser() {
    this.userService.currentUser()
      .subscribe(user => this.user = user);
  }

  showUserForm() {
    this.show = !this.show;
  }

  redirectToHome() {
    this.router.navigateByUrl('/home');
  }

  updateUser(userInfo) {
    return;
  }
}
