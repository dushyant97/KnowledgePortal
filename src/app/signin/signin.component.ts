import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:string = "";
  pass:string = "";

  constructor() { }

  ngOnInit() {
    
  }
  mysubmit()
  {
    if(this.user == '' && this.pass == '')
    {
      alert("Username & Password Required");
    }
    else if(this.user == '')
    {
      alert("Username Required");
    }
    else if(this.pass == '')
    {
      alert("Password Required");
    }
    else
    {
      window.location.href = "/signup";
    }
  }

}
