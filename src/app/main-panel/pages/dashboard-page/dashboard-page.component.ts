import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/projects.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styles: ``
})
export class DashboardPageComponent implements OnInit {

  public projects: Project[] = [];
  public data: any;
  public options: any;

  constructor(private projectService: ProjectService){}

  ngOnInit(): void {


    this.projectService.getProjects()
      .subscribe(projects => {

        this.projects = projects;

        const documentStyle = getComputedStyle(document.documentElement);

        let labelsProject: string[] = [];
        let advanceProject: number[] = [];

        for(let i=0;i<projects.length;i++)
        {
          labelsProject[i] = projects[i].project_name;
          advanceProject[i] = projects[i].percentage;
        }

        this.data = {
            labels: labelsProject,
            datasets: [
                {
                    label: 'Project advance',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: advanceProject
                }
            ]
        };

        this.options = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 1.2
        };

      });


  }


}
