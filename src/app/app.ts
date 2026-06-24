import { Component , signal} from '@angular/core';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile.component';
import { Counter } from './counter/counter';
import { Ifelse } from './ifelse/ifelse';
import { log } from 'node:console';
// import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Login, ProfileComponent, Counter,Ifelse],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // name = ""
  // getName(event:Event)
  // {
  //   const name = (event.target as HTMLInputElement).value
  //   console.log(name);
  // }
}
  