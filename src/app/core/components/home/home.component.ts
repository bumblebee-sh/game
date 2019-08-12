import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";

import {RulesComponent} from '../rules/rules.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  startGame = false;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openRules() {
    this.dialog.open(RulesComponent);
  }

  start() {
    this.startGame = !this.startGame;
  }
}
