import { Component, OnInit } from '@angular/core';
import { IssueserviceService } from '../../services/issueservice.service';
import { Issue } from '../../models/issueModel';
import {MatPaginator,MatSort ,MatSortHeader, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router/';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues : Issue[];
  displayedColumns = ['title','responsible','description','severity','status','actions'];
  constructor(private issueservice : IssueserviceService,private router : Router) { }

  ngOnInit() {
    this.fetchIssues();
  }
 fetchIssues(){
  this.issueservice.getAllIssues().subscribe((data : Issue[]) => {
    this.issues = data;
    console.log(this.issues);
    });
 }

 editIssue(id){
this.router.navigate([`/EditIssue/${id}`]);
 }
 
 deleteIssue(id){
   this.issueservice.deleteIssue(id).subscribe(()=>{
     this.fetchIssues();
   });
 }

}
