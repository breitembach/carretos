import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { MatInput } from '@angular/material';
import { FreightBackendService } from './freight-backend.service';
import { Freight, FreightObject } from '../shared/model/freight.model';

@Component({
    selector: 'app-freight',
    templateUrl: './freight.component.html',
    styleUrls: ['./freight.component.scss']
})
export class FreightComponent implements OnInit {
    public freight: Freight;

    constructor(
        private _router: Router,
        private _freightBackend: FreightBackendService
    ) {
        this.freight = new FreightObject();
    }

    ngOnInit() {
    }

    public saveFreight = () => {
        const request = {
            title: this.freight.title,
            email: this.freight.email,
            password: this.freight.password,
            nameCompany: this.freight.nameCompany,
            regionServed: this.freight.regionServed,
            telephone: this.freight.telephone,
            description: this.freight.description,
        };
        this._createFreight(request);
    }

    private _createFreight = (request) => {
        this._freightBackend.createFreight(request)
            .subscribe(
                result => {
                    if (result) {
                        console.log('Freight criado com sucesso!');
                    }
                }
            );
    }
}
