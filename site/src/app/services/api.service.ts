import { Injectable } from "@angular/core";
import { Prices } from "../models/prices";

@Injectable()
export class ApiService{

    getPrices(): Prices {
        var prices:Prices = {};
        return prices;

    }
}

