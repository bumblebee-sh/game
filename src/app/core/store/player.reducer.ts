import {PlayerModel, Player, ComputerPlayer, Difficulty} from '@app/models';
import * as PlayerActions from './player.actions';

export interface IState {
  player: PlayerModel;
  computers: ComputerPlayer[];
}

const initState: IState =  {
  player: null,
  computers: null
};

export function PlayerReducer(state: IState = initState, action: PlayerActions.PlayerActions) {
  switch (action.type) {
    case PlayerActions.ActionTypes.UPDATE_STATE: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state;
  }
}
