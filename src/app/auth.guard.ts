import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const loacalData=localStorage.getItem("token");
  const router=inject(Router);
  if(loacalData!=null){
    return true;

  }
  else{
    router.navigateByUrl('/login')
  }
  return true;
};
