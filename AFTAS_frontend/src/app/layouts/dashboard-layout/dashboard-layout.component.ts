import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/core/models/User.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { selectUser } from 'src/app/store/user/user.selectors';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
})
export class DashboardLayoutComponent {
  constructor(private cookiesService: CookieService, private authService: AuthService , private router: Router) {}
  user: User | null = {
    id: 0,
    fullName: '',
    dateOfBirth: null,
    adress: '',
    email: '',
    password: '',
    role: '',
    accessionDate: '',
    nationality: '',
    identityDocument: '',
    identityNumber: '',
  };
  ngOnInit() {
    this.user = this.authService.getAuthUser();
  }

  logout(): void {
    this.authService.logout().subscribe(
      () => {
        this.cookiesService.deleteAll();
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error logging out:', error);
      }
    );
  }

  
  sideBar() {
    var side = document.querySelectorAll('.side');
    var sideBar = document.querySelectorAll('.sideBar');
    var image = document.querySelectorAll('.image');
    image[0].classList.toggle('w-8');
    image[0].classList.toggle('h-8');
    if (sideBar[0].classList.contains('w-[60px]')) {
      sideBar[0].classList.replace('max-sm:ml-[-58px]', 'max-sm:ml-0');
      sideBar[0].classList.replace('w-[60px]', 'w-60');
    } else {
      sideBar[0].classList.replace('w-60', 'w-[60px]');
      sideBar[0].classList.replace('max-sm:ml-0', 'max-sm:ml-[-58px]');
    }
    for (var i in side) {
      if (side[i].classList) {
        side[i].classList.toggle('hidden');
      }
    }
  }
}
