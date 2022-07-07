import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  HomeComponent,
  ProjectsComponent,
  AboutComponent,
  ContactComponent
 } from './components/index';
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
