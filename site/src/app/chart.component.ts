import { Component, OnInit } from '@angular/core';
import { ApiService } from "./services/api.service";
import { Prices } from "./models/prices"

@Component({
    selector: 'chart',
    templateUrl: `app/chart.html`,
    providers: [ApiService]
})
export class ChartComponent implements OnInit {

    public Prices:Prices;

    constructor(private apiService: ApiService) {

    }

    ngOnInit(): void {
        this.Prices = this.apiService.getPrices(); 
    }
}

