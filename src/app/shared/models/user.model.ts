export interface User {
    email?: string;
    password?: string;
    name?: string;
    address?: string;
    district?: string;
    city?: string;
    zipcode?: string;
    telephone?: string;
    description?: string;
    state?: string;
    gender?: string;
}

export class UserObject implements User { }
