import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user.data';

export class UserData implements InMemoryDbService {
    createDb(){
        let users: User[] = [
            { id: 1, name: 'Kyle', email: 'kylelife@fake.com', contact: '097856' },
            { id: 2, name: 'Jamie', email: 'sunnyme4dow@fake.com', contact: '087932' },
            { id: 3, name: 'Sofia', email: 'sofiacheesecake@fake.com', contact: '0326574' },
            { id: 4, name: 'Mocha', email: 'officepet@fake.com', contact: '001122', },
            { id: 5, name: 'Big Hoss', email: 'ceo@fake.com', contact: '000001'}
        ];
        return users;
    }
}