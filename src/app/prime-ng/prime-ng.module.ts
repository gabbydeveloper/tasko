import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    MenuModule,
    SidebarModule,
    ToolbarModule,
    ChartModule,
    CardModule,
    AvatarModule,
    TableModule,
    ProgressSpinnerModule,
    DropdownModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
