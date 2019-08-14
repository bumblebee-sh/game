import { Component, OnInit, Renderer2, ViewChildren, QueryList, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {MatDialog} from '@angular/material';

import {IAppState} from '@app/store/app.reducer';
import * as PlayerActions from '@app/core/store/player.actions';

import {ErrorStateDirective} from '../../directives/error-state.directive';
import {ResultContainerComponent} from '../../containers/result-container/result-container.component';
import {PlayerAction, Player, ComputerPlayer, Difficulty} from '@app/models';


@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})

export class GameFieldComponent implements OnInit, OnDestroy{
  @ViewChildren(ErrorStateDirective) directives: QueryList<ErrorStateDirective>;
  showLoader = true;

  player: Player;
  computerPlayers: ComputerPlayer[];

  actionBtns = [
    {
      action: PlayerAction.Decrease,
      buttonText: 'Decrease',
      error: null
    },
    {
      action: PlayerAction.Skip,
      buttonText: 'Without changes',
      error: null
    },
    {
      action: PlayerAction.Increase,
      buttonText: 'Increase',
      error: null
    }
  ];

  private destroy$: Subject<any>= new Subject<any>();

  constructor(
    private renderer: Renderer2,
    private store: Store<IAppState>,
    public dialog: MatDialog
  ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
    this.store.select('PlayerStore').pipe(takeUntil(this.destroy$)).subscribe( players => {
      if (players.restart) {
        this.showLoader = true;
        this.restartGame(players);
      }
      this.setPlayers(players);
    });
  }

  action(action: PlayerAction) {
    this.player.action(action);
  }

  private setPlayers(players, restart: boolean = false) {
    if (restart) {

    }
    this.setPlayer(players.player);
    this.computerPlayers = players.computers as any;
  }

  private restartGame(players) {
    [players.player, ...players.computers].forEach( player => player.restart());
  }

  private setPlayer(player) {
    this.player = player;

    this.player.onWin(data => {
      this.dialog.open(ResultContainerComponent);
    });

    this.player.onSuccess((action, percent) => {
      console.log('percent', percent)
    });

    this.player.onErr((actionType: PlayerAction) => {
      this.actionBtns.find(btn => btn.action === actionType).error = Date.now();
    });
  }

  startGame() {
    this.computerPlayers.forEach(comp => {
      comp.init();
      comp.onWin(() => {
        this.store.dispatch(new PlayerActions.UpdateState({player: this.player, computers: this.computerPlayers}))
      });
    });
    this.showLoader = false;
  }
}
