import { Component, OnInit } from '@angular/core';
import { Charter } from 'src/app/classes/Character';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  public player1 : Charter;
  public player2 : Charter;
  constructor(
   
  ) { }

  ngOnInit(): void {
  }

}
