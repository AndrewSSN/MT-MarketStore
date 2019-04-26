import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { RestDataSource } from '../repository/rest.datasource';

@Injectable()
export class AuthService {
    constructor(private dataSource: RestDataSource) { }

    authenticate(username: string, password: string): Observable<boolean> {
        return this.dataSource.authenticate(username, password);
    }

}