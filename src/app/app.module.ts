import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MyNavComponent } from './Component/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {LoginService} from './service/login.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Component/login/login.component';
import {AppRoutingModule} from './app.routing.module';
import {MaterialModule} from './material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
