import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorhomeComponent } from './authorhome/authorhome.component';
import { AuthorloginComponent } from './authorlogin/authorlogin.component';
import { LoginComponent } from './login/login.component';
import { ReaderhomeComponent } from './readerhome/readerhome.component';
import { HomeComponent } from './home/home.component';

import { SignupComponent } from './signup/signup.component';
import { GetbooksComponent } from './getbooks/getbooks.component';

const routes: Routes = [
 {path:'readerhome',component:ReaderhomeComponent},
  {path :'signup',component:SignupComponent},
  {path:'authorhome',component:AuthorhomeComponent},
 
    { path: 'authorlogin', component: AuthorloginComponent},
   
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    {
      path:'home',component:HomeComponent
    },
    {
      path:'',redirectTo: '/home', pathMatch: 'full'
    },
    {
      path:'getbooks',component:GetbooksComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
