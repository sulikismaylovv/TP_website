import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProfileGuard} from "./core/guards/profile.guard";
import {AppComponent} from "./shared/app.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full',},
  { path : 'home', component: AppComponent, pathMatch: 'full'},
]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProfileGuard]
})
export class AppRoutingModule {
}
