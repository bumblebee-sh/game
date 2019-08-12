export class PlayerModel{
  name?: string;
  score: number;
  maxIteration: number;
  progress: number;
}

export enum PlayerAction {
  Increase,
  Decrease,
  Skip
}

export interface IPlayer extends PlayerModel{
  action(action: PlayerAction);
}
