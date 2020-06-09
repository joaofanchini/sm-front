import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { appRoutes } from './app.routes'
import { LoginService } from './login/login.service';
import { NeedAuthGuard } from './guards/need-auth-guard';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './dashboard/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './dashboard/radar-chart/radar-chart.component';
import { LineChartComponent } from './dashboard/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    DashboardComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    LineChartComponent
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
    [RouterModule.forRoot(appRoutes, { useHash: false })]
  ],
  providers: [LoginService, NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
