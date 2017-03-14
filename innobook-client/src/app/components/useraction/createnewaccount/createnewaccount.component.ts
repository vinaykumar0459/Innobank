import { Component, OnInit } from '@angular/core';
import {newaccount_data} from './createnewaccount.interface';
import{AppService} from '../../../app.service';
import{Router} from "@angular/router";
@Component({
  selector: 'app-createnewaccount',
  templateUrl: './createnewaccount.component.html',
  styleUrls : ['./createnewaccount.component.css']

})
export class createnewaccountComponent implements OnInit {
user:newaccount_data;

 constructor(private registerService:AppService ,private router:Router){
    this.user=
    {
    fname:"",
    lname:"",
    email:"",
    mobile:undefined,
    aadhar:undefined,
    pan:"",
    gender:"",
    dob:"",
    address:""
  }
  }
  data;


  CreateUser(user){
    if(this.user.fname == "" ||this.user.lname == ""||this.user.email == ""||this.user.mobile ==undefined
    ||this.user.aadhar == undefined||this.user.pan == ""||this.user.gender == ""||this.user.dob == ""
    ||this.user.address == ""){
      alert("Please Enter All Fields.");
    }else{
    this.registerService.url="http://localhost:3000/users/createnewaccount";
    this.registerService.data = user;
    this.registerService.postService().subscribe(res=>{
      console.log(res);
        this.data = res["_body"];
        console.log(this.data);
       var  msg=JSON.parse(this.data);
     if(this.data==0){
           alert("User Already Existed")
           console.log("hjgghjkhikhikuyifu");
             this.router.navigate(["register"]);
         }else if(this.data == 1){
            this.router.navigate(["register"]);
             alert('Register Successfully');
         }

    });
    }
  }
  ngOnInit() {

  }

}
