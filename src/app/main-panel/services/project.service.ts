import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Project } from '../interfaces/projects.interface';
import { environment } from '../../../environments/environment';
import { Department } from '../interfaces/deparment.interface';

@Injectable({providedIn: 'root'})
export class ProjectService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(`${ this.baseUrl }/projects`);
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return this.http.get<Project>(`${ this.baseUrl }/projects/${ id }`)
           .pipe(catchError(error => of(undefined)));
  }

  getDepartments():Observable<Department[]>{
    return this.http.get<Department[]>(`${ this.baseUrl }/departments`);
  }

  addProject(project: Project): Observable<Project>{
    return this.http.post<Project>(`${ this.baseUrl }/projects`, project);
  }

  updateProject(project: Project): Observable<Project>{
    if(!project.id) throw Error('Project id is required');

    return this.http.patch<Project>(`${ this.baseUrl }/projects/${ project.id }`, project);
  }


}
