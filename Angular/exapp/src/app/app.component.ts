import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exapp';
  counter: number = 0;

  countUp(){
    this.counter++;
  }
  countDown(){
    if(this.counter == 0)
    this.counter = 0;
    else 
    this.counter--;
  }
}
