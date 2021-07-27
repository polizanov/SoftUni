import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from '../core/guards/acces.guard';
import { DetailsComponent } from './details/details.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeComponent } from './theme.component';


const routes: Routes = [
    {
        path: "themes",
        component: ThemeComponent
    },
    {
        path: 'new-theme',
        component: NewThemeComponent,
        canActivate: [AccessGuard],
        data: {
            isAuth: true,
            redirectUrl: "/login"
        }
    },
    {
        path: 'details',
        children: [{
            path: ':themeId',
            component: DetailsComponent
        }]
       
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }