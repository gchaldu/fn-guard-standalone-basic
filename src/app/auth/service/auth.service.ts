import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlBase:string = 'http://localhost:3000'

  http = inject(HttpClient)

  estoyLogeado: boolean = false;

  login(): boolean {
    return this.estoyLogeado = true;
  }

  logout(): boolean {
    return this.estoyLogeado = false;
  }

  login2(username: string, password:string): Observable<User>{
    return this.http.get<User>(`${this.urlBase}/users?username=${username}&password=${password}`)
  }


}
