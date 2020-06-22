import { Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NeedAuthGuard } from './guards/need-auth-guard';
import { LoginComponent } from './login/login.component';
import { PlantioComponent } from './plantio/plantio.component';
import { CadastroPlantioComponent } from './Plantio/cadastro-plantio/cadastro-plantio.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [NeedAuthGuard] // <---- connected Route with guard
    },
    {
        path: 'plantio',
        component: PlantioComponent,
        canActivate: [NeedAuthGuard] // <---- connected Route with guard
    },
    {
        path: 'cadastroplantio',
        component: CadastroPlantioComponent,
        canActivate: [NeedAuthGuard] // <---- connected Route with guard
    },
    {
        path: 'login',
        component: LoginComponent
    },
];