import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:string = "";
  pass:string = "";

  constructor(private http : HttpClient) { }

  obj : Object; 
  url : string = 'http://localhost:3000/api/Employees';
  

  ngOnInit() {
    this.http.get(this.url).subscribe((res)=>{
      this.obj=res as any;  
    });
  }
  mysubmit()
  {
    if(this.user == '' && this.pass == '')
    {
      alert("Username & Password Required");
    }
    else if(this.user == '')
    {
      alert("Username Required");
    }
    else if(this.pass == '')
    {
      alert("Password Required");
    }
    else
    {
      window.location.href = "/signup";
    }
  }

}
