import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Project } from '../interfaces/projects.interface';
import { environment } from '../../../environments/environment';
import { Department } from '../interfaces/deparment.interface';

@Injectable({providedIn: 'root'})
export class ProjectService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createCredentials(): HttpHeaders {

    const username:string = 'usertest';
    const password:string = '123456';

    const base64Credentials = btoa(`${username}:${password}`);
    // Crear el encabezado de autorización
    const headers = new HttpHeaders({
      'Authorization': `Basic ${base64Credentials}`
    });
    return headers;
  }


  getProjects():Observable<Project[]>{
    const headers = this.createCredentials();
    return this.http.get<Project[]>(`${ this.baseUrl }/projects`, {headers: headers});
  }

  getProjectById(id: number): Observable<Project | undefined> {
    const headers = this.createCredentials();
    return this.http.get<Project>(`${ this.baseUrl }/projects/${ id }`, {headers: headers})
           .pipe(catchError(error => of(undefined)));
  }

  getDepartments():Observable<Department[]>{
    const headers = this.createCredentials();
    return this.http.get<Department[]>(`${ this.baseUrl }/departments`, {headers: headers});
  }

  addProject(project: Project): Observable<Project>{
    const headers = this.createCredentials();
    return this.http.post<Project>(`${ this.baseUrl }/projects`, project, {headers: headers});
  }

  updateProject(project: Project): Observable<Project>{
    const headers = this.createCredentials();

    if(!project.id_project) throw Error('Project id is required');

    return this.http.patch<Project>(`${ this.baseUrl }/projects/${ project.id_project }`, project);
  }


}
