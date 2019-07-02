import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { ThreadComponent } from './thread/thread.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SuggestionformComponent } from './suggestionform/suggestionform.component';
import { UploadComponent } from './upload/upload.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'thread/:id/:description/:threadNo/:owner',
    component: ThreadComponent
  },
  {
    path: 'forum',
    component: DiscussionForumComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'suggestform',
    component: SuggestionformComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
