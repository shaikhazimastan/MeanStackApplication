import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueserviceService {

  uri = "http://localhost:4000"
  constructor(private http : HttpClient) { }

  getAllIssues(){
    return this.http.get(this.uri+"/issues");
  }

  getIssueById(id){
    return this.http.get(this.uri+"/issues/"+id);
  }

  addIssue(IssueObj){
    return this.http.post(this.uri+"/issues/add",IssueObj);
  }

  updateIssue(IssueObj){
    return this.http.post(this.uri+"/issue/update/"+IssueObj.id,IssueObj);
  }

  deleteIssue(id){
    return this.http.post(this.uri+"/issue/delete/"+id,"");
  }
}
