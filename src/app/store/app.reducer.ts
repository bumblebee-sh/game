import {ActionReducerMap} from '@ngrx/store';
import * as fromPlayerReducer from '@app/core/store/player.reducer';

export interface IAppState {
  PlayerStore: fromPlayerReducer.IState;
}

export const reducers: ActionReducerMap<IAppState> = {
  PlayerStore: fromPlayerReducer.PlayerReducer
};
