import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule
} from '@angular/material';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { TextMaskModule } from 'angular2-text-mask';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { ListFreightComponent } from './list-freight/list-freight.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserComponent } from './user/user.component';
import { FreightComponent } from './freight/freight.component';
import { DetailFreightComponent } from './detail-freight/detail-freight.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { FilterRegionComponent } from './filter-region/filter-region.component';

import { UserBackendService } from './user/user-backend.service';
import { FreightBackendService } from './freight/freight-backend.service';
import { ListFreightBackendService } from './list-freight/list-freight-backend.service';
import { ListUserBackendService } from './list-user/list-user-backend.service';
import { DetailFreightBackendService } from './detail-freight/detail-freight-backend.service';
import { DetailUserBackendService } from './detail-user/detail-user-backend.service';
import { FilterRegionBackendService } from './filter-region/filter-region-backend.service';
import { SharedVariablesService } from './shared/services/shared-variavles.service';
import { UtilsService } from './shared/services/utils.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ListFreightComponent,
    UserComponent,
    FreightComponent,
    ListUserComponent,
    DetailFreightComponent,
    DetailUserComponent,
    FilterRegionComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TextMaskModule,
    ToasterModule,
  ],
  providers: [
    UserBackendService,
    FreightBackendService,
    ListFreightBackendService,
    ListUserBackendService,
    DetailFreightBackendService,
    DetailUserBackendService,
    FilterRegionBackendService,
    SharedVariablesService,
    UtilsService,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
