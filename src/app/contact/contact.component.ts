import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contact } from 'src/model/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  sg1=<contact>{};
  url: string = "http://localhost:3000/api/Contacts"

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

      this.http.post(this.url, this.sg1, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }).subscribe((res)=>{});

      window.location.href = "/contact";
    }

  }

}
