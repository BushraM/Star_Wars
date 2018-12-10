import { Component, OnInit } from '@angular/core';
import { PlantService } from './../plant.service';



@Component({
  selector: 'plant-list',
  template:
   `
   <hr>
   <button (click)="this.getPlanet()">List of Planets</button>
  
    <h3>{{errorMsg}}</h3>
    <div *ngFor="let plantList of plantLists">
      Name: {{plantList.name}}<br/>
      Rotation Period: {{plantList.rotation_period}}<br/>
      Orbital Period: {{plantList.orbital_period}}<br/>
      Diameter: {{plantList.diameter}}<br/><br/>
    </div>

  `,
  styles: ['hr{width:460px;}']
})
export class PlantListComponent implements OnInit {

  public plantLists = [];
  public errorMsg;
  constructor(private _plantService: PlantService) { }

  ngOnInit() {}

  getPlanet(){
    this._plantService.getPlanet()
    .subscribe(data => this.plantLists = data,
              error => this.errorMsg = error);
  }

}
