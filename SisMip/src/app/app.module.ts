import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { LoginService } from './login/login.service';
import { NeedAuthGuard } from './guards/need-auth-guard';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './dashboard/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './dashboard/radar-chart/radar-chart.component';
import { LineChartComponent } from './dashboard/line-chart/line-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantioComponent } from './plantio/plantio.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CadastroPlantioComponent } from './plantio/cadastro-plantio/cadastro-plantio.component';
import { PragasComponent } from './pragas/pragas.component';
import { Interceptor } from './shared/https-request-interceptor';
import { CadastroPragaComponent } from './pragas/cadastro-praga/cadastro-praga.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PragaService } from './pragas/praga.service';
import { AppService } from './app.service';
import { HistoricoPlantioComponent } from './historico-plantio/historico-plantio.component';
import { PesticidasUtilizadosComponent } from './historico-plantio/pesticidas-utilizados/pesticidas-utilizados.component';
import { AmostragemComponent } from './historico-plantio/amostragem/amostragem.component';
import { PesticidasComponent } from './pesticidas/pesticidas.component';
import { CadastroPesticidaComponent } from './pesticidas/cadastro-pesticida/cadastro-pesticida.component';
import { PesticidaService } from './pesticidas/pesticidas.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    DashboardComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    LineChartComponent,
    PlantioComponent,
    CadastroPlantioComponent,
    PragasComponent,
    CadastroPragaComponent,
    PesticidasComponent,
    CadastroPesticidaComponent,
    HistoricoPlantioComponent,
    PesticidasUtilizadosComponent,
    AmostragemComponent,
    PesticidasComponent,
    CadastroPesticidaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    ChartsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    Interceptor,
    MatProgressBarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    [RouterModule.forRoot(appRoutes, { useHash: false })]
  ],
  providers: [LoginService, PragaService, PesticidaService, AppService, NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
