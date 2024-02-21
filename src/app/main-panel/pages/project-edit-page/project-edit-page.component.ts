import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Project } from '../../interfaces/projects.interface';
import { State } from '../../interfaces/state.interface';
import { Department } from '../../interfaces/deparment.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-project-edit-page',
  templateUrl: './project-edit-page.component.html',
  providers: [MessageService]
})
export class ProjectEditPageComponent implements OnInit {

  public project: Project | undefined;
  public stateProject: State[] | undefined;
  public departments: Department[] | undefined;

  public projectForm = new FormGroup({
    id_project:     new FormControl(0),
    id_department:  new FormControl(0),
    name_project:   new FormControl(''),
    duration_months:new FormControl(0),
    state_project:  new FormControl('ACT')
  });

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
    ){}

  get currentProject(): Project {
    const project = this.projectForm.value as Project;
    return project;
  }

  ngOnInit(): void {

    this.stateProject = [
      {code:'ACT', name: 'Active'},
      {code:'INA', name: 'Inactive'},
    ];

    this.uploadDepartments();

    if(this.router.url.includes('edit')){
      this.uploadDataById();
    }

  }

  public uploadDepartments():void {
    this.projectService.getDepartments()
        .subscribe(data => {
          this.departments = data;
        });
  }

  public uploadDataById():void {
    this.activatedRoute.params
        .pipe(switchMap(({id}) => this.projectService.getProjectById(id)))
        .subscribe(result => {

          if(!result) return this.router.navigateByUrl('/');

          this.projectForm.reset(result);

          return;
        })
  }

  public onSubmit():void {
    if(this.projectForm.invalid) return;

    this.projectService.addProject(this.currentProject)
        .subscribe(result => {
          this.projectForm.reset(result);
          this.showToast('Data successfuly inserted!');
        });
  }

  public showToast(message: string):void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message
    });
  }

}
