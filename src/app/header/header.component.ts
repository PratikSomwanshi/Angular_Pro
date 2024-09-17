import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'day1';
  value = 'rohan';
  dis = true;

  click() {
    console.log('clicked');
  }
}
