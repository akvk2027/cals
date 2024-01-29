import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
constructor(private router:Router){}
navigateToAnotherComponent(): void {
  this.router.navigate(['/cals']);
}
userDet(): void{
  this.router.navigate(['/user'])
}
}
