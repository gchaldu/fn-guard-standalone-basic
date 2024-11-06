import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  AuthService = inject(AuthService);
  router = inject(Router)
  textButton = 'Login'
  onLogin() {
    if (this.textButton === 'Login') {
      this.AuthService.login()
      this.textButton = 'LogOut'
      this.router.navigate(['admin'])
    } else {
      this.AuthService.logout()
      this.textButton = 'Login'
      this.router.navigateByUrl('home')
    }

  }

  onLogOut() {
    this.AuthService.logout()
    this.textButton = 'Login'
  }
}
