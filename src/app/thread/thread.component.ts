import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(private http : HttpClient) { }

  obj : Object; 
  url : string = 'http://localhost:3000/api/DiscussionForums';


  ngOnInit() {
    this.http.get(this.url).subscribe((res)=>{
      this.obj=res as any; 
     
    });
  }

}
