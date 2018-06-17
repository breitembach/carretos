import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { MatInput } from '@angular/material';
import { UserBackendService } from './user-backend.service';
import { User, UserObject } from '../shared/models/user.model';
import { UtilsService } from '../shared/services/utils.service';
import { Toast, ToasterContainerComponent, ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    public user: User;
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
    private _cepRegex = /^([0-9]){5}([-])([0-9]){3}$/;
    genders = [
        { value: 'male', viewValue: 'Masculino' },
        { value: 'female', viewValue: 'Feminino' },
    ];

    constructor(
        private _router: Router,
        private _userBackend: UserBackendService,
        private _toasterService: ToasterService,
        private _utilsService: UtilsService
    ) {
        this.user = new UserObject();
    }

    ngOnInit() {
    }

    public saveUser = () => {
        const request = {
            name: this.user.name,
            email: this.user.email,
            password: this.user.password,
            address: this.user.address,
            city: this.user.city,
            district: this.user.district,
            state: this.user.state,
            telephone: this.user.telephone,
            zipcode: this.user.zipcode,
            description: this.user.description,
            gender: this.user.gender
        };
        this._createUser(request);
    }

    private _createUser = (request) => {
        this._userBackend.createUser(request)
            .subscribe(
                result => {
                    if (result) {
                        this._toasterService.pop('success', '', 'Cadastrado com sucesso.');
                        setTimeout(() => {
                            this.redirect('/list-user');
                        }, 5000);
                    }
                },
                error => {
                    this._toasterService.pop('error', '', 'Verifique os campos digitados.');
                }
            );
    }

    public getMask = (mask: string): any[] => {
        return this._utilsService.getMask(mask);
    }

    public addressField = (cep: string) => {
        if (this._cepRegex.test(cep)) {
            this._utilsService.getAddressByCep(this.user.zipcode)
                .subscribe(
                    address => {
                        this.user.address = address.logradouro;
                        this.user.city = address.localidade;
                        this.user.district = address.bairro;
                        this.user.state = address.uf;
                    },
                    error => console.error('[UserComponent.getUser]: ' + error)
                );
        }
    }

    public redirect = (route: string): void => {
        this._router.navigate([route]);
    }

}
