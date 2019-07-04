import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  condition: boolean = true;


  ngOnInit() {
    if(sessionStorage.getItem("login")=="true")
    {
      this.condition=true;
    }
    else if(sessionStorage.getItem("login")=="false")
    {
      this.condition=false;
    }    

  }

}
