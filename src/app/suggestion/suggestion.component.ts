import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  processForm() {
    var x = document.forms["sb"]["name"].value;
    
    alert("name is:" +x); 
  }

}
