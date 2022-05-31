import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user.data';
import { UserData } from './user-data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CRUD Practice'
  users: User[] = []

  constructor(private dataservice: DataService){}

  ngOnInit() { 
    this.getUsers();
  }

  getUsers() {
    this.dataservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
