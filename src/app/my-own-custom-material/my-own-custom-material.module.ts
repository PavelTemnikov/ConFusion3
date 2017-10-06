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
  MatSliderModule 

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
    MatSliderModule
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
    MatSliderModule
  ],
  declarations: []
})
export class MyOwnCustomMaterialModule { }
