import { inject } from "@angular/core"
import { Router } from "@angular/router"

export const authGuardFn = () => {
  const router = inject(Router)

  if (localStorage.getItem("token")) {
    return true;
  } else {
    router.navigateByUrl('access-denied');
    return false;
  }
}
