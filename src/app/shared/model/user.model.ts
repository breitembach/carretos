export interface User {
    email?: string;
    password?: string;
    name?: string;
    address?: string;
    district?: string;
    city?: string;
    zipcode?: string;
    telephone?: string;
}

export class UserObject implements User { }
