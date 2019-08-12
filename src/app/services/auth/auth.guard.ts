import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { IAppState} from '@app/store/app.reducer';

export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<IAppState>,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('PlayerStore').pipe( map(players => !!players.player ));
  }
}
