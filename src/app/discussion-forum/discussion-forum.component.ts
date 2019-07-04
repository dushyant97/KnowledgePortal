import { Component, OnInit } from '@angular/core';
import { discussionforum } from '../../model/discussionforum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ForumParameterService } from '../forum-parameter.service';

@Component({
  selector: 'app-discussion-forum',
  templateUrl: './discussion-forum.component.html',
  styleUrls: ['./discussion-forum.component.css']
})

export class DiscussionForumComponent implements OnInit {

  constructor(private http : HttpClient, private service: ForumParameterService) { };

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

    sessionStorage.setItem("login","false");
  document.documentElement.scrollTop = 0;
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
  var x = document.forms["disscussion"]["title"].value;
  var y = document.forms["disscussion"]["description"].value;

  if(x == "" || y == "")
    {
    alert("Please fill the Form.");
    }
  else
    {
      this.success=true;
      document.documentElement.scrollTop = 0; 
      this.obj1.owner = this.obj2[0].firstName + this.obj2[0].lastName;
      //posting the details to database
      this.http.post(this.url, this.obj1, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).subscribe((res)=>{});
      window.location.href = "/forum";
    }
  }

  setvalue(title,description,threadNo,owner)
  {
    this.service.set_description(description);
    this.service.set_owner(owner);
    this.service.set_threadNo(threadNo);
    this.service.set_id(title);
  }

};
