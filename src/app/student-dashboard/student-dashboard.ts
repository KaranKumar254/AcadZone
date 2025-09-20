import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Layout } from "../layout/layout";

@Component({
  selector: 'student-dashboard',
  standalone: true,
  templateUrl: './student-dashboard.html',
  styleUrls: ['./student-dashboard.css'],
})
export class StudentDashboard {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([`student/${path}`]);
  }
}
