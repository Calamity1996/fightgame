import { Injectable } from '@angular/core';
import { Charter } from '../classes/Character';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FightService {

  public log : string = '';
  public showTour : boolean = false;
  public pg1Turn : boolean = true;
  public characters : Charter[] = [];
  constructor(
    private router: Router,
  ) { }

  getChart = () : any[] => {
    return this.characters;
  }

  hit = () : boolean => {
    let rand = Math.round (Math.random());
    return rand == 1 ? true : false; //miss
  }

play = ( player1 : Charter , player2 : Charter ) : boolean => {
   //console.log("(fightService) p1 : "+player1.name+ "p2 : "+player2.name);
   this.characters[0] = player1;
   this.characters[1] = player2;
   if( this.pg1Turn ) {
    this.pg1Turn = false;
      if(this.hit()){
        this.characters[1].lifePoints -= this.characters[0].dex + this.characters[0].str + this.characters[0].int - this.characters[0].def;
        this.log += "name : "+this.characters[1].name+ " >> lifePoints : "+ this.characters[1].lifePoints+"\n";
        //console.log("name : "+this.characters[1].name+ " >> lifePoints : "+ this.characters[1].lifePoints);
        console.log(this.log);
        //this.writeStatus ("PLAYER2 LIFEPOINTS >> " + this.characters[1].lifePoints);
      }
      else 
        this.log += "PLAYER "+player1.name+" MISS!"+"\n";
        //console.log("PLAYER "+player1.name+" MISS!");
    }
  else {
    this.pg1Turn = true;
    if(this.hit()){
      this.characters[0].lifePoints -= this.characters[1].dex + this.characters[1].str + this.characters[1].int - this.characters[1].def;
      //console.log("name : "+this.characters[0].name+ " >> lifePoints : "+ this.characters[0].lifePoints);
      this.log += "name : "+this.characters[0].name+ " >> lifePoints : "+ this.characters[0].lifePoints+"\n";
      //status += "HIT: " + this.characters[1].lifePoints + "\n";
    }
    else 
      //console.log("PLAYER "+player2.name+" MISS!");
      this.log += "PLAYER "+player2.name+" MISS!"+"\n";
  }
  if(this.characters[0].lifePoints <= 0){
    alert("PLAYER "+player2.name+" WIN!");
    return true;
  }
  if(this.characters[1].lifePoints <= 0){
    alert("PLAYER "+player1.name+" WIN!");
    /*
    if(!this.showTour){
      this.router.navigateByUrl('/');
    }
    */
    return false;
  }
  
}

change = () => {
  console.log("CAMBIO");
  this.showTour = true;
}

show = () : boolean => {
  //console.log(this.showTour);
  return this.showTour;
}

progress = (initlife : number , currentlife : number) : number => {
  return (currentlife * 100) / initlife ;
}

pg1turnPlay = (player : Charter) => {
  this.characters[0] = player;

  if( this.pg1Turn ) {
    this.pg1Turn = false;
      if(this.hit()){
        this.characters[1].lifePoints -= this.characters[0].dex + this.characters[0].str + this.characters[0].int - this.characters[0].def;
        this.log += "name : "+this.characters[1].name+ " >> lifePoints : "+ this.characters[1].lifePoints+"\n";
      }
      else 
        this.log += "PLAYER "+player.name+" MISS!"+"\n";
    }
    if(this.characters[1].lifePoints <= 0){
      alert("PLAYER "+player.name+" WIN!");
      return false;
    }
}

pg2turnPlay = (player : Charter) => {
  this.characters[1] = player;
  if( !this.pg1Turn ){
    this.pg1Turn = true;
    if(this.hit()){
      this.characters[0].lifePoints -= this.characters[1].dex + this.characters[1].str + this.characters[1].int - this.characters[1].def;
      this.log += "name : "+this.characters[0].name+ " >> lifePoints : "+ this.characters[0].lifePoints+"\n";
    }
    else 
      this.log += "PLAYER "+player.name+" MISS!"+"\n";
  }
  if(this.characters[0].lifePoints <= 0){
    alert("PLAYER "+player.name+" WIN!");
    return true;
  }
}
}
