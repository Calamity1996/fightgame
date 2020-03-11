import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { IndexComponent } from './components/view/index/index.component';
import { CharterComponent } from './components/common/charter/charter.component';
import { FightComponent } from './components/common/fight/fight.component';
import { MatchComponent } from './components/view/match/match.component';
import { SelectionComponent } from './components/view/selection/selection.component';
import { TournamentcompComponent } from './components/view/tournamentcomp/tournamentcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    CharterComponent,
    FightComponent,
    MatchComponent,
    SelectionComponent,
    TournamentcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
