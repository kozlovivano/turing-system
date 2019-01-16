import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// --- Components --- //
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '404',
    component: ErrorComponent
  },
  { 
    path: '**',
    redirectTo: '404' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
