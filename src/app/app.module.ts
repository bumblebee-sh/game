import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '@app/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {reducers} from '@app/store/app.reducer';
import {PlayerEffects} from '@app/core/store/player.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PlayerEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
