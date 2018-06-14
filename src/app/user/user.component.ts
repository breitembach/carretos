import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { MatInput } from '@angular/material';
import { UserBackendService } from './user-backend.service';
import { User, UserObject } from '../shared/model/user.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    public user: User;

    constructor(
        private _router: Router,
        private _userBackend: UserBackendService
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
            telephone: this.user.telephone,
            zipcode: this.user.zipcode,
            description: this.user.description
        };
        this._createUser(request);
    }

    private _createUser = (request) => {
        this._userBackend.createUser(request)
            .subscribe(
                result => {
                    if (result) {
                        this.redirect('/');
                        console.log('Usuario criado com sucesso!');
                    }
                }
            );
    }
    public redirect = (route: string): void => {
        this._router.navigate([route]);
    }
}
