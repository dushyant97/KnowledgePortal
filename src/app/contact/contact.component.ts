import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mysubmit()
  {

    var x = document.forms["contact"]["name"].value;
    var y = document.forms["contact"]["email"].value;
    var z = document.forms["contact"]["comments"].value;

    if(x == "" || y == "" || z == "")
    {
      alert("Please fill the Form.");
    }
    else
    {
      alert("Thank You, We will contact you within 24 hours.")
      this.router.navigate(["/contact"])
    }

  }

}
