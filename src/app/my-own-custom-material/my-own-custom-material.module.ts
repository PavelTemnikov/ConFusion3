import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 

	MatToolbarModule, 
	MatButtonModule, 
	MatDialogModule, 
	MatInputModule,
	MatCheckboxModule,
	MatCardModule,
	MatProgressSpinnerModule,
	MatListModule,
	MatGridListModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSelectModule

} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatGridListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  exports: [
  	MatToolbarModule,
  	MatButtonModule,
  	MatDialogModule,
  	MatInputModule,
  	MatCheckboxModule,
  	MatCardModule,
  	MatProgressSpinnerModule,
  	MatListModule,
  	MatGridListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  declarations: []
})
export class MyOwnCustomMaterialModule { }
