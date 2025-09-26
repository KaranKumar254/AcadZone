import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'student-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './student-dashboard.html',
  styleUrls: ['./student-dashboard.css'],
})
export class StudentDashboard implements OnInit {
  username: string = 'Student';
  isSidebarOpen: boolean = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.username = localStorage.getItem('username') || 'Student';
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.username = localStorage.getItem('username') || 'Student';
        }
      });
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('username');
      localStorage.removeItem('loggedUser');
    }
    this.router.navigate(['/login']);
  }
}
