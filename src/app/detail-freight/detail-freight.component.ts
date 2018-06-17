import { Component, OnInit } from '@angular/core';
import { DetailFreightBackendService } from './detail-freight-backend.service';
import { Freight } from '../shared/models/freight.model';
import { SharedVariablesService } from '../shared/services/shared-variavles.service';

@Component({
  selector: 'app-detail-freight',
  templateUrl: './detail-freight.component.html',
  styleUrls: ['./detail-freight.component.scss']
})
export class DetailFreightComponent implements OnInit {

  public freight: Freight;
  public freightId: string;

  constructor(
    private _detailtFreightBackend: DetailFreightBackendService,
    private _sharedVariablesService: SharedVariablesService
  ) { }

  ngOnInit() {
      this.freightId = this._sharedVariablesService.getFreight();
      this._getFreightById();
  }

  private _getFreightById = () => {
    this._detailtFreightBackend.getFreightById(this.freightId)
      .subscribe(
        freight => {
          console.log(freight);
          this.freight = freight;
        },
        error => console.error('[DetailFreightComponent.__getFreightById]: ' + error)
      );
  }
}
