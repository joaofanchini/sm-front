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
import { DialogAmostragemComponent } from './historico-plantio/amostragem/dialog-amostragem/dialog-amostragem.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogPesticidaUtilizadoComponent } from './historico-plantio/pesticidas-utilizados/dialog-pesticida-utilizado/dialog-pesticida-utilizado.component';
import { BarChartHorizontalComponent } from './dashboard/bar-chart-horizontal/bar-chart-horizontal.component';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    DashboardComponent,
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
    CadastroPesticidaComponent,
    DialogAmostragemComponent,
    DialogPesticidaUtilizadoComponent,
    BarChartHorizontalComponent
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
    NgApexchartsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    Interceptor,
    MatProgressBarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDialogModule,
    [RouterModule.forRoot(appRoutes, { useHash: false })]
  ],
  providers: [LoginService, PragaService, PesticidaService, AppService, NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
