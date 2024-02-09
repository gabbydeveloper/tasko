import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Project } from '../interfaces/projects.interface';
import { environment } from '../../../environments/environment';

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

}
