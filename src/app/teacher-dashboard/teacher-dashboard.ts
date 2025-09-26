import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'teacher-dashboard',
  standalone: true,
  templateUrl: './teacher-dashboard.html',
  styleUrls: ['./teacher-dashboard.css']
})
export class TeacherDashboard implements OnInit {
  isSidebarOpen = false;
  username: string = "Teacher";

  constructor(private router: Router) {}

  ngOnInit() {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      this.username = user.name || "Teacher";
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/');
  }

  navigate(path: string) {
    this.router.navigate([`teacher/${path}`]);
  }
}
