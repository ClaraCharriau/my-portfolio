import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LandingComponent } from './components/homepage/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { StoryComponent } from './components/about/story/story.component';
import { SkillsComponent } from './components/about/skills/skills.component';
import { ExperiencesComponent } from './components/about/experiences/experiences.component';
import { DownloadCvComponent } from './components/about/download-cv/download-cv.component';
import { ConnectWithMeComponent } from './components/about/connect-with-me/connect-with-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    LandingComponent,
    AboutComponent,
    StoryComponent,
    SkillsComponent,
    ExperiencesComponent,
    DownloadCvComponent,
    ConnectWithMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
