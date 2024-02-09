import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Project } from '../../interfaces/projects.interface';
import { State } from '../../interfaces/state.interface';

@Component({
  selector: 'app-project-edit-page',
  templateUrl: './project-edit-page.component.html',
  styles: ``
})
export class ProjectEditPageComponent implements OnInit {

  public project?: Project;
  public stateProjectVar: State[] | undefined;
  public selectedStateProject: string = 'ACT';

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute
    ){}

  ngOnInit(): void {

    this.stateProjectVar = [
      {code:'ACT', name: 'Active'},
      {code:'INA', name: 'Inactive'},
    ];

    this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.projectService.getProjectById(id))
        )
        .subscribe( project => {
          if(project){
            this.project = project;
            this.selectedStateProject = project.project_state;
          }
          else {
            this.project = {
              id:              '',
              project_name:    '',
              duration_months: 0,
              department:      '',
              percentage:      0,
              project_state:   'ACT'
            };
          }
          return;
        })

  }

}
