import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {RegistrationComponent} from "./component/registration/registration.component";
import {LoginComponent} from "./component/login/login.component";
import {PagenotfoundComponent} from "./component/pagenotfound/pagenotfound.component";

const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'registration', component:RegistrationComponent },
  {path:'login', component:LoginComponent },
  { path: '**', pathMatch: 'full',
    component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
