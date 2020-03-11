import { Injectable } from '@angular/core';
import { Charter } from '../classes/Character';


@Injectable({
  providedIn: 'root'
})
export class SelectionpgService {

  public characters : Charter[] = [];
  constructor() { 
    
  }
  getChart = () : any[] => {
    return this.characters;
  }

  getTotalChar = () : number => {
    return this.characters.length;
  }

  isPgAlreadyTaken = (character) : boolean => {
    return this.characters.find (c => c.charId === character.charId) != null;
  }


  insertInFight = (character)  => {
      if(!this.isPgAlreadyTaken(character) && this.characters.length < 2){
          console.log(character);
          this.characters.push(character);
      }
      /*
      if(this.characters.length == 2)
        alert("Hai già selezionato 2 personaggi");
      */
      console.log(this.getTotalChar());
  }

  fightStart = () : boolean => {
    //console.log(this.getTotalChar() == 2);
    return this.getTotalChar() == 2 ? true : false;
  }
}
