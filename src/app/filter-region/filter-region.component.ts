import { Component, OnInit } from '@angular/core';
import { FilterRegionBackendService } from './filter-region-backend.service';
import { Freight } from '../shared/models/freight.model';
import { Router } from '@angular/router';
import { SharedVariablesService } from '../shared/services/shared-variavles.service';

@Component({
  selector: 'app-filter-region',
  templateUrl: './filter-region.component.html',
  styleUrls: ['./filter-region.component.scss']
})
export class FilterRegionComponent implements OnInit {

  public freights: any;
  private regionFilter: string;
  private region: string;
  public error: boolean;

  filters = [
    { value: 'barreiro', viewValue: 'Região Barreiro' },
    { value: 'centro-sul', viewValue: 'Região Centro Sul' },
    { value: 'leste', viewValue: 'Região Leste' },
    { value: 'nordeste', viewValue: 'Região Nordeste' },
    { value: 'noroeste', viewValue: 'Região Noroeste' },
    { value: 'norte', viewValue: 'Região Norte' },
    { value: 'oeste', viewValue: 'Região Oeste' },
    { value: 'pampulha', viewValue: 'Região Pampulha' },
    { value: 'venda-nova', viewValue: 'Região Venda Nova' },
  ];

  constructor(
    private _filterRegionBackend: FilterRegionBackendService,
    private _router: Router,
    private _sharedVariablesService: SharedVariablesService,

  ) {
    this.region = this._sharedVariablesService.getFilter();
    this.error = false;
    this._getFilterRegion();
  }

  ngOnInit() {
  }

  private _getFilterRegion = () => {
    this._filterRegionBackend.getFilterRegion(this.region)
      .subscribe(
        freights => {
          this.error = false;
          this.freights = freights;
          this.freights = Array.of(freights);
        },
        error => {
          console.error('[FilterRegionComponent.getFilterRegion]: ' + error);
          this.error = true;
        }
      );
  }

  public filterButton = (value: string) => {
    if (this.region === value) {
      return 'filter-button-active';
    } else {
      return 'filter-button';
    }
  }

  public setFilterRegion = (region: string) => {

    if (region === this._sharedVariablesService.getFilter()) {
      console.log('entrou no if');
      this.region = 'undefined';
      this._sharedVariablesService.setFilter('undefined');
      this.redirect('/list-freight');
    } else {
      this.region = region;
      this._sharedVariablesService.setFilter(region);
      this._getFilterRegion();
    }
  }

  public setFreight = (freightId: string) => {
    this._sharedVariablesService.setFreight(freightId);
    console.log(freightId);
    this.redirect('/detail-freight');
  }

  public redirect = (route: string): void => {
    this._router.navigate([route]);
  }
}
