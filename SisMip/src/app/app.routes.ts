import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NeedAuthGuard } from './guards/need-auth-guard';
import { LoginComponent } from './login/login.component';
import { PlantioComponent } from './plantio/plantio.component';
import { CadastroPlantioComponent } from './plantio/cadastro-plantio/cadastro-plantio.component';
import { PragasComponent } from './pragas/pragas.component';
import { CadastroPragaComponent } from './pragas/cadastro-praga/cadastro-praga.component';
import { InseticidasComponent } from './inseticidas/inseticidas.component';
import { CadastroInseticidaComponent } from './inseticidas/cadastro-inseticida/cadastro-inseticida.component';
import { HistoricoPlantioComponent } from './historico-plantio/historico-plantio.component';

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
        path: 'plantio/cadastro',
        component: CadastroPlantioComponent,
        canActivate: [NeedAuthGuard],
        data: {
            title: 'Cadastrar Plantio',
            icon: 'control_point'
        }
    },
    {
        path: 'plantio/detalhes/:id',
        component: CadastroPlantioComponent,
        canActivate: [NeedAuthGuard],
        data: {
            title: 'Detalhes',
            icon: 'eco'
        }
    },
    {
        path: 'historicoplantio',
        component: HistoricoPlantioComponent,
        canActivate: [NeedAuthGuard],
        data: {
            title: 'Historico de Plantação',
            icon: 'eco'
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
        path: 'pragas/cadastro',
        component: CadastroPragaComponent,
        canActivate: [NeedAuthGuard],
        data: {
            title: 'Cadastrar Praga',
            icon: 'control_point'
        }
    },
    {
        path: 'pragas/detalhes/:id',
        component: CadastroPragaComponent,
        canActivate: [NeedAuthGuard],
        data: {
            title: 'Detalhes',
            icon: 'pest_control'
        }
    },
    {
        path: 'inseticidas',
        component: InseticidasComponent,
        canActivate: [NeedAuthGuard],
        data: {
            title: 'Inseticidas',
            icon: 'warning'
        }
    },
    {
        path: 'inseticidas/cadastro',
        component: CadastroInseticidaComponent,
        canActivate: [NeedAuthGuard],
        data: {
            title: 'Cadastrar Inseticida',
            icon: 'warning'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login',
            icon: 'pest_control'
        }
    }
];
