import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from "@angular/material";
import {Store} from "@ngrx/store";
import {IAppState} from "@app/store/app.reducer";

import * as PlayerActions from "@app/core/store/player.actions";

import { Player } from '@app/models';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() items: Player[];

  constructor(
    private router: Router,
    private store: Store<IAppState>,
    public dialog: MatDialog
  ) { }
  ngOnInit() {
  }

  restartGame() {
    this.dialog.closeAll();
    this.store.dispatch(new PlayerActions.RestartGame())
  }

  newGame() {
    this.dialog.closeAll();
    this.router.navigateByUrl('/');
  }
}
