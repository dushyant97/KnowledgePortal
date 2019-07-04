import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private http : HttpClient) { }

  user: string ="";
  obj : object;
  id : string = sessionStorage.getItem("sessions");
  url1 :string = 'http://localhost:3000/api/Employees' + '?filter={"where" : {"empId" : ' + this.id +' }}';
 
  ngOnInit() {
    sessionStorage.setItem("login","false");

 //This is to get the employee data
    this.http.get(this.url1).subscribe((res)=>{
    this.obj=res as any;
    this.user = this.obj[0].firstName + " " +this.obj[0].lastName;
    });
  }
}