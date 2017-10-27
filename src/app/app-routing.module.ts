import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomenoregComponent } from './components/home/homenoreg/homenoreg.component';
import { ToppostsComponent } from './components/topposts/topposts.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/home/posts/posts.component';
import { PostscontainerComponent } from './components/home/postscontainer/postscontainer.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  // {path: '', component: HomenoregComponent},
  {path: '', component: HomeComponent},
  {path: 'topposts', component: ToppostsComponent},
  {path: 'posts', component: PostscontainerComponent},
  {path: 'post/:id', component: PostsComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
