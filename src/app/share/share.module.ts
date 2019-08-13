import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {MaterialModule} from './material/material.module';
import {SortByPipe} from "@app/pipes";
const MODULES = [MaterialModule, ReactiveFormsModule];


@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES,
    SortByPipe
  ],
  declarations: [
    SortByPipe
  ],
})
export class ShareModule { }
