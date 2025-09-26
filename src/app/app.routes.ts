import { Routes } from '@angular/router';
import { StudentDashboard } from './student-dashboard/student-dashboard';
import { TeacherDashboard } from './teacher-dashboard/teacher-dashboard';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'student', component: StudentDashboard },
  { path: 'teacher', component: TeacherDashboard },
  { path: 'admin', component: AdminDashboard }
];
