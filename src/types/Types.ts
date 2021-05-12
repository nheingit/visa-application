export interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email: string;
}

export type Props = {
    children:JSX.Element[] | JSX.Element | null
}