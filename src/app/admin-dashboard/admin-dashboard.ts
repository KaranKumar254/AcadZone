import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboard {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([`admin/${path}`]);
  }
}
