import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Charter } from '../classes/Character';
import { SelectionComponent } from 'src/app/components/view/selection/selection.component';


@Injectable({
  providedIn: 'root',
})
export class SelectionpgService {

  public characters : Charter[] = [];
  
  constructor(
    
  ) { 
      
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
  }

  fightStart = () : boolean => {
    //console.log(this.getTotalChar() == 2);
    return this.getTotalChar() == 2 ? true : false;
  }

  generateRandomVersus = () => {
    let rand = Math.round(10 * Math.random());
    console.log("_______"+rand+"____"+this.characters.length+"____"+this.characters[rand]);
    this.insertInFight (this.characters[rand]);
  }
  
  
}
