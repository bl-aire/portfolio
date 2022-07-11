import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from "./project"
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectInterface: Project[] = [];
  sub: Subscription | any;
  ProjectService: any;
  errorMessage: any;
  projects: any;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.sub = this.projectService.getProjects().subscribe(response => {
    this.projects = response
    //,error: (err: any) => this.errorMessage = err
  });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
