export interface Freight {
    title?: string;
    description?: string;
    nameCompany?: string;
    regionServed?: string;
    telephone?: string;
    email?: string;
    password?: string;
}

export class FreightObject implements Freight { }
