import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./components/users/users.component";
import {StatisticsComponent} from "./components/statistics/statistics.component";
import {RewardsComponent} from "./components/rewards/rewards.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {UsersDetailComponent} from "./components/users/users-detail/users-detail.component";
import {UsersEditComponent} from "./components/users/users-edit/users-edit.component";
import {AuthGuardService} from "./auth.guard.service";

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuardService], children: [
      {path: ':id', component: UsersDetailComponent},
      {path: ':id/edit', component: UsersEditComponent}
    ]
  },
  {path: 'statistics', canActivate: [AuthGuardService], component: StatisticsComponent},
  {path: 'rewards', canActivate: [AuthGuardService], component: RewardsComponent},
  {path: '**', redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouting {

}
