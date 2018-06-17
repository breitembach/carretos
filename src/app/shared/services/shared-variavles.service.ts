import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { User, Freight } from '../models/models';

@Injectable()
export class SharedVariablesService {

    private _userId;
    private _freightId;
    private _regionFilter;

    public setUser = (userId): void => {
        this._userId = userId;
    }

    public getUser = (): any => {
        return this._userId;
    }

    public setFreight = (freightId): void => {
        this._freightId = freightId;
    }

    public getFreight = (): any => {
        return this._freightId;
    }

    public setFilter = (region): void => {
        this._regionFilter = region;
        console.log('this._regionFilter');
        console.log(this._regionFilter);
    }

    public getFilter = (): any => {
        return this._regionFilter;
    }
}
