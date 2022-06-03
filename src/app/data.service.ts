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
    // This is currently not working 
    // and is giving null values 
    apiurl = 'api/users'

    // this is the name and value pairs 
    // come about so it can be used
    // more info at https://www.techopedia.com/definition/27178/http-header
    headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
    httpOptions = {
        headers: this.headers
    };

    // injectable service to 
    // talk with the data 
    constructor(private http: HttpClient) {}

    // function will handle and log errors
    private handleError(error: any) { 
        console.error(error);
        // This is the new way to 
        // show errors as they come up
        return throwError(() => new Error(error));
    }

    // Data has to be passed the right way
    // Top to bottom, so UserData to u of users
    getUsers(): Observable<UserData[]> {
        return this.http.get<UserData[]>(this.apiurl).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }
}