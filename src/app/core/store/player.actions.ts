import {PlayerModel} from '@app/models';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  UPDATE_STATE = '[Player] Update State'
}

export class UpdateState implements Action {
  readonly type = ActionTypes.UPDATE_STATE;
  constructor(public payload: any) {}
}


export type PlayerActions = UpdateState;
