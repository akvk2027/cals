import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inshow',
  templateUrl: './inshow.component.html',
  styleUrls: ['./inshow.component.css']
})
export class InshowComponent {
  formData: any = {
    title: '',
    body: '',
    userId: null
  };
  constructor(private apiservice: ApiService) { }
  ngOnInit() {
  }
  postData() {
    console.log(this.formData);
    this.apiservice.postUserData(this.formData).subscribe(data => {
      alert("User Data Added");
      this.formData.title = '';
      this.formData.body = '';
      this.formData.userId = null;
    },
      error => {
        console.error("Error adding user data:", error);
        alert("Error adding user data");
      });
  }
}
