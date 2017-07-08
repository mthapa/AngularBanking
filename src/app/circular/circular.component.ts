import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  public happyText = 'My manager is on vacation';

  public myTodos = [
    'Wash coffee mug',
    'Take Shower',
    'Say Hi'
  ]

  constructor() { }

  ngOnInit() {
  }

  makeHappier(){
    this.happyText = "Manager got fired";
  }

}
