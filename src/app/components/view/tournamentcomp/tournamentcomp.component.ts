import { Component, OnInit } from '@angular/core';
import { Charter } from 'src/app/classes/Character';
import { SelectionpgService } from 'src/app/service/selectionpg.service';
import { TournamentService } from 'src/app/service/tournament.service';
import { FightService } from 'src/app/service/fight.service';
import { SelectService } from 'src/app/service/select.service';

@Component({
  selector: 'app-tournamentcomp',
  templateUrl: './tournamentcomp.component.html',
  styleUrls: ['./tournamentcomp.component.css']
})
export class TournamentcompComponent implements OnInit {

  //public htmlWinner : string = ' <img src="{{c.urlimg}}" class="dimimg"> ';
  constructor(
    public selectionpgService : SelectionpgService,
    public tournamentService : TournamentService,
    public fightService : FightService,
    public selectService : SelectService
  ) { }

  ngOnInit(): void {
  }

}
