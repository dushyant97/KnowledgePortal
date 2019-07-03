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
  }

  closebtn()
  {
    this.condition=false;
  }

  mysubmit(){
    this.condition=true;
    document.documentElement.scrollTop = 0; 
    console.log(this.obj1);

    //posting the details to database
    this.http.post(this.url, this.obj1, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe((res)=>{});
    window.location.href = "/suggestform";
  }
}
