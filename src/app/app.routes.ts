import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  //TODO: Cambiar a LoginComponent
{path:'', component: DashboardComponent},
//{path:'dashboard', component: DashboardComponent}
];
