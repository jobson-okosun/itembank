import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginComponent } from "./login/login.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { NewPasswordComponent } from "./new-password/new-password.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { RegistrationSuccessComponent } from "./registration-success/registration-success.component";


const routes: Routes = [
  { path: "", redirectTo: "/sign-in", pathMatch: "full" },
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "complete-registration", component: LoginComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  { path: "new-password/:id", component: NewPasswordComponent },
  { path: "forgot-password/:id", component: ForgotPasswordComponent },
  { path: "registration-success" , component: RegistrationSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
