import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {

  display=true;
  toggleDiv = true;
  hide(){
    this.display=false;
  }
  show(){
    this.display=true;
  }
  toggle(){
    this.display=!this.display;
  }
  
  ToggleTwoDiv()
  {
    this.toggleDiv=!this.toggleDiv;

  }
}
