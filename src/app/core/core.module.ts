import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '@app/share/share.module';
import { HomeComponent, RulesComponent, ConfigureGameComponent } from './components';
import { AuthGuard } from '../services';

const COMPONENTS = [ HomeComponent, RulesComponent, ConfigureGameComponent ];

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [

  ],
  declarations: [
    ...COMPONENTS
  ],
  providers: [
    AuthGuard
  ],
  entryComponents: [
    RulesComponent
  ]
})
export class CoreModule { }
