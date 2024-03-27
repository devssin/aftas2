import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models/User.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { register } from 'src/app/store/user/user.action';
import { selectUserState } from 'src/app/store/user/user.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private store: Store, private router: Router,private authService:AuthService) {}
  info: User = {
    id: 0,
    dateOfBirth: null,
    adress: '',
    password: '',
    email: '',
    role: 'Adherent',
    accessionDate: '',
    nationality: '',
    identityDocument: '',
    identityNumber: '',
    fullName: ''
  };
  error: String = '';
  login() {
    this.store.dispatch(register({ user: this.info}));
    setTimeout(() => {
      this.store.select(selectUserState).subscribe((res) => {
        if (res.token && res.user) {
          this.authService.setAuthInfo(res.token,res.user);
          this.router.navigate(['/']);
        
        } else {
          this.error = 'email or password incorrect';
        }
      });
    }, 1000);
  }
}
