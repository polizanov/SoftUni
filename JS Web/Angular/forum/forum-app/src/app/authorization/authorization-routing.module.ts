import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from '../core/guards/acces.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
        canActivate: [AccessGuard],
        data: {
            isAuth: false,
            redirectUrl: "/" 
        }
    },
    {
        path: "register",
        component: RegisterComponent,
        canActivate: [AccessGuard],
        data: {
            isAuth: false,
            redirectUrl: "/" 
        }
    },
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [AccessGuard],
        data: {
            isAuth: true,
            redirectUrl: "/login" 
        }
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }