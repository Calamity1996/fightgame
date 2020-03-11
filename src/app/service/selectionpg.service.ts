import { Injectable } from '@angular/core';
import { Charter } from '../classes/Character';
import { Selection } from '../components/view/selection/selection.component';

@Injectable({
  providedIn: 'root'
})
export class SelectionpgService {

  public menu : Charter[] = [];
  public characters : Charter[] = [];
  constructor() { }

  isPgAlreadyTaken = (character) : boolean => {
    return this.characters.find (c => c.charId === character.charId) != null;
  }

  randomSelection = () => {
    let rand = Math.random() * 10;
    
    console.log(rand);
    if (!this.isPgAlreadyTaken(menu[rand]))
      this.characters.push();
  }
}
