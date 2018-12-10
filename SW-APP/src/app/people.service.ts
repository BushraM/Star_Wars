import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { People} from './people';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { map } from "rxjs/operators";
import { Global } from "./global";

@Injectable()
export class PeopleService {

    private _url: string = "http://127.0.0.1:8000/api/displaypeople";

    constructor( private http:HttpClient) { }

    // Returns the list of all people by calling external Laravel API
    getPeople(): People[]{
        var peopleLists: People[] = [];
        
        let data = this.http.get<People[]>(this._url)
                .pipe(map(data => {
                    return data['results'];
                }))
           
 
        data.forEach(element => {  
            for (let index = 0; index < element.length; index++) {

                var person = new People();
                person.name = element[index]['name'];
                person.height = element[index]['height'];
                person.gender = element[index]['gender'];
                person.mass = element[index]['mass'];
            
                peopleLists.push(person);

            }
        })
        
        return peopleLists;
    
  }


      // Searches for name and returns the list of all matching people by calling external Laravel API
    getPerson(search_person): People[]{
        var peopleLists: People[] = [];
        this._url = "http://127.0.0.1:8000/api/searchperson/"+search_person;
 
        let data = this.http.get<People[]>(this._url)
                .pipe(map(data => {
                    return data;
                }));        

        data.forEach(_element => {  
        
            for (let index = 0; index < _element.length; index++) {

                var person = new People();
                person.name = _element[index]['name'];
                person.gender = _element[index]['gender'];
                person.height = _element[index]['height'];
                person.mass = _element[index]['mass'];
    
                peopleLists.push(person);         

            }
        })
        return peopleLists;
  }

}