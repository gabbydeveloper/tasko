import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/projects.interface';
import { Router } from '@angular/router';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styles: ``
})
export class ProjectPageComponent implements OnInit {

  public projects: Project[] = [];
  public showGrid: boolean = false;
  public searchText: string = '';
  public selectedProject!: Project;

  constructor(
              private projectService: ProjectService,
              private router: Router
            ){}

  ngOnInit(): void {
    this.projectService.getProjects()
        .subscribe(data => this.projects = data);
  }

  /* Search project by name */
  searchProject(event: KeyboardEvent): void {
    if(event.key === 'Enter'){
      this.projectService.getProjects()
        .subscribe(data => {
          const regex = new RegExp(this.searchText,'i');
          this.projects = data.filter(element => regex.test(element.name_project));
        }
      );
    }
  }

  /* Select project to update */
  selectProject(project: Project): void {
    this.router.navigate(['/main-panel/project-edit', project.id_project]);
  }

  /* Create new project */
  newProject(): void {
    this.router.navigate(['/main-panel/project-new']);
  }

}
