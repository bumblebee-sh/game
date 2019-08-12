import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule, MatProgressBarModule} from '@angular/material';
const MODULES = [MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule, MatProgressBarModule];


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
export class MaterialModule { }
