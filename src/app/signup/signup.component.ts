import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Signup } from '../../model/signup';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private http: HttpClient,  private router: Router) { }

  sg=<Signup>{};
  url : string = 'http://localhost:3000/api/Employees';

  ngOnInit() {
  }

  onsubmit(){
    alert(this.sg.firstName)
  }

  posted_details(){
    this.http.post(this.url, this.sg, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).subscribe((res)=>{});
    this.router.navigate(['/signin']);  
  
  }

}


