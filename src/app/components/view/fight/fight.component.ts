import { Component, OnInit } from '@angular/core';
import { SelectionpgService } from 'src/app/service/selectionpg.service';
import { Charter } from 'src/app/classes/Character';
import { FightService } from 'src/app/service/fight.service';
import { TournamentService } from 'src/app/service/tournament.service';


@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  public characters : Charter[] = [];
  constructor(
    public selectionpgService : SelectionpgService,
    public fightService : FightService,
    public tournamentService : TournamentService
  ) { }

  ngOnInit(): void {
  }

  getChart = () : any[] => {
    return this.characters;
  }

  getTotalChar = () : number => {
    return this.characters.length;
  }
}
