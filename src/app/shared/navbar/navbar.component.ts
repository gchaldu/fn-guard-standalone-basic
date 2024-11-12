import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.AuthService.login()
      this.textButton = 'LogOut'
    }
  }

  AuthService = inject(AuthService)
  router = inject(Router)
  textButton = 'Login'

  onLogin() {
    this.router.navigate(['auth'])
  }
}
