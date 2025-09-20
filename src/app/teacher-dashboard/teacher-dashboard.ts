import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'teacher-dashboard',
  standalone: true,
  templateUrl: './teacher-dashboard.html',
  styleUrls: ['./teacher-dashboard.css']
})
export class TeacherDashboard {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([`teacher/${path}`]);
  }
}
