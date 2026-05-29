import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { CreateCredentialsComponent } from "./create-credentials/create-credentials.component";

const routes: Routes = [
  { path: "", redirectTo: "sign-up" },
  { path: "sign-up", component: SignupComponent },
  { path: "create-credentials/:id", component: CreateCredentialsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
