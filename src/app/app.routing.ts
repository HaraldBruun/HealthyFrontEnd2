import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./components/users/users.component";
import {StatisticsComponent} from "./components/statistics/statistics.component";
import {RewardsComponent} from "./components/rewards/rewards.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {UsersDetailComponent} from "./components/users/users-detail/users-detail.component";

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id', component: UsersDetailComponent}
    ]},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'rewards', component: RewardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouting {

}