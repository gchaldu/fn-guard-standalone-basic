import { inject } from "@angular/core"
import { AuthService } from "../service/auth.service"
import { Router } from "@angular/router"

export const authGuardFnLogOut = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if (!localStorage.getItem("token")) {
    return true;
  } else {
    router.navigateByUrl('home');
    return false;
  }
}
