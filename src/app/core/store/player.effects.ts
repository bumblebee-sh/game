import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {catchError, switchMap, tap, map } from 'rxjs/operators';
import {Router} from '@angular/router';

import {IState} from './player.reducer';
import * as PlayerActions from './player.actions';
import {environment} from '@env/environment';

@Injectable()
export class PlayerEffects {

  @Effect({dispatch: false})
  autoLogin = this.actions$.pipe(
    ofType(PlayerActions.ActionTypes.UPDATE_STATE),
    tap(data => {
      this.router.navigateByUrl('game');
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}

}
