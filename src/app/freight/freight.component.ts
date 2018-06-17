import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { MatInput } from '@angular/material';
import { FreightBackendService } from './freight-backend.service';
import { Freight, FreightObject } from '../shared/models/freight.model';
import { Toast, ToasterContainerComponent, ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
    selector: 'app-freight',
    templateUrl: './freight.component.html',
    styleUrls: ['./freight.component.scss']
})
export class FreightComponent implements OnInit {
    public freight: Freight;
    public toasterconfig: ToasterConfig =
        new ToasterConfig({
            showCloseButton: false,
            tapToDismiss: true,
            timeout: 3000,
            animation: 'slideUp',
            limit: 1,
            positionClass: 'toast-center',
        });
    public mask;

    regionServeds = [
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
        private _router: Router,
        private _freightBackend: FreightBackendService,
        private _toasterService: ToasterService
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
                        this._toasterService.pop('success', '', 'Cadastrado com sucesso.');
                        setTimeout(() => {
                            this.redirect('/');
                        }, 5000);
                    }
                },
                error => {
                    this._toasterService.pop('error', '', 'Verifique os campos digitados.');
                }
            );
    }

    public redirect = (route: string): void => {
        this._router.navigate([route]);
    }
}
