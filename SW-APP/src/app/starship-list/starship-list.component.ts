import { Component, OnInit } from '@angular/core';
import { StarshipService } from './../starship.service';

@Component({
  selector: 'starship-list',
  template:
  `
  <hr>
  <button (click)="this.getStarship()">List of Starships</button>
  
   <h3>{{errorMsg}}</h3>
   <div *ngFor="let starshipList of starshipLists">
     Name: {{starshipList.name}}<br/>
     Model: {{starshipList.model}}<br/>
     Manufacturer {{starshipList.manufacturer}}<br/>
     Cost in credits: {{starshipList.cost_in_credits}}<br/><br/>
   </div>

 `,
 styles: ['hr{width:460px;}']
})
export class StarshipListComponent implements OnInit {
  public starshipLists = [];
  public errorMsg;
  constructor(private _starshipService: StarshipService) { }

  ngOnInit() {}

  getStarship(){
    this._starshipService.getStarship()
    .subscribe(data => this.starshipLists = data,
              error => this.errorMsg = error);
  }

}
