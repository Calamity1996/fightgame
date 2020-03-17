import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Charter } from '../classes/Character';
import { SelectionComponent } from 'src/app/components/view/selection/selection.component';
import { CharterComponent } from 'src/app/components/common/charter/charter.component';
import { Fight } from '../classes/Fight';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  public full : boolean = false;
  public fights : Fight[] = [];
  constructor() { }

  isPgAlreadyTaken = (character) : boolean => {
    let flag : boolean = false;
    this.fights.forEach ( f => function () {
      flag = flag || f.pg.find (c => c.charId === character.charId) != null;
    });
    console.log(flag);
    return flag;
  }


  insertInFight = (character)  => {
    let f : Fight = new Fight();
    if( !this.isPgAlreadyTaken(character) && !this.full){
      console.log("not full "+character.urlimg);
      f.pg.push(character);
      console.log(f.pg[0]);
    }
    if( !this.isPgAlreadyTaken(character) && this.full){
      console.log("full "+character);
      f.pg.push(character);
      this.fights.push(f);   
      console.log ("fights : "+f.pg[0]+ " vs "+ f.pg[1]);
      }
  }
/*
  fightStart = () : boolean => {
    //console.log(this.getTotalChar() == 2);
    return this.getTotalChar() == 2 ? true : false;
  }
*/

}
