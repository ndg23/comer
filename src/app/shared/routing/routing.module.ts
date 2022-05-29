import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from "app/auth/signin/signin.component";
import { HomeComponent } from "app/home/home.component";
import { SignupComponent } from "app/auth/signup/signup.component";
const routes: Routes = [
  { path: "signin", component: SigninComponent },
  { path: "", component: HomeComponent },
  { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [],
  exports: [RouterModule],
})
export class RoutingModule {}
