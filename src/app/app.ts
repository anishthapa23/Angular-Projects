import { Component , signal} from '@angular/core';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile.component';
import { Counter } from './counter/counter';
// import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Login, ProfileComponent, Counter],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-practice');
  name = 'Anish';
}
  