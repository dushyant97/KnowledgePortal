import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';

 
@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(private http : HttpClient, private route:ActivatedRoute) { }

  obj : Object; 
  url : string = 'http://localhost:3000/api/DiscussionForums';
  title : string = "";
  desc : string ="";
  parameter : Object;

  ngOnInit() {
    this.route.params.subscribe(params=>{this.parameter = params});
    this.title = this.parameter['id'];
    this.desc = this.parameter['description'];
    console.log(this.parameter);
     

    this.http.get(this.url).subscribe((res)=>{
      this.obj=res as any;  
    });
   

  }

}

    
  