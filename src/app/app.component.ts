import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'SpaceX Launch Programs';
    gridData: any;
    yearList: number[];

    constructor(private http: HttpClient) {
        this.gridData = [];
        this.yearList = [
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020
        ]
    }

    ngOnInit() {
        this.http.get('https://api.spacexdata.com/v3/launches?limit=100')
            .subscribe(response => {
                this.gridData = response;
            })
    }

    onSelectYear(year: number) {
        this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`)
            .subscribe(response => {
                this.gridData = response;
            });
    }

    onSuccessfullLaunch(isSuccessfulLaunch: boolean){
        this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${isSuccessfulLaunch}`)
            .subscribe(response => {
                this.gridData = response;
            });
    }

    onSuccessfullLanding(isSuccessfulLanding: boolean) {
        this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${isSuccessfulLanding}`)
            .subscribe(response => {
                this.gridData = response;
            });
    }

}
