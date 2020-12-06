import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BiographyComponent } from './biography/biography.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { FrontEndSkillsComponent } from './front-end-skills/front-end-skills.component';
import { BackEndSkillsComponent } from './back-end-skills/back-end-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    ProjectsComponent,
    ProjectComponent,
    ExperienceComponent,
    FooterComponent,
    FrontEndSkillsComponent,
    BackEndSkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
