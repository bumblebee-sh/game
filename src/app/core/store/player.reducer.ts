import {ComputerPlayer, Difficulty, Player, PlayerModel} from '@app/models';
import * as PlayerActions from './player.actions';

export interface IState {
  player: PlayerModel;
  computers: ComputerPlayer[];
  restart?: boolean;
}

const initState: IState =  {
  player: null,
  computers: null,
  restart: false
};

export function PlayerReducer(state: IState = initState, action: PlayerActions.PlayerActions) {
  switch (action.type) {
    case PlayerActions.ActionTypes.UPDATE_STATE: {
      return {
        ...state,
        ...action.payload,
        restart: false
      }
    }
    case PlayerActions.ActionTypes.RESTART_GAME:{
      return {
        ...state,
        restart: true
      }
    }
    default:
      return state;
  }
}
