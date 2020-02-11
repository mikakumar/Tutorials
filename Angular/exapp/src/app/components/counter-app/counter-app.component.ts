import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent implements OnInit {

  constructor() { }

  counter: number;

  ngOnInit(): void{
    this.counter = 0;
  }

  countUp() {
    this.counter++;
  }
  countDown(){
    if(this.counter == 0){
    this.counter = 0;
    }
    else {
    this.counter--;
    }
  }

}
