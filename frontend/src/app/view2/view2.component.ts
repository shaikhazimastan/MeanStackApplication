import { Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  constructor(private commonservice : CommonService) { }

  ngOnInit() {
    console.log(this.commonservice.commonfun());
  }
  newItem = "";
  SubjectArr = ["AngularJs","JavaScript","JQuery"];
  AddItems = function(){
    let curItem = this.newItem;
   let  len = this.SubjectArr.filter(function(item){ return item == curItem }).length;
   if(len == 0 && this.newItem != "")
   {
     this.SubjectArr.push(this.newItem);
     this.newItem = "";
   }
  }
  removeItem = function(index){
  this.SubjectArr.splice(index,1);
  }
}
