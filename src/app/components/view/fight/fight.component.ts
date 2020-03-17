import { Component, OnInit, Input} from '@angular/core';
import { SelectionpgService } from 'src/app/service/selectionpg.service';
import { Charter } from 'src/app/classes/Character';
import { FightService } from 'src/app/service/fight.service';
import { TournamentService } from 'src/app/service/tournament.service';
import { Fight } from 'src/app/classes/Fight';
import { SelectService } from 'src/app/service/select.service';


@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  @Input() inputFight : Fight;

  public characters : Charter[] = [];
  constructor(
    public selectionpgService : SelectionpgService,
    public fightService : FightService,
    public tournamentService : TournamentService,
    public selectService : SelectService
  ) { }

  ngOnInit(): void {
  }

  getChart = () : any[] => {
    return this.characters;
  }

  getTotalChar = () : number => {
    return this.characters.length;
  }

  print = () : boolean => {
    if(this.getTotalChar() >= 2)
      return false;
    return true;
  }
}
