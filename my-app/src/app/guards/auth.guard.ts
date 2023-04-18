import { ActivatedRouteSnapshot, CanActivateChildFn, RouterStateSnapshot } from "@angular/router";
import { Injector } from "@angular/core";
import { AuthService } from "../services/auth.service";

export const canActivateChildProduct: CanActivateChildFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      const injector = Injector.create({providers: [{provide: AuthService, deps: []}]}).get(AuthService);

      return injector.hasPermission('auth');
    };
