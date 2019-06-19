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


  submit()
  {
    this.http.post('http://localhost:3000/api/Employees', this.sg, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe((res)=>{});
  }
 }


