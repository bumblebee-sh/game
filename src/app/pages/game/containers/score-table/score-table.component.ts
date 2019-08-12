import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IAppState } from '@app/store/app.reducer';

@Component({
  selector: 'app-score-table-container',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.scss']
})
export class ScoreTableContainerComponent implements OnInit, OnDestroy {
  destroy$: Subject<any> = new Subject();

  players;

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
    this.store.select('PlayerStore').pipe(takeUntil(this.destroy$)).subscribe(players => {
      this.players = [players.player, ...players.computers];
    });
  }

}
