import { Component, OnInit, Input } from '@angular/core';
import { Charter } from 'src/app/classes/Character';
import { TournamentService } from 'src/app/service/tournament.service';
import { SelectionpgService } from 'src/app/service/selectionpg.service';
import { SelectService } from 'src/app/service/select.service';
import { FightService } from 'src/app/service/fight.service';

@Component({
  selector: 'app-charter',
  templateUrl: './charter.component.html',
  styleUrls: ['./charter.component.css']
})
export class CharterComponent implements OnInit {

  @Input() inputChar : Charter ;
  constructor(
    public tournamentService : TournamentService,
    public selectionpgService : SelectionpgService,
    public selectService : SelectService,
    public fightService : FightService,
  ) { }

  ngOnInit(): void {
  }

}
