import { Component, OnInit, Input } from '@angular/core';
import { Fight } from 'src/app/classes/Fight';

@Component({
  selector: 'app-fighting',
  templateUrl: './fighting.component.html',
  styleUrls: ['./fighting.component.css']
})
export class FightingComponent implements OnInit {

  @Input() fightInput : Fight = new Fight();
  constructor() { }

  ngOnInit(): void {
  }

}
