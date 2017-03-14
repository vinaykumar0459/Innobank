import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app.service';
import {MiniStatement} from "./mini-statement"
@Component({
  selector: 'app-mini-statement',
  templateUrl: './mini-statement.component.html'

})
export class MiniStatementComponent implements OnInit {
sampleObj :MiniStatement[];
data:any[];
name:string="saroj";
accNo:Number=12345678901;
  constructor (private miniStatementService:AppService ) {
    this.sampleObj  =[{
 date:null,
    Chequeno:undefined,
    TransactionRemarks:"",
    withdrawalAmount:undefined,
    DepositAmount:undefined,
    BalanceAmount:undefined,
    }]
//     this.sampleObj=[
  
//    { SNO: 201, Date: '03-09-2017',Chequeno:3344,TransactionRemarks:"Good",withdrawalAmount:3000.00,
//     DepositAmount:5000.00,BalanceAmount:6000.00},
//      {  SNO: 202, Date: '08-09-2017',Chequeno:3444,TransactionRemarks:"Good",withdrawalAmount:4000.00,
//     DepositAmount:6000.00,BalanceAmount:7000.00},
//    {  SNO: 203, Date: '10-09-2017',Chequeno:3544,TransactionRemarks:"Good",withdrawalAmount:5000.00,
//     DepositAmount:7000.00,BalanceAmount:8000.00},
  
//    {  SNO: 204, Date: '03-10-2017',Chequeno:3644,TransactionRemarks:"Good",withdrawalAmount:3000.00,
//     DepositAmount:8000.00,BalanceAmount:9000.00},
  
//    {  SNO: 205, Date: '11-10-2017',Chequeno:3744,TransactionRemarks:"Good",withdrawalAmount:3000.00,
//     DepositAmount:5000.00,BalanceAmount:6000.00}
   
// ];
   }

  ngOnInit() {
    this.miniStatementService.url="http://localhost:3000/fund/ministatement/123456789012";
 this.miniStatementService.getService().subscribe(res =>{
   if(res["status"]==200){
this.data  = JSON.parse(res["_body"]);
this.sampleObj.pop();
(this.data).forEach(element => {
  if(element.hasOwnProperty("from"))
{
  
  this.sampleObj.push({
 date:element.date,
    Chequeno:undefined,
    TransactionRemarks:"",
    withdrawalAmount:undefined,
    DepositAmount:element.amount,
    BalanceAmount:element.currentBalance,
  })
  
}
else{
  this.sampleObj.push({
 date:element.date,
    Chequeno:undefined,
    TransactionRemarks:"",
    withdrawalAmount:element.amount,
    DepositAmount:undefined,
    BalanceAmount:element.currentBalance,
    })
}});
  console.log(res["_body"])}});
  }

}
 


 
