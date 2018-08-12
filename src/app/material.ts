import {NgModule} from '@angular/core';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCheckboxModule,
  MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatDatepickerModule, MatSelectModule, MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports : [MatButtonModule, MatCheckboxModule , MatToolbarModule , MatSidenavModule ,
    MatIconModule , MatListModule , MatCardModule , MatFormFieldModule , MatInputModule
  , MatGridListModule , MatDatepickerModule , MatSelectModule , MatSlideToggleModule],
  exports : [MatButtonModule, MatCheckboxModule , MatToolbarModule , MatSidenavModule ,
    MatIconModule , MatListModule , MatCardModule , MatFormFieldModule , MatInputModule,
    MatGridListModule , MatDatepickerModule , MatSelectModule , MatSlideToggleModule ]
})
export class MaterialModule { }
