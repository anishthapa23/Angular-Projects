import { Component } from '@angular/core';
import { buffer } from 'stream/consumers';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  handleClickEvent() {
   
    alert('Button Clicked!');
   
  }

}
