import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../people.service';

@Component({
  selector: 'people-list',
  template:
  `
   <hr>
   <button (click)="this.getPeople()">List of People</button>
   <input type="text" id="search_person" (keyup)="this.addText($event)" placeholder="Search Person"/>
   <button (click)="this.getPerson($event)">Search</button>  

    <h3>{{errorMsg}}</h3>
    <div *ngFor="let peopleList of peopleLists">
      Name: {{peopleList.name}}<br/>
      Height: {{peopleList.height}}<br/>
      Gender: {{peopleList.gender}}<br/>
      Mass: {{peopleList.mass}}<br/><br/>
    </div>

  `,
  styles: ['hr{width:460px;}']
})
export class PeopleListComponent implements OnInit {

  public peopleLists = [];
  public errorMsg;
  constructor(private _peopleService: PeopleService) { }
  
  public serachPerson: string;

  ngOnInit() {}

  getPeople(){
    this.peopleLists = this._peopleService.getPeople();
    /*
    .subscribe(data => this.peopleLists = data,
              error => this.errorMsg = error);*/
  }

  addText(search_person_text){
    this.serachPerson = search_person_text.target.value;
    //console.log(this.serachPerson);
  }
  
  getPerson(){
    let searchPerson = this.serachPerson;

    this.peopleLists = this._peopleService.getPerson(searchPerson);
    /*
    .subscribe(data => this.peopleLists = data,
              error => this.errorMsg = error);*/


  }

}
