import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { IndexComponent } from './components/view/index/index.component';
import { CharterComponent } from './components/common/charter/charter.component';
import { FightComponent } from './components/view/fight/fight.component';
import { MatchComponent } from './components/view/match/match.component';
import { SelectionComponent } from './components/view/selection/selection.component';
import { TournamentcompComponent } from './components/view/tournamentcomp/tournamentcomp.component';
import { CharactersService } from 'src/app/service/characters.service';
import { FightService } from 'src/app/service/fight.service';
import { SelectionpgService } from 'src/app/service/selectionpg.service';
import { TournamentService } from 'src/app/service/tournament.service';
import { TSelectionComponent } from './components/view/t-selection/t-selection.component';
import { FightingComponent } from './components/common/fighting/fighting.component';
import { SelectionMenuComponent } from './components/common/selection-menu/selection-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    CharterComponent,
    FightComponent,
    MatchComponent,
    SelectionComponent,
    TournamentcompComponent,
    TSelectionComponent,
    FightingComponent,
    SelectionMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [
    SelectionpgService,
    CharactersService,
    FightService,
    TournamentService,
  ],
  
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
