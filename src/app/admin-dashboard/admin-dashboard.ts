import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboard implements OnInit {
  isSidebarOpen = false;
  username: string = "Admin";

  constructor(private router: Router) {}

  ngOnInit() {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      this.username = user.name || "Admin";
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
    this.router.navigate([`admin/${path}`]);
  }
}
