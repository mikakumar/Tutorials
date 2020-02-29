import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  counter: number;

  ngOnInit() {
    this.counter = 0;
  }

  countUp = () =>{
    this.counter++;
  }

  countDown = () =>{
    if(this.counter == 0)
    this.counter = 0;
    else 
    this.counter--;
  }

}
