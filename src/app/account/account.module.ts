import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountRoutingModule } from "./account-routing.module";
import { SignupComponent } from "./signup/signup.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CreateCredentialsComponent } from "./create-credentials/create-credentials.component";

@NgModule({
  declarations: [
    SignupComponent,
    CreateCredentialsComponent,
  ],
  imports: [CommonModule, AccountRoutingModule, ReactiveFormsModule],
})
export class AccountModule {}
