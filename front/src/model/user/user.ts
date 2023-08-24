export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
    phoneNumber: string;
    dateOfBirth: Date;
    address: string;
    postalCode: string;
    city: string;
    country: string;
    loggedIn: boolean;
    isAdmin: boolean;
}