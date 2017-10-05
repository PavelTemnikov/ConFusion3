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
	MatGridListModule 

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
    MatGridListModule
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
  	MatGridListModule
  ],
  declarations: []
})
export class MyOwnCustomMaterialModule { }
