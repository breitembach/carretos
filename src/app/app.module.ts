import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatSidenavModule,
   MatIconModule, MatListModule, MatGridListModule, MatCardModule, 
   MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule } from '@angular/material';

import { RouterModule } from '@angular/router';


import {ROUTES} from './app.routes'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { FretistasComponent } from './fretistas/fretistas.component';
import { RegisterFretistaComponent } from './register-fretista/register-fretista.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    DashboardComponent,
    TableComponent,
    LoginComponent,
    FretistasComponent,
    RegisterFretistaComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
