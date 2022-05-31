import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from 'rxjs/operators';
import { UserData } from "./user-data.service";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    
    // tells service where to look
    apiurl = 'api/users'
    headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
    httpOptions = {
        headers: this.headers
    };

    // injectable service to communicate 
    // with the data 
    constructor(private http: HttpClient) {}

    // function will handle and log errors
    private handleError(error: any) { 
        console.error(error);
        return throwError(error);
    }

    getUsers(): Observable<UserData[]> {
        return this.http.get<UserData[]>(this.apiurl).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }
}