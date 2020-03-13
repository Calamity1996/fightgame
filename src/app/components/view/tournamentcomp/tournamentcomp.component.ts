import { Component, OnInit } from '@angular/core';
import { Charter } from 'src/app/classes/Character';
import { SelectionpgService } from 'src/app/service/selectionpg.service';
import { TournamentService } from 'src/app/service/tournament.service';

@Component({
  selector: 'app-tournamentcomp',
  templateUrl: './tournamentcomp.component.html',
  styleUrls: ['./tournamentcomp.component.css']
})
export class TournamentcompComponent implements OnInit {

  constructor(
    public selectionpgService : SelectionpgService,
    public tournamentService : TournamentService
  ) { }

  ngOnInit(): void {
  }

}
