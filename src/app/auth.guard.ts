import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const loacalData=localStorage.getItem("token");
  const sessionData=sessionStorage.getItem("token");
  const router=inject(Router);
  if(loacalData!=null ||  sessionData !=null){
    return true;

  }
  else{
    router.navigateByUrl('/login')
  }
  return true;
};
