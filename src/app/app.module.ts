import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { ThreadComponent } from './thread/thread.component';


const appRoutes: Routes = [
  {
    path: '',
    component: DiscussionForumComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { 
    path: 'signup', 
    component: SignupComponent 
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'thread/:id/:description',
    component: ThreadComponent
  },
  {
    path: 'forum',
    component: DiscussionForumComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    DiscussionForumComponent,
    SuggestionComponent,
    ThreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                              
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,
      {
        enableTracing: true
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
