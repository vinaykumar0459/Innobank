import { Component, OnInit } from '@angular/core';
import { AppService }   from '../../../app.service';
import { Details,DateClass }    from './detailed-statement';
@Component({
  selector: 'app-detailed-statement',
  templateUrl: './detailed-statement.component.html'

})
export class DetailedStatementComponent implements OnInit {
details:Details[];
isTrue:boolean =false;
date:DateClass;
page2:number = 1;
sampleData:any[];
  constructor(private DetailedService:AppService) { 
this.details =[{
       Date:null,

     ChequeNo:undefined,
   TransactionRemarks:"",
    withdrawalAmount:undefined,
    depositAmount:undefined,
    balanceAmount:undefined,
}];
this.date ={
  fromDate:null,
  toDate:null
}
  }

  ngOnInit() {

  }
  getData(date){
    this.DetailedService.data=date;
       this.DetailedService.url="http://localhost:3000/fund/detailstatement/123456789012";
       
 this.DetailedService.postService().subscribe(res => {
this.sampleData = JSON.parse(res["_body"]);
console.log(this.sampleData);
if(this.sampleData["data"]=="No Records"){
this.isTrue =true;
}
else{
  this.details.pop();
(this.sampleData).forEach(element => {
  if(element.hasOwnProperty("from"))
{
  this.details.push({
 Date:element.date,
    ChequeNo:undefined,
    TransactionRemarks:"",
    withdrawalAmount:undefined,
    depositAmount:element.amount,
    balanceAmount:element.currentBalance,
  });
  console.log(this.details);
}
else{
  this.details.push({
 Date:element.date,
    ChequeNo:undefined,
    TransactionRemarks:"",
    withdrawalAmount:element.amount,
    depositAmount:undefined,
    balanceAmount:element.currentBalance,
    });
}});}

   console.log(res)});
  }

}

