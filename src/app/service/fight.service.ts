import { Injectable } from '@angular/core';
import { Charter } from '../classes/Character';

@Injectable({
  providedIn: 'root'
})
export class FightService {

  public pg1Turn : boolean;
  public characters : Charter[] = [];
  constructor() { }

  getChart = () : any[] => {
    return this.characters;
  }

  hit = () : boolean => {
    let rand = Math.round (Math.random());
    return rand == 1 ? true : false; //miss
  }

  play = ( player1 : Charter , player2 : Charter ) => {
   this.characters[0] = player1;
   this.characters[1] = player2;
     console.log(this.characters[1]);
   if(this.hit()){
     console.log(this.characters[0].lifePoints);
   }
  }




}
