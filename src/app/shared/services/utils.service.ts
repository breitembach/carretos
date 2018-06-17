import { Injectable } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { Toast, ToasterContainerComponent, ToasterService, ToasterConfig } from 'angular2-toaster';
import { Http, Response} from '@angular/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UtilsService {

    private _toasterContainerComponent: ToasterContainerComponent;

    private _toastErrors = {
        'internalError': 'Ocorreu um erro, tente novamente mais tarde.',
        'invalidFields': 'Verifique os campos digitados.',
        'create': 'Erro ao cadastrar.',
        'update': 'Erro ao atualizar.',
        'delete': 'Erro ao deletar.',
        'save': 'Erro ao salvar',
    };
    private _toastSuccess = {
        'create': 'Cadastrado com sucesso.',
        'delete': 'Deletado com sucesso.',
        'update': 'Atualizado com sucesso.',
        'save': 'Salvo com sucesso.'
    };

    private _phoneMask = ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    private _cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    private _cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

    constructor(
        private _toasterService: ToasterService,
        private http: Http,
    ) { }

    public returnToastError = (option) => {
        switch (option) {
            case 'internalError':
                return this._toastErrors.internalError;
            case 'invalidFields':
                return this._toastErrors.invalidFields;
            case 'create':
                return this._toastErrors.create;
            case 'update':
                return this._toastErrors.update;
            case 'delete':
                return this._toastErrors.delete;
            case 'save':
                return this._toastErrors.save;
        }
    }
    public returnToastSuccess = (option) => {
        switch (option) {
            case 'create':
                return this._toastSuccess.create;
            case 'delete':
                return this._toastSuccess.delete;
            case 'update':
                return this._toastSuccess.update;
            case 'save':
                return this._toastSuccess.save;
        }
    }

    public getMask = (maskType: string): any[] => {
        return this[`_${maskType}Mask`];
    }

    public showToast = (type: string, title: string, messageType: string) => {
        let toastMessage;
        if (type === 'error') {
            toastMessage = this.returnToastError(messageType);
        } else {
            toastMessage = this.returnToastSuccess(messageType);
        }
        this._toasterService.pop(type, title, toastMessage);
    }

    private _serverError = (err: any, functionName: string) => {
        console.error('[SharedDataService.' + functionName + '] error:', err);
        if (err instanceof Response) {
            return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(err || 'backend server error');
    }

    public getAddressByCep = (cep: string): Observable<any> => {
        const endpoint = 'https://viacep.com.br/ws/' + cep + '/json/';

        if (cep.length) {
            return this.http.get(endpoint)
                .map(res => {
                    return res.json();
                })
                .do(data => console.log('[UtilsService.getAddressByCep] server data: ', data))
                .catch(err => this._serverError(err, 'getAddressByCep'));
        }
        return new Observable<any>();

    }
}
