import { CanActivateFn } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  if (state) {
    return true;
  } else {
    return false;
  }
};
// oh-my-posh init pwsh --config 'C:\Users\Dell\AppData\Local\Programs\oh-my-posh\themes\jandedobbeleer.omp.json' | Invoke-Expression
