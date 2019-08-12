import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {MaterialModule} from './material/material.module';
const MODULES = [MaterialModule, ReactiveFormsModule];


@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
  declarations: [

  ],
})
export class ShareModule { }
