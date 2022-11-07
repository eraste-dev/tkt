import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './../components/layouts/default-layout/default-layout.component';
import { DashbordComponent } from './../components/pages/dashbord/dashbord.component';
import { NotFoundComponent } from './../components/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [{ path: '', component: DashbordComponent }],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '' },
];
