var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app.routing.ts","module":"AppRouting","children":[{"path":"","component":"LoginComponent"},{"path":"users","component":"UsersComponent","canActivate":["AuthGuardService"],"children":[{"path":":id","component":"UsersDetailComponent"},{"path":":id/edit","component":"UsersEditComponent","canDeactivate":["CanDeactivateGuard"]}]},{"path":"statistics","component":"StatisticsComponent"},{"path":"statistics/:id","component":"StatisticsComponent"},{"path":"rewards","canActivate":["AuthGuardService"],"component":"RewardsComponent"},{"path":"**","redirectTo":""}],"kind":"module"}]}