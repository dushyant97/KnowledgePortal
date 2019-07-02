import { Component, OnInit } from '@angular/core';
import { suggest } from '../../model/suggestion';

@Component({
  selector: 'app-suggestionform',
  templateUrl: './suggestionform.component.html',
  styleUrls: ['./suggestionform.component.css']
})
export class SuggestionformComponent implements OnInit {

  constructor() { }

  obj : Object;
  obj1 = <suggest>{};
  url : string = "http://localhost:3000/api/SuggestionForms";

  ngOnInit() {
  }

}
