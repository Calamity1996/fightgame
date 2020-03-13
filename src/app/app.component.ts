import { Component } from '@angular/core';
import { Charter } from 'src/app/classes/Character';
import { SelectionpgService } from 'src/app/service/selectionpg.service';
import { TournamentService } from 'src/app/service/tournament.service';
import { FightService } from 'src/app/service/fight.service';
import { CharactersService } from 'src/app/service/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public characters : Charter[] = [];
  constructor (
    public charactersService : CharactersService 
  ){
    this.characters = charactersService.characters;
  }
  
}
