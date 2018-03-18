import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pageNotFound.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { AuthGuard as AuthGuard } from './shared/services/auth.guard';
import { SecureComponent, SECURE_ROUTES } from './layout/secure';
import { PublicComponent, PUBLIC_ROUTES } from './layout/public';

const routes: Routes = [
  { 
    path: '', 
    data: {
      breadcrumb: 'Home'
    },
    redirectTo: 'dashboard', pathMatch: 'full', 
    canActivate: [AuthGuard] 
  },
  { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: SecureComponent, canActivate: [AuthGuard], data: { title: 'Secure Views' }, children: SECURE_ROUTES },
  { 
    path: '**', 
    data: {
      breadcrumb: 'Not Found'
    },
    component: PageNotFoundComponent 
  }
];



@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  declarations: []
})
export class AppRoutingModule { }
