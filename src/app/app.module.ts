import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProfilComponent } from './profil/profil.component';
import { ProductsComponent } from './products/products.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ElectronicComponent } from './products/electronic/electronic.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RoutingModule } from './shared/routing/routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProfilComponent,
    ProductsComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ElectronicComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
