import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',              
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:string = "";
  pass:string = "";


  constructor(private http : HttpClient, private router: Router) { }

  obj : Object;
  url : string = 'http://localhost:3000/api/Employees';


  ngOnInit() {
    sessionStorage.setItem("login","true");
    this.http.get(this.url).subscribe((res)=>{
      this.obj = res as any;
    });
    
  }

  submit()
  {

    var x = document.forms["signin"]["user"].value;
    var y = document.forms["signin"]["pass"].value;

    var length= Object.keys(this.obj).length;
    var id = null;

    for(let i=0;i<length;i++)
    {
      if(Object.values(this.obj)[i]['username'] == x)
      {
        id = i;
      }
    }
  
    if(x == "" && y == "")
    {
      alert("Invalid Entry!! Please fill the Form.");
    }
    else if(id == null)
    {
      alert("Inavalid username");
    }
    else if(y != Object.values(this.obj)[id]['password'])
    {
      alert("Invalid password");
    }
    else
    {
      sessionStorage.setItem("sessions",id+1);
      sessionStorage.setItem("login","false");
      this.router.navigate(['/welcome']);
    }

  }

}