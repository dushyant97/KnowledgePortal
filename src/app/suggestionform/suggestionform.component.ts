import { Component, OnInit } from '@angular/core';
import { suggest } from '../../model/suggestion';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-suggestionform',
  templateUrl: './suggestionform.component.html',
  styleUrls: ['./suggestionform.component.css']
})
export class SuggestionformComponent implements OnInit {

  constructor(private http : HttpClient) { }

  condition : boolean = false;
  obj1 = <suggest>{};
  url : string = "http://localhost:3000/api/SuggestionForms";

  ngOnInit() {
    sessionStorage.setItem("login","false");
  }

  closebtn()
  {
    this.condition=false;
  }

  mysubmit(){

    var x  = document.forms["sug"]["user"].value;
    var y  = document.forms["sug"]["title"].value;
    var z  = document.forms["sug"]["suggestion"].value;

    if(x == "" || y == "" || z == "")
    {
      alert("Please fill the form");
    }
    else if(x.length < 6)
    {
      alert("Invalid Username!!");
    }
    else
    {      
      alert("Thank you for your Suggestion.");
      this.http.post(this.url, this.obj1, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).subscribe((res)=>{});
      window.location.href = "/suggestform";
    }

  }
}
