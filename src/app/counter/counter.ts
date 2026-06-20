import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-counter',
  templateUrl:'./counter.html',
  styleUrls: ['./counter.css'],
})
export class Counter {

  count = 0;
  handleCounter(val: string) {
    console.log('Counter handler called:', val, 'before:', this.count);
    if (val === 'plus') {
      this.count = this.count + 1;
    } else if (val === 'minus') {
      if(this.count>0)
      {
        this.count = this.count - 1;
      }
    } else {
      this.count = 0;
    }
    console.log('Counter value after:', this.count);
  }
}
