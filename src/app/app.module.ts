import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactService } from './core/services/contact.service';
import { PortfolioService } from './core/services/portfolio.service';
import { PreloaderService } from './core/services/preloader.service';
import { SkillsService } from './core/services/skills.service';
import { SiteInterceptor } from './core/utilities/site.interceptor';
import { PortfolioItemsComponent } from './pages/portfolio/portfolio-items/portfolio-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ResumeComponent,
    PortfolioComponent,
    PortfolioItemsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PreloaderService,
    SkillsService,
    PortfolioService,
    ContactService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SiteInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
