import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar-admin.component.html',
  styleUrl: './navbar-admin.component.css'
})
export class NavbarAdminComponent {
  textButton = 'LogOut'
  authService = inject(AuthService)
  router = inject(Router)

  onLogOut() {
    this.authService.logout()
    localStorage.removeItem('token')
    this.router.navigateByUrl('auth')
  }
}
