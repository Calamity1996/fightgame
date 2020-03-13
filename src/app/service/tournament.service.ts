import { Injectable } from '@angular/core';
import { Charter } from '../classes/Character';
import { Fight } from '../classes/Fight';
import { SelectionpgService } from 'src/app/service/selectionpg.service';
import { TSelectionComponent } from 'src/app/components/view/t-selection/t-selection.component';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  public npg : number ;
  public small : boolean = false;  //4
  public medium : boolean = false; //8
  public large : boolean = false;  //16
  public characters : Charter [] = [];
  public mycharacters : Charter [] = [];
  constructor(
    public selectionpgService : SelectionpgService
  ) { }

getFight = () => {
  return this.characters;
}

getTotalChar = () : number =>{
  return this.characters.length;
}

switchViewTournament = () : boolean => {
  return true;
}

isPgAlreadyTaken = (character) : boolean => {
  return this.characters.find (c => c.charId === character.charId) != null;
}


insertInTournament = (character)  => {
  if(!this.isPgAlreadyTaken(character) && this.characters.length < 2){
      console.log(character);
      this.mycharacters.push(character);    
  }
}

createTournament = ( numpg : number ) => {
  this.npg = numpg;
  console.log("npg : "+this.npg);
}

getNumFighters = ( numpg : number ) => {
  this.npg = numpg;
  this.setDimTournament(numpg);
}

setDimTournament = ( numpg : number ) => {
  if( this.npg == 4)  this.small = true;
  if( this.npg == 8)  this.medium = true;
  if( this.npg == 16)  this.large = true;
}

isSmall = () => {
  return this.small;
}

isMedium = () => {
  return this.medium;
}

isLarge = () => {
  return this.large;
}

test = () => {
  console.log("ciao");
}

fightStart = () : boolean => {
  console.log(this.getTotalChar() == this.npg);
  return this.getTotalChar() == this.npg ? true : false;
}
}
