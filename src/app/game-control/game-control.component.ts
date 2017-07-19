import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output () intervalFired: EventEmitter<number> = new EventEmitter<number>();
   interval;
   lastNum = 0;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNum +1);
      this.lastNum ++;

    }, 1000);

  }

  pause () {
    clearInterval(this.interval);

  }

}
