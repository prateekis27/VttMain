import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TournamentComponent } from './tournament/tournament.component';
import { HolesassignmentComponent } from './holesassignment/holesassignment.component';
import { TournamentsdetailsComponent } from './tournamentsdetails/tournamentsdetails.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MapPageComponent } from './map-page/map-page.component';
import { OpenlayerComponent } from './openlayer/openlayer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TournamentComponent,
    HolesassignmentComponent,
    TournamentsdetailsComponent,
    LeaderboardComponent,
    MapPageComponent,
    OpenlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
