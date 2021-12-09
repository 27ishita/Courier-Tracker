import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackingInfoComponent } from './tracking-info/tracking-info.component';

const routes: Routes = [
  { path: 'details/:provider/:number', component: TrackingInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
