import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForumParameterService {

  constructor() { }

  owner : string;
  id: string
  description : string
  threadNo : string


  get_owner():string
  {
    return this.owner;
  }
   
  set_owner(str)
  {
  this.owner=str;
  }

  get_id():string
  {
    return this.id;
  }
   
  set_id(str)
  {
  this.id=str;
  }
  
  get_description():string
  {
    return this.description;
  }
   
  set_description(str)
  {
  this.description=str;
  }

  get_threadNo():string
  {
    return this.threadNo;
  }
   
  set_threadNo(str)
  {
  this.threadNo=str;
  }

}
