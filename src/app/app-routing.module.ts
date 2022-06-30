import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about/about.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { ProjectsComponent } from './components/projects/projects/projects.component';

const routes: Routes = [
  { path: 'homepage', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects' , component: ProjectsComponent},
  { path: 'contact' , component: ContactComponent},
  { path: '' , redirectTo: '/homepage', pathMatch: 'full'},
  { path: '**' , component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
