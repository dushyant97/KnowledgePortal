import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Signup } from '../../model/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient) { }

  sg=<Signup>{};

  ngOnInit() {
  }

  mysubmit()
  {

    var a = document.forms["signup"]["fname"].value;
    var b = document.forms["signup"]["lname"].value;
    var c = document.forms["signup"]["age"].value;
    var d = document.forms["signup"]["phone"].value;
    var e = document.forms["signup"]["des"].value;
    var f = document.forms["signup"]["user"].value;
    var g = document.forms["signup"]["pass"].value;
    
    if(a == "" || b == "" || c.length < 2 || d.length < 10 || e == "" || f.length < 6 || g.length < 8)
    {
      alert("Invalid Entry!! Please fill the Form.");
    }
    else
    {
      this.http.post('http://localhost:3000/api/Employees', this.sg, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).subscribe((res)=>{});
      window.location.href = "/signin";
    }

  }

 }


