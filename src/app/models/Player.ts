import {PlayerAction, PlayerModel} from "@app/models/player.model";
import {Difficulty} from "@app/models/difficulty.model";

abstract class GameActions implements PlayerModel{
  maxIteration = 0;
  startNumber = 0;
  progress = 0;
  score: number;
  number: number;
  iterations = 0;
  correctAnswers = 0;
  inCorrectAnswers = 0;
  startTime = Date.now();
  finishTime: number;
  playingTime: string;
  playingTimeFull: number;

  protected abstract winCb(a?: any);
  protected abstract errCb(key: PlayerAction);
  protected abstract successCb(key: PlayerAction, a?: any);

  protected rangeNumber: {min: number, max: number} = {
    min: 2,
    max: 100
  };

  protected actions: PlayerAction[] = [PlayerAction.Increase, PlayerAction.Decrease, PlayerAction.Skip];

  constructor(){
    this.number = GameActions.randomNumber(this.rangeNumber.min, this.rangeNumber.max);
    this.startNumber = this.number;
    this.maxIteration = this.calcIterations(this.number);
  }

  protected checkRules(num: number): boolean {
    return !(num % 3);
  }

  protected isWin(num: number): boolean {
    return num === 1;
  }

  protected setIteration() {
    this.iterations++;
  }

  protected static numberAction(action: PlayerAction, num: number): number {
    switch (action) {
      case PlayerAction.Skip:
        return num;
      case PlayerAction.Decrease:
        return --num;
      case PlayerAction.Increase:
        return ++num;
      default:
        return num;
    }
  }

  protected static randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * max + min);
  }

  calcIterations(num: number): number{
    let result = GameActions.getNextStepNumber(this.doAction(num));
    let iterations = 0;
    while(!this.isWin(result)) {
      result = GameActions.getNextStepNumber(this.doAction(result));
      iterations++;
    }
    return iterations + 1;
  }

  private doAction(num :number): number {
    let result = num;
    this.actions.some( action => {
      let res = GameActions.numberAction(action, num);
      if (this.checkRules(res)){
        result = res;
        return true;
      }
    });
    return result;
  }

  protected static getNextStepNumber(num: number): number {
    return num / 3;
  }

  action(act: PlayerAction) {
    const numState = Player.numberAction(act, this.number);
    if (this.checkRules(numState)) {
      this.correctAnswers++;
      this.progress = this.setProgress();
      this.number = Player.getNextStepNumber(numState);
      this.successCb(act, this.progress);
    } else {
      this.inCorrectAnswers++;
      this.errCb(act);
    }
    this.nextIteration();
  }

  private nextIteration() {
    this.setIteration();
    if (this.isWin(this.number)) {
      if (this.winCb) {
        this.setEndOfGame();
        this.winCb(this);
      }
    }
  }

  private setProgress(): number{
    return this.correctAnswers * 100 / this.maxIteration;
  }

  private setEndOfGame() {
    this.finishTime = Date.now();
    this.playingTimeFull = this.finishTime - this.startTime;
    this.playingTime = GameActions.convertTIme(this.playingTimeFull);
  }

  static convertTIme(time: number) {
    let milliseconds = formatedNumber( (time % 1000) / 100 );
    let seconds = formatedNumber(Math.floor((time / 1000) % 60) );
    let minutes = formatedNumber(Math.floor((time / (1000 * 60)) % 60) );

    function formatedNumber(n: number): string{
      return ('0' + n).slice(-2);
    }

    return minutes + ":" + seconds + ":" + milliseconds;
  }
}

export class Player extends GameActions{
  isHuman = true;
  errCb: () => any;
  winCb: () => any;
  successCb: () => any;

  constructor(
    public name: string
  ) {
    super();
  }

  onWin(cb: any) {
    this.winCb = cb;
  }

  onErr(cb: any) {
    this.errCb = cb;
  }

  onSuccess(cb: any) {
    this.successCb = cb;
  }
}

export class ComputerPlayer extends GameActions{
  private stepTime: number;
  private timer;
  private unDoneActions: PlayerAction[];

  private cb: Function;

  constructor(
    public difficulty: Difficulty,
    public name: string,
  ) {
    super();
  }

  private static setDifficulty(dif: Difficulty): number {
    switch (dif) {
      case Difficulty.Ease:
        return 1500;
      case Difficulty.Normal:
        return 1000;
      case Difficulty.Hard:
        return 500;
      default:
        return 1000;
    }
  }

  init(){
    this.unDoneActions = [...this.actions];
    this.stepTime = ComputerPlayer.setDifficulty(this.difficulty);
    this.doStep();
  }

  private doStep() {
    this.timer = setInterval(() => {
      this.action(this.getAction());
    }, this.stepTime)
  }

  winCb() {
    clearInterval(this.timer);
    this.timer = null;
    if (this.cb) {
      this.cb();
    }
  }

  errCb(action: PlayerAction) {
    this.unDoneActions = this.removeAction(action, this.unDoneActions);
  }

  successCb(action: PlayerAction) {
    if (this.unDoneActions.length !== this.actions.length) {
      this.resetState();
    }
  }

  onWin(cb: Function) {
    this.cb = cb;
  }

  private getAction(): PlayerAction{
    return this.unDoneActions[ComputerPlayer.randomNumber(0, this.unDoneActions.length - 1)];
  }

  private removeAction(action: PlayerAction, arr: PlayerAction[]): PlayerAction[] {
    const index = arr.indexOf(action);
    arr.splice(index, 1);
    return arr;
  }

  private resetState() {
    this.unDoneActions = [...this.actions];
  }

}
