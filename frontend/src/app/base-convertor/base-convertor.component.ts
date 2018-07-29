import { Component, OnInit,Input,OnChanges,SimpleChange } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-base-convertor',
  templateUrl: './base-convertor.component.html',
  styleUrls: ['./base-convertor.component.css']
})
export class BaseConvertorComponent implements OnInit {

  constructor() { }
 form;
  ngOnInit() {
    this.form = new FormGroup({
decimal : new FormControl(""),
binary : new FormControl(""),
octal : new FormControl(""),
hexa : new FormControl(""),
    });  
  }

  decimalChanged = function(oldValue,newValue,base)
  {
    if(newValue!="")
    {
      this.form.patchValue({binary:parseInt(newValue,base).toString(2)});
      this.form.patchValue({octal:parseInt(newValue,base).toString(8)});
      this.form.patchValue({hexa:parseInt(newValue,base).toString(16).toUpperCase()});
    }
    else
    {
      this.form.patchValue({binary:""});
      this.form.patchValue({octal:""});
      this.form.patchValue({hexa:""});
    }   
  }
  b = 0;
  h = 0;
  o = 0;
  binaryChanged = function(oldValue,newValue,base)
  {
    this.b++;
    if(this.b == 1)
    {
      if(newValue!="")
      {
        this.form.patchValue({decimal:parseInt(newValue,base).toString(10)});
      }
      else
      {
        this.form.patchValue({decimal:""});
      } 
      this.b = 0;
    }
      
  }
  octalChanged = function(oldValue,newValue,base)
  {
    this.o++;
    if(this.o == 1)
    {
      if(newValue!="")
      {
        this.form.patchValue({decimal:parseInt(newValue,base).toString(10)});
      }
      else
      {
        this.form.patchValue({decimal:""});
      } 
      this.o = 0;
    }
      
  }

  hexaChanged = function(oldValue,newValue,base)
  {
    this.h++;
    if(this.h == 1)
    {
      if(newValue!="")
      {
        this.form.patchValue({decimal:parseInt(newValue,base).toString(10)});
      }
      else
      {
        this.form.patchValue({decimal:""});
      } 
      this.h = 0;
    }
      
  }
  
  

  

}
