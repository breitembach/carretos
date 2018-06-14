import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';
import { UUID } from 'angular2-uuid';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

@Injectable()
export class FreightBackendService {
    private _carretosApi: string;

    constructor(
        private http: Http,
    ) {
        this._carretosApi = environment.carretosApiUrl;
    }

    private _serverError = (err: any, functionName: string) => {
        console.error(functionName, ' error:', err);
        if (err instanceof Response) {
            return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(err || 'backend server error');
    }


    public createFreight = (request: any): Observable<any> => {
        const endpoint = `${this._carretosApi}freight`;
        return this.http.post(endpoint, request)
            .map(res => {
                return res.json;
            });
    }

    public getFreight = (freightId: UUID): Observable<any> => {
        const endpoint = `${this._carretosApi}freight/${freightId}`;
        return this.http.get(endpoint)
            .map(res => {
                return res.json;
            });
    }

}
