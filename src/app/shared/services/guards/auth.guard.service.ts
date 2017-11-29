import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private rota: Router, private authService: AuthService) {

  }

/**
 * Metódo que guarda a rota, verifica se o usuário está logado
 *
 * @param {ActivatedRouteSnapshot} route
 * @param {RouterStateSnapshot} state
 * @returns {(boolean |
 *   Observable<boolean> | Promise<boolean>)}
 * @memberof AuthGuardService
 */
public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
  Observable<boolean> | Promise<boolean> {

    console.log(state.url, this.authService.getAutenticado());

    if(this.verificaLogin() == true){
      return true;
    }

    this.rota.navigate(['/auth']);
    return false;


  }// implementa canActivate

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    if(this.verificaLogin() == true)
      return true;

    this.rota.navigate(['/auth']);
    return false;
  }

  public verificaLogin() {
    if(this.authService.getAutenticado() == true)
      return true;
    return false;
  }

}// Fim do da guarda de rota

