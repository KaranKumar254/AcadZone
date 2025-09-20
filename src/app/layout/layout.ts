import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {
  loggedUser: any = null;
  private isBrowser = false;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      const u = localStorage.getItem('loggedUser');
      if (u) this.loggedUser = JSON.parse(u);
    }
  }

  onLogOut() {
    if (this.isBrowser) {
      localStorage.removeItem('loggedUser');
    }
    this.router.navigateByUrl('/login');
  }
}
