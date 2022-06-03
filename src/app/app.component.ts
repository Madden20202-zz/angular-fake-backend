import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DataService } from './data.service';
import { UserData } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CRUD Practice'

  // Ensure that whatever is receiving data 
  // is set as an @Input and has a 
  // type, usually any works
  @Input() users: any

  constructor(private dataservice: DataService) {}

  ngOnInit() { 
    this.getUsers();
  }

  getUsers() {
    this.dataservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
