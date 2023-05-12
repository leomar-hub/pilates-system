import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  newUser: User = { id: 0, name: '', email: '', password: '' };

  constructor(private dataService: DataService) {
    this.users = this.dataService.getUsers();
  }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  addUser(name: string, email: string, password: string) {
    const user: User = {
      id: this.users.length + 1,
      name: name,
      email: email,
      password: password
    };
    this.dataService.addUser(user);
  }
  onUserSubmit(form: NgForm) {
    const user: User = {
      id: this.users.length + 1,
      name: this.newUser.name,
      email: this.newUser.email,
      password: this.newUser.password
    };
    this.dataService.addUser(user);
    this.newUser = { id: 0, name: '', email: '', password: '' };
    form.resetForm();
  }
}

