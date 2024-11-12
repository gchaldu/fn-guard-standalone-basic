import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../shared/navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [NavbarAdminComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
