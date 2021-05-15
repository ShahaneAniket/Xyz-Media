import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component'; 
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallary/gallary.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutUsComponent,
    LoginComponent, 
    GalleryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
