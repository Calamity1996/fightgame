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

  //public counter
  public npg : number = 0;
  public activeTournament : boolean = false;
  public f : Fight = new Fight();
  public full : boolean = false;
  public fights : Fight[] = [];
  constructor() { }

  isPgAlreadyTaken = (character) : boolean => {
    let flag : boolean = false;
    this.fights.forEach ( f => {
      flag = flag || f.pg.find (c => c.charId === character.charId) != null;
    });
    console.log(flag);
    return flag;
  }

  getNumFighters = ( numpg : number ) : number => {
    this.npg = numpg;
    return this.npg;
  }

  insertInFight2 = (character)  => {
    let lastFight = this.fights[this.fights.length - 1];
    //Se non sono nel torneo gliene faccio scegliere 2
    if( !this.activeTournament ){
      if( !this.isPgAlreadyTaken(character) && lastFight.pg.length < 2){
        lastFight.pg.push(character);
      } else if( !this.isPgAlreadyTaken(character) && lastFight.pg.length >= 2  && this.fights[0].pg.length < 2){
        let f = new Fight();
        f.pg.push(character);
        this.fights.push(f);   
        }
      }
      
    else{
      let count = 0;
      this.fights.forEach( f => {
        count += f.pg.length;
      });
      if( !this.isPgAlreadyTaken(character) && lastFight.pg.length < 2 ){
        lastFight.pg.push(character);
      } else if( !this.isPgAlreadyTaken(character) && lastFight.pg.length >= 2 && count < this.npg){
        let f = new Fight();
        f.pg.push(character);
        this.fights.push(f);   
        }
    }
    
  }

  setTVar = () => {
    this.activeTournament = true;
  }

  insertInFight = (character)  => {
    //let f : Fight = new Fight();
    if( !this.isPgAlreadyTaken(character) && !this.full){
      console.log("not full "+character.urlimg);
      this.full = true;
      this.f.pg.push(character);
      console.log(this.f.pg[0]);
    }
    else if( !this.isPgAlreadyTaken(character) && this.full){
      console.log("full "+character);
      this.full = false;
      this.f.pg.push(character);
      this.fights.push(this.f);   
      console.log ("fights : "+this.f.pg[0]+ " vs "+ this.f.pg[1]);
      }
  }
/*
  fightStart = () : boolean => {
    //console.log(this.getTotalChar() == 2);
    return this.getTotalChar() == 2 ? true : false;
  }
*/

}
