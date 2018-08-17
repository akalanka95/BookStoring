import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MyNavComponent } from './Component/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {LoginService} from './service/login.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Component/login/login.component';
import {AppRoutingModule} from './app.routing';
import {MaterialModule} from './material';
import {FormsModule} from '@angular/forms';
import {AddBookComponent} from './Component/add-book/add-book.component';
import {AddBookService} from './service/add-book.service';
import {UploadService} from './service/upload.service';
import { BookListComponent } from './Component/book-list/book-list.component';
import { ViewBookComponent } from './Component/view-book/view-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyNavComponent,
    AddBookComponent,
    BookListComponent,
    ViewBookComponent
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
  providers: [LoginService , AddBookService , UploadService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
