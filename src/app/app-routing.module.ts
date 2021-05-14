import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
  { path: '', component: BodyComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
