import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls : ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  checkData:userRegister;
  validUser:Boolean = false;
  constructor() {

  }

  checkDetails(event){
    event.preventDefault();

    //this.validUser = true;
  }

  ngOnInit() {
    this.checkData = {
      uid :undefined,
      mobile :undefined,
      password :'',
      confpassword :''
    }
  }

}

interface userRegister{
    uid:Number;
    mobile:Number;
    password:String;
    confpassword:String;
}
