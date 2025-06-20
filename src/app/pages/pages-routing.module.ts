import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Component pages
// import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { AllSubjectsPassageComponent } from "./passages/all-subjects-passage/all-subjects-passage.component";
import { SchedulerDashboardComponent } from "./scheduler/scheduler-dashboard/scheduler-dashboard.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/examalpha/dashboard",
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "exams",
    loadChildren: () =>
      import("./assessment/assessment.module").then((m) => m.AssessmentModule),
  },

 
  {
    path: "passages",
    loadChildren: () =>
      import("./passages/passages.module").then((m) => m.PassagesModule),
  },
  {
    path: "subjects",
    loadChildren: () =>
      import("./items/items.module").then((m) => m.ItemsModule),
  },
  {
    path: "moderation",
    loadChildren: () =>
      import("./moderation/moderation.module").then((m) => m.ModerationModule),
  },
  {
    path: "recycle",
    loadChildren: () =>
      import("./recycle/recycle.module").then((m) => m.RecycleModule),
  },
  {
    path: "templates",
    loadChildren: () =>
      import("./templates/templates.module").then((m) => m.TemplatesModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfileModule),
  },
  // {
  //   path: "ui",
  //   loadChildren: () => import("./ui/ui.module").then((m) => m.UiModule),
  // },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "tags",
    loadChildren: () => import("./tags/tags.module").then((m) => m.TagsModule),
  },
  // {
  //   path: "icons",
  //   loadChildren: () =>
  //     import("./icons/icons.module").then((m) => m.IconsModule),
  // },
  {
    path: "notifications",
    loadChildren: () =>
      import("./notifications/notifications.module").then(
        (m) => m.NotificationsModule
      ),
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./settings/settings.module").then((m) => m.SettingsModule),
  },
  {
    path: "schedule",
    loadChildren: () =>
      import("./scheduler/scheduler.module").then((m) => m.SchedulerModule),
  },
  {
    path: "reports",
    loadChildren: () =>
      import("./results/results.module").then((m) => m.ResultsModule),
  },
  {
    path: "monitor",
    loadChildren: () =>
      import("./monitor/monitor.module").then((m) => m.MonitorModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
