import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/view/index/index.component';
import { FightComponent } from './components/common/fight/fight.component';
import { CharterComponent } from './components/common/charter/charter.component';
import { MatchComponent } from './components/view/match/match.component';
import { SelectionComponent } from './components/view/selection/selection.component';
import { TournamentcompComponent } from './components/view/tournamentcomp/tournamentcomp.component';


const routes: Routes = [
  { path : 'index', component : IndexComponent },
  { path : 'fight', component : FightComponent },
  { path : 'charter', component : CharterComponent },
  { path : 'match', component : MatchComponent},
  { path : 'selection', component : SelectionComponent},
  { path : 'tournament', component : TournamentcompComponent },
  { path : '', redirectTo : 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
