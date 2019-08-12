import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ready-check',
  templateUrl: './ready-check.component.html',
  styleUrls: ['./ready-check.component.scss']
})
export class ReadyCheckComponent implements OnInit {
  @Output() readeState = new EventEmitter<boolean>();

  startTime = 3;
  timer;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.timer = setInterval(() => {
      this.startTime--;
      if (!this.startTime) {
        clearInterval(this.timer);
        this.readeState.emit(true);
      }
    }, 1000);
  }


}
