import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from "app/auth/signin/signin.component";
const routes: Routes = [{ path: "/auth", component: SigninComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule {}
