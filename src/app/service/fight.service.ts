import { Injectable } from '@angular/core';
import { Charter } from '../classes/Character';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FightService {

  public pg1Turn : boolean = true;
  public characters : Charter[] = [];
  constructor(
    private router: Router
  ) { }

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
   if( this.pg1Turn ) {
    this.pg1Turn = false;
      if(this.hit()){
        this.characters[1].lifePoints -= this.characters[0].dex + this.characters[0].str + this.characters[0].int - this.characters[0].def;
        console.log(this.characters[1].lifePoints);
      }
      else console.log("PLAYER1 MISS!");
    }
  else {
    this.pg1Turn = true;
    if(this.hit()){
      this.characters[0].lifePoints -= this.characters[1].dex + this.characters[1].str + this.characters[1].int - this.characters[1].def;
      console.log(this.characters[1].lifePoints);
    }
    else console.log("PLAYER2 MISS!");
  }
  if(this.characters[0].lifePoints <= 0){
    alert("PLAYER2 WIN!");
    this.router.navigateByUrl('/');
  }
  if(this.characters[1].lifePoints <= 0){
    alert("PLAYER1 WIN!");
    this.router.navigateByUrl('/');
  }
}




}
