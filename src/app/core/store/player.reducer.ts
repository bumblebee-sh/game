import {ComputerPlayer, Difficulty, Player, PlayerModel} from '@app/models';
import * as PlayerActions from './player.actions';

export interface IState {
  player: PlayerModel;
  computers: ComputerPlayer[];
}

const initState: IState =  {
  player: new Player('test'),
  computers: [
    new ComputerPlayer(Difficulty.Normal, 'c1'),
    new ComputerPlayer(Difficulty.Hard, 'c2'),
    new ComputerPlayer(Difficulty.Hard, 'c3'),
    new ComputerPlayer(Difficulty.Ease, 'c4'),
  ]
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
