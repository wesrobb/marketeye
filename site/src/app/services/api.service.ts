import { Injectable } from "@angular/core";
import { Prices } from "../models/prices";

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

    constructor(private http: Http) {
    }

    getPrices(shortCode: string): Observable<Prices> {
        let observable = this.http.get("http://localhost:9090/prices/" + shortCode)
                 .map(response => {
                        return response.json() as Prices
        });
        return observable;
    }
}

