import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IAppState } from '@app/store/app.reducer';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {
  items: any;
  private destroy$ = new Subject();

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.store.select('PlayerStore').pipe(takeUntil(this.destroy$)).subscribe( data => {
      this.items = ([data.player ,...data.computers] as any).sort((a, b) => a.playingTime > b.playingTime ? 1 : -1);
    });
  }

}
