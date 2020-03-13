import { Component, OnInit, Input } from '@angular/core';
import { Charter } from 'src/app/classes/Character';
import { SelectionpgService } from 'src/app/service/selectionpg.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  
  public chart : Charter[] = [
    { // TOT 255
      name : "Ninja",
      charId : 1,
      lifePoints : 1500,
      str : 60,
      def : 45,
      dex : 100,
      int : 50,
      skill : false,
      urlimg : "/assets/img/charter/charter1.png"
    },
    {
      name : "Arrow",
      charId : 2,
      lifePoints : 1600,
      str : 65,
      def : 50,
      dex : 90,
      int : 50,
      skill : false,
      urlimg : "/assets/img/charter/charter2.png"
    },
    {
      name : "Titan",
      charId : 3,
      lifePoints : 800,
      str : 100,
      def : 100,
      dex : 30,
      int : 25,
      skill : false,
      urlimg : "/assets/img/charter/charter3.png"
    },
    {
      name : "Wizard",
      charId : 4,
      lifePoints : 1900,
      str : 40,
      def : 90,
      dex : 25,
      int : 100,
      skill : false,
      urlimg : "/assets/img/charter/charter4.png"
    },
    {
      name : "Thunder",
      charId : 5,
      lifePoints : 1600,
      str : 40,
      def : 45,
      dex : 70,
      int : 100,
      skill : false,
      urlimg : "/assets/img/charter/charter5.png"
    },
    {
      name : "Sword",
      charId : 6,
      lifePoints : 1400,
      str : 100,
      def : 60,
      dex : 60,
      int : 35,
      skill : false,
      urlimg : "/assets/img/charter/charter6.png"
    },
    {
      name : "Snake",
      charId : 7,
      lifePoints : 1300,
      str : 55,
      def : 80,
      dex : 70,
      int : 50,
      skill : false,
      urlimg : "/assets/img/charter/charter7.png"
    },
    {
      name : "Fist",
      charId : 8,
      lifePoints : 1100,
      str : 90,
      def : 75,
      dex : 75,
      int : 15,
      skill : false,
      urlimg : "/assets/img/charter/charter8.png"
    },
    {
      name : "Atlantis",
      charId : 9,
      lifePoints : 2000,
      str : 40,
      def : 50,
      dex : 80,
      int : 85,
      skill : false,
      urlimg : "/assets/img/charter/charter9.png"
    }
  ];
  
  constructor(
    public selectionpgService : SelectionpgService
     
  ) { }

  ngOnInit(): void {
  }

  getTotalChar = () => {
    return this.chart;
  }

  getNumberOfCharacters = () : number => {
    return this.chart.length;
  }

  


}