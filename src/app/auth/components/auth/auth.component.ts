import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  fb = inject(FormBuilder)
  formulario = this.fb.nonNullable.group({
    username: [''],
    password: ['']
  })

  authService = inject(AuthService)
  router = inject(Router)

  onLogin(){
    const user = this.formulario.getRawValue()
    console.log(this.formulario.controls['username'].value);
    this.authService.login2(user.username, user.password).subscribe(
      {
        next: (user) => {
          if(user){
            this.authService.estoyLogeado=true;
            localStorage.setItem('token', "123,abc.%&$")
            this.router.navigateByUrl('admin')
          }else{
            this.authService.estoyLogeado=false;
          }
        }
      }
    )
  }

}
