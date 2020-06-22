import { Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NeedAuthGuard } from './guards/need-auth-guard';
import { LoginComponent } from './login/login.component';
import { PlantioComponent } from './plantio/plantio.component';
import { CadastroPlantioComponent } from './Plantio/cadastro-plantio/cadastro-plantio.component';
import { PragasComponent } from './pragas/pragas.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [NeedAuthGuard], // <---- connected Route with guard
        data: {
            title: 'Dashboard',
            icon: 'bar_chart'
        }
    },
    {
        path: 'plantio',
        component: PlantioComponent,
        canActivate: [NeedAuthGuard],
        data: {
            title: 'Plantio',
            icon: 'eco'
        }
    },
    {
        path: 'cadastroplantio',
        component: CadastroPlantioComponent,
        canActivate: [NeedAuthGuard],
        data: {
            title: 'Cadastrar Plantio',
            icon: 'control_point'
        }
    },
    {
        path: 'pragas',
        component: PragasComponent,
        canActivate: [NeedAuthGuard],
        data: {
            title: 'Pragas',
            icon: 'pest_control'
        }
    },
    {
        path: 'login',
        component: LoginComponent
    },
];