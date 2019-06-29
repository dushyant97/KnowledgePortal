import { Component, OnInit } from '@angular/core';
import { discussionforum } from '../../model/discussionforum';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-discussion-forum',
  templateUrl: './discussion-forum.component.html',
  styleUrls: ['./discussion-forum.component.css']
})

export class DiscussionForumComponent implements OnInit {

  constructor(private http : HttpClient) { };l

  obj1=<discussionforum>{};
  condition : boolean = true;
  obj : Object; 
  obj2 : Object;
  url : string = 'http://localhost:3000/api/DiscussionForums';
  id : string = sessionStorage.getItem("sessions");
  url1 :string = 'http://localhost:3000/api/Employees' + '?filter={"where" : {"empId" : ' + this.id +' }}';
  owner : string = "";
  success : boolean =false;

  ngOnInit() {
    

    //This is for fetching data from discussion forum for populating it on the page
    this.http.get(this.url).subscribe((res)=>{
    this.obj=res as any;

    //var a= Object.keys(this.obj).length
   });


   //This is to get the employee data
   this.http.get(this.url1).subscribe((res)=>{
    this.obj2=res as any;  
   });
}

closebtn()
{
  this.success=false;
}
  
posted_details(){

  this.success=true;
  this.obj1.owner = this.obj2[0].firstName + this.obj2[0].lastName;
  console.log(this.obj1);
  this.http.post(this.url, this.obj1, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }).subscribe((res)=>{});
}

};
