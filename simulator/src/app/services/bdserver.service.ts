import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Responce } from 'src/definitions/responce';

@Injectable({
    providedIn: 'root',
})
export class BdserverService {
    constructor(private http: HttpClient) {}

    firstTest() {
        return this.http.get<Responce>('http://localhost:3000');
    }
}
