import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router ) { }

  userInfo: any[] | undefined;
  isFilter: Boolean = false;

  ngOnInit() {
    this.getUserData('api');
  }

  getUserData(type: any) {
    this.apiService.getUserData().subscribe(response => {
      type == 'api' ? (this.userInfo = response) && (this.isFilter = false) : (this.userInfo = response?.slice(0, 5)) && (this.isFilter = true);
      // if (type == 'api') {
      //   this.userInfo = response;
      //   this.isFilter = false;
      // } else {
      //   this.userInfo = response?.slice(0, 5);
      //   this.isFilter = true;
      // }
    });
  }
  showUserData() {
    this.router.navigate(['/inshow']);
  }

}
