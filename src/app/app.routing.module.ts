import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './Component/login/login.component';
import {AddBookComponent} from './Component/add-book/add-book.component';


const appRoutes: Routes = [
  {
    path : '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'addNewBook',
    component: AddBookComponent
  }
];

/*export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);4*/
@NgModule({
  imports : [
    RouterModule.forRoot(appRoutes)
  ],
  exports : [RouterModule]
})
export class  AppRoutingModule {

}
