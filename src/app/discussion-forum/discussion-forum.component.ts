import { Component, OnInit } from '@angular/core';
import { Signup } from '../../model/signup';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-discussion-forum',
  templateUrl: './discussion-forum.component.html',
  styleUrls: ['./discussion-forum.component.css']
})
export class DiscussionForumComponent implements OnInit {

  constructor(private http : HttpClient) { }

  sg1=<Signup>{};

  condition : boolean = true;
  obj : Object; 

  ngOnInit() {
    this.http.get('http://localhost:3000/api/DiscussionForums').subscribe((res)=>{
      this.sg1=res as any; 
      console.log(this.sg1);
      this.obj = this.sg1;
    });
  }
}
