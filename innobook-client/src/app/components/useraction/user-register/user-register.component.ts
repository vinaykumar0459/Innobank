import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls : ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  validUser:Boolean = false;
  constructor() { 

  }
  
  checkDetails(event){
    event.preventDefault();
  }

  ngOnInit() {
  }

}

interface userRegister{
  
} 