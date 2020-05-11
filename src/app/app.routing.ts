import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./components/users/users.component";
import {StatisticsComponent} from "./components/statistics/statistics.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {UsersDetailComponent} from "./components/users/users-detail/users-detail.component";
import {UsersEditComponent} from "./components/users/users-edit/users-edit.component";
import {AuthGuardService} from "./auth.guard.service";
import {CanDeactivateGuard} from './components/users/users-edit/can-deactivate-guard.service';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {RewardComponent} from './components/reward/reward.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'users', component: UsersComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: ':id', component: UsersDetailComponent},
      {path: ':id/edit', component: UsersEditComponent, canDeactivate: [CanDeactivateGuard]}
    ]
  },

  {path: 'statistics', canActivate: [AuthGuardService], component: StatisticsComponent},
  {path: 'statistics/:id', canActivate: [AuthGuardService] ,component: StatisticsComponent},

  {
    path: 'rewards',
    canActivate: [AuthGuardService],
    component: RewardComponent
  },
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouting {

}
