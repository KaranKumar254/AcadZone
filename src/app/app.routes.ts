import { Routes } from '@angular/router';
import { Login } from './login/login';
import { StudentDashboard } from './student-dashboard/student-dashboard';
import { TeacherDashboard } from './teacher-dashboard/teacher-dashboard';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Login
  { path: 'login', component: Login },

  // Student
  { path: 'student', component: StudentDashboard },

  // Teacher
  { path: 'teacher', component: TeacherDashboard },

  // Admin
  { path: 'admin', component: AdminDashboard },
];
