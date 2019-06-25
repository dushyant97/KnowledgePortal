import { Component, OnInit } from '@angular/core';
import { discussionforum } from '../../model/discussionforum';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-discussion-forum',
  templateUrl: './discussion-forum.component.html',
  styleUrls: ['./discussion-forum.component.css']
})

export class DiscussionForumComponent implements OnInit {

  constructor(private http : HttpClient) { }

  obj1=<discussionforum>{};
  condition : boolean = true;
  obj : Object; 
  url : string = 'http://localhost:3000/api/DiscussionForums';
  id : string = sessionStorage.getItem("sessions");
  /*user = Object.values(this.obj)[this.id].username;
*/

  ngOnInit() {
    this.http.get(this.url).subscribe((res)=>{
      this.obj=res as any;  
      var a= Object.keys(this.obj).length
      console.log(a);
      console.log(this.obj[a-1].threadNo)
    });
  }

  
posted_details(){
  this.http.post(this.url, this.obj1, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }).subscribe((res)=>{});
}

invoke(title){

  console.log(title);
}

};
