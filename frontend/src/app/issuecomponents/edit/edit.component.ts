import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {MatSnackBar} from '@angular/material';

import {IssueserviceService} from '../../services/issueservice.service';
import {Issue} from "../../models/issueModel";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
  id : string;
  issue:any = {};
  updateForm : FormGroup;
  constructor(private issueservice : IssueserviceService, private router : Router, private route : ActivatedRoute, 
  private snackBar : MatSnackBar, private fb : FormBuilder) { 
    this.createForm();
  }
  createForm(){
    this.updateForm = this.fb.group({
      title : ['',Validators.required],
      responsible : '',
      description : '',
      severity : '',
      status : ''
    });
  }

  updateIssue(userObject){
    userObject.id = this.id;
   this.issueservice.updateIssue(userObject).subscribe(()=>{
     this.snackBar.open('Issue Updated Successfully','OK',{
       duration:700
     });
   });
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
     this.id = params.id;
     this.issueservice.getIssueById(this.id).subscribe(res=>{
     this.issue = res;
     this.updateForm.get('title').setValue(this.issue.title);
     this.updateForm.get('responsible').setValue(this.issue.responsible);
     this.updateForm.get('description').setValue(this.issue.description);
     this.updateForm.get('severity').setValue(this.issue.severity);
     this.updateForm.get('status').setValue(this.issue.status);
     
     });
    });
  }

}
