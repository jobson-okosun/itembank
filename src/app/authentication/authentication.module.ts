import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";

import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { LoginComponent } from "./login/login.component";
import { NewPasswordComponent } from "./new-password/new-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { EditorModule } from "@tinymce/tinymce-angular";
import { ItemOfflineComponent } from "../pages/items/item-offline/item-offline.component";
import { ItemsModule } from "../pages/items/items.module";
import { InvitationJoinComponent } from './invitation-join/invitation-join.component';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    LoginComponent,
    NewPasswordComponent,
    ResetPasswordComponent,
    InvitationJoinComponent,
    // ItemOfflineComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    // EditorModule,
    // ItemsModule
  ],
})
export class AuthenticationModule {}
