import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { UserLoginComponent } from './components/useraction/user-login/user-login.component';
import { homepageComponent } from './components/homepage/homepage.component';
import { accountsummaryComponent } from './components/accountsummary/accountsummary.component';
import { editprofileComponent } from './components/editprofile/editprofile.component';
import { sidebarComponent } from './components/sidebar/sidebar.component';
import { UserRegisterComponent } from './components/useraction/user-register/user-register.component';
import { forgotpasswordComponent } from './components/useraction/forgotpassword/forgotpassword.component';
import { createnewaccountComponent } from './components/useraction/createnewaccount/createnewaccount.component';
import { accountsummarymainComponent } from './components/accountsummary/accountsummarymain/accountsummarymain.component';
import { FundTransferComponent } from './components/payments/fund-transfer/fund-transfer.component';
import {  MiniStatementComponent } from './components/statements/mini-statement/mini-statement.component';
const appRoutes: Routes=[

   
{ path:'', component: homepageComponent, children : [
     { path: '',
      component : UserLoginComponent
     },
     { path: 'register', component: UserRegisterComponent },
     { path: 'forgotpassword', component: forgotpasswordComponent},
     { path: 'createnewaccount', component: createnewaccountComponent}
   ] },
{ path: 'accountsummary', component: accountsummarymainComponent, children : [
     { path : '', component: accountsummaryComponent},
     { path : 'myprofile', component : editprofileComponent}
]} ,
{ path: 'myprofile', component : editprofileComponent },
 {
    path:"ministatement",
    component:MiniStatementComponent
  },
{
    path:"fundtransfer",
    component:FundTransferComponent
  }
  

]

export const routing :ModuleWithProviders =RouterModule.forRoot(appRoutes);
