import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthorizationService } from "src/app/authorization/authorization.service";

@Injectable()
export class AccessGuard implements CanActivate {

    constructor(
        private userService: AuthorizationService,
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (route.data.isAuth == !!this.userService.token) { return true };

        return this.router.parseUrl(route.data.redirectUrl || "/");
    }

}