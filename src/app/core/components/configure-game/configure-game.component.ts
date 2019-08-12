import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

import {IAppState} from '@app/store/app.reducer';
import * as PlayerActions from '@app/core/store/player.actions';
import {ComputerPlayer, Difficulty, Player} from "@app/models";

@Component({
  selector: 'app-configure-game',
  templateUrl: './configure-game.component.html',
  styleUrls: ['./configure-game.component.scss']
})

export class ConfigureGameComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject();

  difficulty = [{
    value: Difficulty.Ease,
    text: 'Ease'
  }, {
    value: Difficulty.Normal,
    text: 'Normal'
  }, {
    value: Difficulty.Hard,
    text: 'Hard'
  }];

  configForm = this.fb.group({
    name: [
      '',
      [Validators.required]
    ],
    count: ['1'],
    difficulty: [ this.difficulty[0].value ]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<IAppState>,
  ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {

  }

  send(form) {
    const data = this.setData(form.value);
    this.store.dispatch(new PlayerActions.UpdateState(data));
  }

  private setData(obj) {
    const data = {
      player: new Player(obj.name),
      computers: []
    };
    for (let i = 0, x = +obj.count; i < x; i++) {
      data.computers.push(new ComputerPlayer(obj.difficulty, `Comp #${i + 1}`));
    }

    return data;
  }
}
