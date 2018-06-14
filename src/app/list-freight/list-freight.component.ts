import { Component, OnInit } from '@angular/core';
import { ListFreightBackendService } from './list-freight-backend.service';
import { Freight } from '../shared/model/freight.model';

@Component({
  selector: 'app-list-freight',
  templateUrl: './list-freight.component.html',
  styleUrls: ['./list-freight.component.scss']
})
export class ListFreightComponent implements OnInit {

  public freights: Freight;

  constructor(
    private _listFreightBackend: ListFreightBackendService
  ) { }

  ngOnInit() {
      this._getAllFreight();
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
}
