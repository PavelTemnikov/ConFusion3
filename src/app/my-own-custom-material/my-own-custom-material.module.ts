import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatButtonModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
  	MatToolbarModule,
  	MatButtonModule,
  	MatDialogModule
  ],
  declarations: []
})
export class MyOwnCustomMaterialModule { }
