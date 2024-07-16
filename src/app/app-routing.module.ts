import { enableProdMode, NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'nav',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'hero',component:HeroComponent},
  {path:'about',component:AboutComponent},
  {path:'project',component:ProjectsComponent},
  {path:'contact',component:ContactComponent},
  {path:'experience',component:ExperienceComponent}

];

const scrollOptions :ExtraOptions = {
  scrollPositionRestoration:'enabled',
 anchorScrolling:'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes,scrollOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
