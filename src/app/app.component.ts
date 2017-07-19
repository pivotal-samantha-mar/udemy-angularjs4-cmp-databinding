import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired (firedNum) {
    if (firedNum % 2 == 0) {
      this.evenNumbers.push(firedNum);
    }
    else {
      this.oddNumbers.push(firedNum); 
    }
  }
}
