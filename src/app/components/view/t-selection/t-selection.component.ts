import { Component, OnInit } from '@angular/core';
import { Charter } from 'src/app/classes/Character';
import { CharactersService } from 'src/app/service/characters.service';
import { SelectionpgService } from 'src/app/service/selectionpg.service';
import { TournamentService } from 'src/app/service/tournament.service';
import { FightService } from 'src/app/service/fight.service';


@Component({
  selector: 'app-t-selection',
  templateUrl: './t-selection.component.html',
  styleUrls: ['./t-selection.component.css']
})
export class TSelectionComponent implements OnInit {

  public characters : Charter[] = [];
  
  constructor(
    public charactersService : CharactersService ,
    public selectionpgService : SelectionpgService,
    public tournamentService : TournamentService,
    public fightService : FightService
  ) { 
    this.characters = charactersService.characters;
   }

  ngOnInit(): void {
  }

  getC = () => {
    return this.characters;
  }
  
}
