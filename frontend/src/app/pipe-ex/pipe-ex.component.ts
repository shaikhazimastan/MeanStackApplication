import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-ex',
  templateUrl: './pipe-ex.component.html',
  styleUrls: ['./pipe-ex.component.css']
})
export class PipeExComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
name = "Mastan";
day = new Date(2018,22,10);
custarr = [3,1,5,3,4,8,2];
}
