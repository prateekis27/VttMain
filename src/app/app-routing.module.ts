import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolesassignmentComponent } from './holesassignment/holesassignment.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentsdetailsComponent } from './tournamentsdetails/tournamentsdetails.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TournamentinfoComponent } from './tournamentinfo/tournamentinfo.component';
import { MapPageComponent } from './map-page/map-page.component';
import { PlayercartinfoComponent } from './playercartinfo/playercartinfo.component';

const routes: Routes = [
  // { path: 'Dashboard', loadChildren: './dash/dash.module#DashModule', canActivate: [AuthGaurdService], data: { preload: true } }
  { path: 'Tournament', component: TournamentComponent },
  { path: 'Holesassignment', component: HolesassignmentComponent },
  { path: 'Tournamentsdetails', component: TournamentsdetailsComponent },
  { path: 'Tournamentinfo', component: TournamentinfoComponent },
  { path: 'Playercartinfo', component: PlayercartinfoComponent },
  { path: 'Leaderboard', component: LeaderboardComponent },
  { path: 'Map', component: MapPageComponent },
  { path: '', component: TournamentsdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
