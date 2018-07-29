import { Component, OnInit } from '@angular/core';
import {IssueserviceService} from '../../services/issueservice.service';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm : FormGroup;
  constructor(private issueservice : IssueserviceService,private fb : FormBuilder, private router : Router) { 
    this.createForm = this.fb.group({
      title : ['',Validators.required],
      responsible : '',
      description : '',
      severity : ''
    });
  }
  addIssue(userObject){
    userObject.status = 'Open';
    this.issueservice.addIssue(userObject).subscribe(()=>{
     this.router.navigate(["/ViewIssues"]);
    });
  }
  ngOnInit() {
  }

}
