import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Plant} from './plant';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { map } from "rxjs/operators";


@Injectable()
export class PlantService {

    private _url: string = "http://127.0.0.1:8000/api/displayplanets";

    constructor(private http:HttpClient) { }

    // Returns the list all people calling external Laravel API
    getPlanet(): Observable<Plant[]>{
        var plantLists: Plant[] = [];
        
        let data = this.http.get<Plant[]>(this._url)
                .pipe(map(data => {
                    return data['results'];
                }));
        

        data.forEach(element => {  
            for (let index = 0; index < element.length; index++) {

                var plant = new Plant();
                plant.name = element[index]['name'];
                plant.diameter = element[index]['diameter'];
                plant.orbital_period = element[index]['orbital_period'];
                plant.rotation_period = element[index]['rotation_period'];
               
                plantLists.push(plant);

            }
        })
        
        return this.http.get<Plant[]>(this._url)
        .pipe(map(data => {
            return plantLists;
        }));

  }

}