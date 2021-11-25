import { User } from '../../user/interfaces/user.interface';
export interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
    user?: User;
}