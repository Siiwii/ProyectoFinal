import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToppostsComponent } from './components/topposts/topposts.component';
import { ErrorComponent } from './components/error/error.component';
// import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/home/posts/posts.component';
import { PostscontainerComponent } from './components/home/postscontainer/postscontainer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PostcontComponent } from './tests/postcont/postcont.component';
import { HomenoregComponent } from './components/home/homenoreg/homenoreg.component';

const routes: Routes = [
  // {path: '', component: HomenoregComponent},
  {path: '', component: HomenoregComponent},
  // {path: 'topposts', component: ToppostsComponent},
  // {path: 'posts', component: PostscontainerComponent},
  // {path: 'post/:id', component: PostsComponent},
  // {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // {path: 'test', component: PostcontComponent},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
