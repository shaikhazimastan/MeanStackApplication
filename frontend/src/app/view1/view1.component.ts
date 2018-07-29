import { Component, OnInit,Input,OnChanges,SimpleChange} from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor() { }
form;
  ngOnInit() {
this.form = new FormGroup({
  firstName : new FormControl("",Validators.compose([
    Validators.required,
    Validators.minLength(5)
  ])),
  lastName : new FormControl("",Validators.required),
  subject : new FormControl("",Validators.required),
});

  }
  
  onSubmit = function (userObject){
    alert(JSON.stringify(userObject));
  }
}
