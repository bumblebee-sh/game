import {PlayerModel} from '@app/models';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  RESTART_GAME = '[Player] Restart Game',
  UPDATE_STATE = '[Player] Update State'
}

export class UpdateState implements Action {
  readonly type = ActionTypes.UPDATE_STATE;
  constructor(public payload: any) {}
}

export class RestartGame implements Action {
  readonly type = ActionTypes.RESTART_GAME;
}


export type PlayerActions = UpdateState | RestartGame;
