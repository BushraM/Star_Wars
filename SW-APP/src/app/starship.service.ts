import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Starship } from './starship';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { map } from "rxjs/operators";


@Injectable()
export class StarshipService {

    private _url: string = "http://127.0.0.1:8000/api/displaystarships";

    constructor(private http:HttpClient) { }

    // Returns the list all starship by calling external Laravel API
    getStarship(): Observable<Starship[]>{
        var starshipLists: Starship[] = [];
        
        let data = this.http.get<Starship[]>(this._url)
                .pipe(map(data => {
                    return data['results'];
                }));
        

        data.forEach(element => {  
            for (let index = 0; index < element.length; index++) {

                var starship = new Starship();
                starship.name = element[index]['name'];
                starship.model = element[index]['model'];
                starship.manufacturer = element[index]['manufacturer'];
                starship.cost_in_credits = element[index]['cost_in_credits'];
               
                starshipLists.push(starship);

            }
        })
        
        
        return this.http.get<Starship[]>(this._url)
        .pipe(map(data => {
            return starshipLists;
        }));

  }

}