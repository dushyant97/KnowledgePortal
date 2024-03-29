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
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { ThreadComponent } from './thread/thread.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SuggestionformComponent } from './suggestionform/suggestionform.component';
import { UploadComponent } from './upload/upload.component';
import { ForumParameterService } from './forum-parameter.service';


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
    ThreadComponent,
    WelcomeComponent,
    SuggestionformComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                              
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ForumParameterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
