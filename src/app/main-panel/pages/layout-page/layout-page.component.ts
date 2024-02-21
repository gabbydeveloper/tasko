import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent implements OnInit {

  public items: MenuItem[] = [];
  public sidebarVisible1: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}


  ngOnInit() {
    this.items = [
      {
        label: 'System options',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-chart-line',
            routerLink: 'dashboard',
            command: () => { this.sidebarVisible1 = false }
          },
          {
            label: 'Projects',
            icon: 'pi pi-folder',
            routerLink: 'project',
            command: () => { this.sidebarVisible1 = false }
          },
          {
            label: 'Tasks',
            icon: 'pi pi-check-square',
            routerLink: 'task',
            command: () => { this.sidebarVisible1 = false }
          },
          {
            label: 'Executors',
            icon: 'pi pi-user',
            routerLink: 'executor',
            command: () => { this.sidebarVisible1 = false }
          }
        ]
      },
      {
        label: 'Others',
        items:[
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            routerLink: '',
            command: () => { this.sidebarVisible1 = false }
          },
          {
            label: 'Help',
            icon: 'pi pi-question',
            routerLink: '',
            command: () => { this.sidebarVisible1 = false }
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            routerLink: '',
            command: () => { this.onLogout() }
          }
        ]
      }
    ];

  }

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  onLogout():void{
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
