import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Charter } from '../classes/Character';
import { SelectionComponent } from 'src/app/components/view/selection/selection.component';
import { CharterComponent } from 'src/app/components/common/charter/charter.component';
import { Fight } from '../classes/Fight';


@Injectable({
  providedIn: 'root',
})
export class SelectionpgService {

  public characters : Charter[] = [];
  public fight : Fight = new Fight();
  public first : boolean = true;
  
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

  insertInFight2 = (character)  => {
    if(!this.isPgAlreadyTaken(character) && this.first){
        this.fight.pg1 = character;    
    }
    else 
      this.fight.pg2 = character;
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