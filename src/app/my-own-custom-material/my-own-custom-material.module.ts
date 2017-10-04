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
	MatListModule 

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
    MatListModule
  ],
  exports: [
  	MatToolbarModule,
  	MatButtonModule,
  	MatDialogModule,
  	MatInputModule,
  	MatCheckboxModule,
  	MatCardModule,
  	MatProgressSpinnerModule,
  	MatListModule
  ],
  declarations: []
})
export class MyOwnCustomMaterialModule { }
