import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '@app/share/share.module';
import { GameRoutingModule } from './game-routing.module';
import { GameFieldComponent, ScoreTableComponent, ResultComponent, ReadyCheckComponent } from './components';
import { ScoreTableContainerComponent, ResultContainerComponent } from './containers';
const COMPONENTS = [
  GameFieldComponent,
  ScoreTableComponent,
  ScoreTableContainerComponent,
  ResultComponent,
  ResultContainerComponent,
  ReadyCheckComponent
];

import { ErrorStateDirective } from './directives';
const DIRECTIVES = [ ErrorStateDirective ];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    ShareModule
  ],
  entryComponents: [
    ResultContainerComponent
  ]
})
export class GameModule { }
