import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActiveComponent } from './pages/active/active.component';
import { InactiveComponent } from './pages/inactive/inactive.component';

const routes: Routes = [
  {path: '', 
  component: HomeComponent,
  },
  {path: 'active-posts', 
  component: ActiveComponent,
  },
  {path: 'inactive-posts',
  component: InactiveComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
