import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { thread_details } from '../../model/thread';

 
@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(private http : HttpClient, private route:ActivatedRoute) { }

  obj : Object; 
  url : string = 'http://localhost:3000/api/ThreadDetails';
  title : string = "";
  desc : string ="";
  parameter : Object;
  thread : String = "";
  url1 :string = "";
  obj3 = <thread_details>{};
  id : string = sessionStorage.getItem("sessions");
  url2 :string = 'http://localhost:3000/api/Employees' + '?filter={"where" : {"empId" : ' + this.id +' }}';
  obj2= Object ;
  success : boolean =false;
  condition : boolean;
  name : string = "";

  ngOnInit() {

    // to get what was clicked passing via router 
    this.route.params.subscribe(params=>{this.parameter = params});
    this.title = this.parameter['id'];
    this.desc = this.parameter['description'];
    this.thread = this.parameter['threadNo'];
    this.name = this.parameter['owner'];
    this.url1 = 'http://localhost:3000/api/ThreadDetails' + '?filter={"where" : {"threadNo" : ' + this.thread +' }}';
    
    //to print the table
    this.http.get(this.url1).subscribe((res)=>{
      this.obj=res as any;  
      if(this.obj['length']==0)
      {
        this.condition=false;
      }
      else{
        this.condition=true; 
      }

    });
    
    //to get current user name
    this.http.get(this.url2).subscribe((res)=>{
      this.obj2=res as any;  
     });

  }

  closebtn()
{
  this.success=false;
}

  response(){
    this.success=true;
    this.obj3.threadNo = Number(this.thread);
    this.obj3.user = this.obj2[0].firstName + this.obj2[0].lastName;
    this.obj3.user = this.obj2[0].firstName + this.obj2[0].lastName;
    this.http.post(this.url, this.obj3, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe((res)=>{});
    document.documentElement.scrollTop = 0;
    (<HTMLInputElement>document.getElementById('replys')).value = "";
    this.ngOnInit();
  }

}

    
  