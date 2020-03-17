import { Injectable } from '@angular/core';
import { Charter } from '../classes/Character';
import { Fight } from '../classes/Fight';
import { SelectionpgService } from 'src/app/service/selectionpg.service';
import { TSelectionComponent } from 'src/app/components/view/t-selection/t-selection.component';
import { FightService } from 'src/app/service/fight.service';
import { ConstantPool } from '@angular/compiler';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  //lo uso per mettere 2 pg alla volta e passarli al fight
  public fights : Fight [] = [];
  public sfight : Fight = null;
  public cycle : number [] = [];
  public initLife : number [] = [];
  public count : number ;
  public npg : number ;
  public small : boolean = false;  //4
  public medium : boolean = false; //8
  public large : boolean = false;  //16
  public characters : Charter [] = [];
  public mycharacters : Charter [] = [];
  public isAliveYet : boolean [] = [];
  // lungo quanto npg, all'inizio tutto true, man mano che si eliminano li metto a false
  // 1 : 1 con mycharacters

  constructor(
    public selectionpgService : SelectionpgService,
    private router: Router,
    public fightService : FightService
  ) {
   }

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
  console.log(character);
  return this.characters.find (c => c.charId === character.charId) != null;
}
// Mi dice quanti pag sono rimanenti
getTotalPgRemaining = () => {
  let i ;
  this.count = 0;
  for (i=0; i<this.isAliveYet.length;i++)
    if(this.isAliveYet[i])
      this.count++;
}


insertInTournament = (character)  => {
  if(!this.isPgAlreadyTaken(character) && this.characters.length < this.npg){
      this.mycharacters.push(character); 
      this.initLife.push(character.lifePoints);
      console.log(character );
      console.log("aggiunto :"+this.mycharacters.length);
  }
}

createTournament = ( numpg : number ) => {
  this.npg = numpg;
  console.log("creo il torneo");
  let i;
  for (i = 0; i < this.npg; i++)
    this.isAliveYet[i] = true;
  for (i = 0; i < this.npg; i++)
    console.log(this.isAliveYet[i]);
}

getNumFighters = ( numpg : number ) => {
  this.npg = numpg;
  this.setDimTournament(numpg);
}

setDimTournament = ( numpg : number ) => {
  if( this.npg == 4) {
     this.small = true;
     this.cycle.push(1);
     this.cycle.push(2);
  }
  if( this.npg == 8){
     this.medium = true;
     this.cycle.push(1);
     this.cycle.push(2);
     this.cycle.push(3);
  }
  if( this.npg == 16){
     this.large = true;
     this.cycle.push(1);
     this.cycle.push(1);
     this.cycle.push(1);
     this.cycle.push(1);
  }
  this.createTournament (this.npg);
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
  //console.log(this.getTotalChar() == this.npg);
  return this.getTotalChar() == this.npg ? true : false;
}

setFights = ( p1 : Charter , p2 : Charter) => {
  let fight : Fight = new Fight;
  fight.pg1 = p1;
  fight.pg2 = p2;
  fight.winner = -1;
  this.sfight = fight;
  this.fights.push(fight);
  this.selectionpgService.insertInFight(p1);
  this.selectionpgService.insertInFight(p2);
}

chargeLife = (index : number) => {
  this.mycharacters[index].lifePoints = this.initLife[index];
}

startTournamentFightsNewVersion = () => {
  let i;
  // Inizio settando le fights
  for(i = 0; i < this.npg; i+2){
    this.setFights(this.mycharacters[i],this.mycharacters[i+1]);
    //this.router.navigateByUrl('/fight');
    //this.router.navigate(['/fight']);
  }
  // Ho le fights per ora 2 perchè è il torneo da 4 player
  // Passo alla pagina di /fight e gestisco da li?
}


startTournamentFights = () => {
  // In myc ho tutti i concorrenti, li divido in fight
  // Se sono 4 sono 2 fight e poi 1, se 8 sono 4,2 e 1
  let i,j,x;
  let winner;
  //if(this.isMedium()){
    if(this.isSmall()){
    let first;
    
     for(j = 0; j < 2; j++){
      let supp = 0;
  
        for (i = 0,first = true; i < 4; i++ ){
          console.log(i+" : "+ this.mycharacters[i].name + " life : "+ this.mycharacters[i].lifePoints );
          // Se uno è già stato selezionato && quello selezionato è ancora vivo && il secondo 
          // selezionato (supp) è ancora vivo
          if(!first && this.isAliveYet[i] && this.isAliveYet[supp]){
            this.setFights(this.mycharacters[i],this.mycharacters[supp]);
            //console.log("preso il secondo");
            first = true;
            console.log("------------> 1 : "+ this.mycharacters[i].name + " >> i : "+i);
            console.log("------------> 2 : "+ this.mycharacters[supp].name );
            // In teoria dovrei mettere il play() dentro un ciclo che termina quando uno dei due perde, quindi quando i lifePoints sono <= 0
            while( this.mycharacters[i].lifePoints >= 0 && this.mycharacters[supp].lifePoints >= 0 )
              // Devo mettere uno sleep se voglio stampare i dati
             winner = this.fightService.play(this.mycharacters[supp],this.mycharacters[i]);
            if ( winner ) {
              console.log ("vince : "+this.mycharacters[i].name);
              this.chargeLife(i);
              //this.htmlWinner += ' <img src="{{c.urlimg}}" class="dimimg"> ';
              this.isAliveYet[supp] = false;
            }
            if( !winner)  {
              console.log ("vince : "+this.mycharacters[supp].name);
              this.chargeLife(supp);
              this.isAliveYet[i] = false;
            }
          }


          if( this.isAliveYet[i] && first){
            console.log("preso il primo : "+ this.mycharacters[i].name);
            supp = i;
            //console.log("qui supp : "+supp+"->"+i);
            first = false;
          }
          
          }
        }
      }
}

}

