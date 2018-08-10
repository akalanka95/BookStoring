import {NgModule} from '@angular/core';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCheckboxModule,
  MatCardModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports : [MatButtonModule, MatCheckboxModule , MatToolbarModule , MatSidenavModule ,
    MatIconModule , MatListModule , MatCardModule , MatFormFieldModule , MatInputModule],
  exports : [MatButtonModule, MatCheckboxModule , MatToolbarModule , MatSidenavModule ,
    MatIconModule , MatListModule , MatCardModule , MatFormFieldModule , MatInputModule ]
})
export class MaterialModule { }
