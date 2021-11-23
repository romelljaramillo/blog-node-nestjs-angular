export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    addressId: Address;
    phone: string;
    website: string;
    companyId: Company;
}

export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export class Geo {
    lat: string;
    lng: string;
}

export class Company {
    name: string;
    catchPhrase: string;
    bs: string;
}