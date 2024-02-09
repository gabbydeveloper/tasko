import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPanelRoutingModule } from './main-panel-routing.module';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { ExecutorPageComponent } from './pages/executor-page/executor-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProjectEditPageComponent } from './pages/project-edit-page/project-edit-page.component';
import { TaskEditPageComponent } from './pages/task-edit-page/task-edit-page.component';
import { ExecutorEditPageComponent } from './pages/executor-edit-page/executor-edit-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { ProjectStatePipe } from './pipes/project-state.pipe';
import { DefaultPipePipe } from './pipes/default-pipe.pipe';
import { DefaultNumberPipePipe } from './pipes/default-number-pipe.pipe';


@NgModule({
  declarations: [
    ProjectPageComponent,
    TaskPageComponent,
    ExecutorPageComponent,
    DashboardPageComponent,
    ProjectEditPageComponent,
    TaskEditPageComponent,
    ExecutorEditPageComponent,
    LayoutPageComponent,
    ProjectStatePipe,
    DefaultPipePipe,
    DefaultNumberPipePipe
  ],
  imports: [
    CommonModule,
    MainPanelRoutingModule,
    FormsModule,
    PrimeNgModule
  ]
})
export class MainPanelModule { }
