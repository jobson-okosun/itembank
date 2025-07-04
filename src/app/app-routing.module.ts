// import { DashboardComponent } from "./pages/dashboards/dashboard/dashboard.component";
import { SignInComponent } from "./authentication/sign-in/sign-in.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutComponent } from "./layouts/layout.component";

// Auth
import { AuthGuard } from "./core/guards/auth.guard";
import { ClozeDropdownComponent } from "./pages/items/cloze-dropdown/cloze-dropdown.component";
import { SchedulerDashboardComponent } from "./pages/scheduler/scheduler-dashboard/scheduler-dashboard.component";
// import { DrawingAndWritingPreviewComponent } from "./pages/items/drawing-and-writing-preview/drawing-and-writing-preview.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: "schedule",
    component: LayoutComponent,
    loadChildren: () =>
      import("./pages/scheduler/scheduler.module").then(
        (m) => m.SchedulerModule
      ),
  },
  {
    path: "examalpha",
    component: LayoutComponent,
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
    //canActivate: [AuthGuard],
  },



  {
    path: "exam-preview",
    loadChildren: () =>
      import("./pages/exam-preview/exam-preview.module").then((m) => m.ExamPreviewModule),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule),
  },
  {
    path: "cloze-dropdown",
    component: ClozeDropdownComponent,
  },
  // { path: 'testing', component: DrawingAndWritingPreviewComponent }
  //{ path: 'pages', loadChildren: () => import('./extraspages/extraspages.module').then(m => m.ExtraspagesModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}