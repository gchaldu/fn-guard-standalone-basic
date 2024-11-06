import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estoyLogeado: boolean = false;

  login(): boolean {
    return this.estoyLogeado = true;
  }

  logout(): boolean {
    return this.estoyLogeado = false;
  }
}
