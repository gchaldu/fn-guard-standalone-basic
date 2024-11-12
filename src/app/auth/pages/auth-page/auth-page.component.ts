import { Component } from '@angular/core';
import { AuthComponent } from '../../components/auth/auth.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [AuthComponent, NavbarComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

}
