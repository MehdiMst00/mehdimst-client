import { Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animationState: 'HomePage' },
    pathMatch: 'full',
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    data: { animationState: 'AboutMePage' },
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: { animationState: 'ResumePage' },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animationState: 'PortfolioPage' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animationState: 'ContactPage' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
