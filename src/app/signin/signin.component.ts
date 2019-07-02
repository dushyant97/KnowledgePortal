import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
    
  }

  submit()
  {
    
    var x = document.forms["signin"]["user"].value;
    var y = document.forms["signin"]["pass"].value;

    if(x.length < 6 || y.length < 8)
    {
      alert("Invalid Entry!! Please fill the Form.");
    }
    else
    {
      window.location.href = "/welcome";
    }

  }

}