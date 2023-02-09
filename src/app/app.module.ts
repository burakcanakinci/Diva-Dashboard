import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ObjectstructureComponent } from './components/objectstructure/objectstructure.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuComponent } from './components/mat-menu/mat-menu.component';
import { MatBadgeModule } from '@angular/material/badge';
import { SirStatisticComponent } from './components/sir-statistic/sir-statistic.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CheckStatisticsComponent } from './components/check-statistics/check-statistics.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { OffeneSirComponent } from './components/offene-sir/offene-sir.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ObjectstructureComponent,
    DashboardComponent,
    LoginModalComponent,
    MatMenuComponent,
    SirStatisticComponent,
    SearchBarComponent,
    PieChartComponent,
    DropdownComponent,
    CheckStatisticsComponent,
    BarChartComponent,
    OffeneSirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule,
    MatTabsModule,
    MatDividerModule,
    MatSelectModule,
    MatBadgeModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
