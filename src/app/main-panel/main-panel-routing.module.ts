import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { ExecutorPageComponent } from './pages/executor-page/executor-page.component';
import { TaskEditPageComponent } from './pages/task-edit-page/task-edit-page.component';
import { ProjectEditPageComponent } from './pages/project-edit-page/project-edit-page.component';
import { ExecutorEditPageComponent } from './pages/executor-edit-page/executor-edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'project', component: ProjectPageComponent },
      { path: 'task', component: TaskPageComponent },
      { path: 'executor', component: ExecutorPageComponent },
      { path: 'project-edit/:id', component: ProjectEditPageComponent },
      { path: 'task-edit/:id', component: TaskEditPageComponent},
      { path: 'executor-edit/:id', component: ExecutorEditPageComponent },
      { path: '**', component: DashboardPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPanelRoutingModule { }
