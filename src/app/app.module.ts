import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
// import { HeaderComponent } from './components/header/header/header.component';
import { ToppostsComponent } from './components/topposts/topposts.component';
import { ErrorComponent } from './components/error/error.component';
// import { HeadernoregComponent } from './components/header/headernoreg/headernoreg.component';
// import { HomenoregComponent } from './components/home/homenoreg/homenoreg.component';
import { PostscontainerComponent } from './components/home/postscontainer/postscontainer.component';
import { PostsService } from './services/posts.service';
import { HttpModule } from '@angular/http';
import { PostsComponent } from './components/home/posts/posts.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SortbyratePipe } from './pipes/sortbyrate.pipe';
import { CommentsComponent } from './components/comments/comments.component';
import { RegisterComponent } from './components/register/register.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/users/user.service';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // HeaderComponent,
    ToppostsComponent,
    ErrorComponent,
    // HeadernoregComponent,
    // HomenoregComponent,
    PostscontainerComponent,
    PostsComponent,
    FooterComponent,
    CapitalizePipe,
    SortbyratePipe,
    CommentsComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    NgbModule.forRoot(),
    BarRatingModule,
    ReactiveFormsModule
  ],
  providers: [
    PostsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
