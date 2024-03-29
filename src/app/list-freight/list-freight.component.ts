import { Component, OnInit } from '@angular/core';
import { ListFreightBackendService } from './list-freight-backend.service';
import { Freight } from '../shared/models/freight.model';
import { Router } from '@angular/router';
import { SharedVariablesService } from '../shared/services/shared-variavles.service';

@Component({
  selector: 'app-list-freight',
  templateUrl: './list-freight.component.html',
  styleUrls: ['./list-freight.component.scss']
})
export class ListFreightComponent implements OnInit {

  public freights: Freight;
  private regionFilter: string;

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
    private _listFreightBackend: ListFreightBackendService,
    private _router: Router,
    private _sharedVariablesService: SharedVariablesService,

  ) {
    this._getAllFreight();
  }

  ngOnInit() {

  }

  private _getAllFreight = () => {
    this._listFreightBackend.getAllFreight()
      .subscribe(
        freights => {
          console.log(freights);
          this.freights = freights;
        },
        error => console.error('[ListFreightComponent._getAllFreight]: ' + error)
      );
  }

  public setFilterRegion = (region: string) => {
      this._sharedVariablesService.setFilter(region);

      this.redirect('/filter-region');
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
