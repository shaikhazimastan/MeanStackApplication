import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {MatToolbarModule, MatFormFieldModule,MatInputModule,MatOptionModule
  ,MatSelectModule,MatButtonModule,MatIconModule,MatCardModule,
  MatTableModule,MatDividerModule,MatSnackBarModule,MatPaginatorModule,MatSortModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CommonService } from './common.service'
import { AppComponent } from './app.component';
import { TestComponent } from './Test1';
import { TestComponentComponent } from './test-component/test-component.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { PipeExComponent } from './pipe-ex/pipe-ex.component';
import { SortArrPipe } from './CustomPipes/SortPipe';
import { BaseConvertorComponent } from './base-convertor/base-convertor.component';
import { ListComponent } from './issuecomponents/list/list.component';
import { CreateComponent } from './issuecomponents/create/create.component';
import { EditComponent } from './issuecomponents/edit/edit.component';
import {IssueserviceService} from './services/issueservice.service';

let routes = [
  {
    path:'View1',
    component : View1Component
  },
  {
    path:'View2',
    component : View2Component
  },
  {
    path:"pipes",
    component : PipeExComponent
  },
  {
    path:"baseConvertor",
    component : BaseConvertorComponent
  },
  {
    path:"ViewIssues",
    component : ListComponent
  },
  {
    path : "EditIssue/:id",
    component : EditComponent
  },
  {
    path:"CreateIssue",
    component:CreateComponent
  },
  { path: '',    redirectTo: '/ViewIssues', pathMatch: 'full'  },
]
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestComponentComponent,
    View1Component,
    View2Component,
    SortArrPipe,
    PipeExComponent,
    BaseConvertorComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule, MatFormFieldModule,MatInputModule,MatOptionModule
    ,MatSelectModule,MatButtonModule,MatIconModule,MatCardModule,
    MatTableModule,MatDividerModule,MatSnackBarModule,MatPaginatorModule,MatSortModule
  ],
  providers: [CommonService,IssueserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
