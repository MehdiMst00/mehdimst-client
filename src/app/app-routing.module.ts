import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
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
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
