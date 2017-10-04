import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 

	MatToolbarModule, 
	MatButtonModule, 
	MatDialogModule, 
	MatInputModule,
	MatCheckboxModule,
	MatCardModule,
	MatProgressSpinnerModule 

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
    MatProgressSpinnerModule
  ],
  exports: [
  	MatToolbarModule,
  	MatButtonModule,
  	MatDialogModule,
  	MatInputModule,
  	MatCheckboxModule,
  	MatCardModule,
  	MatProgressSpinnerModule
  ],
  declarations: []
})
export class MyOwnCustomMaterialModule { }
