import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleService } from './people.service';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantService } from './plant.service';
import { StarshipService} from './starship.service';
import { StarshipListComponent } from './starship-list/starship-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PlantListComponent,
    StarshipListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PeopleService, PlantService, StarshipService],
  bootstrap: [AppComponent]
})
export class AppModule {}
