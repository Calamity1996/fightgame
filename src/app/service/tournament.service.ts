import { Injectable } from '@angular/core';
import { Charter } from '../classes/Character';
import { Fight } from '../classes/Fight';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  public tournament : Fight [] = [];
  constructor() { }

getFight = () => {
  return this.tournament;
}

createTournamentEvinronment = () => {
  
}


}
