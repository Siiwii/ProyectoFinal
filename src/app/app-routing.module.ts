import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomenoregComponent } from './components/home/homenoreg/homenoreg.component';
import { ToppostsComponent } from './components/topposts/topposts.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {path: '', component: HomenoregComponent},
  {path: 'topposts', component: ToppostsComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
