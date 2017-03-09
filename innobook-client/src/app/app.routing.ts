import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { UserLoginComponent } from './components/useraction/user-login/user-login.component';
import { homepageComponent } from './components/homepage/homepage.component';
import { myprofileComponent } from './components/myprofile/myprofile';
import { accountsummaryComponent } from './components/accountsummary/accountsummary.component';
import { editprofileComponent } from './components/editprofile/editprofile.component';
import { sidebarComponent } from './components/sidebar/sidebar.component';
import { UserRegisterComponent } from './components/useraction/user-register/user-register.component';
import { forgotpasswordComponent } from './components/useraction/forgotpassword/forgotpassword.component';
import { createnewaccountComponent } from './components/useraction/createnewaccount/createnewaccount.component';

const appRoutes: Routes=[

   { path: '', component : homepageComponent}
   
  // {
  //   path: 'myprofile',
  //   component : myprofileComponent, children:[
  //     { path: '', redirectTo: 'accountsummary', pathMatch: 'full' },
  //     { path: 'myprofile', component: editprofileComponent}
  //     ]
  // }

]

export const routing :ModuleWithProviders =RouterModule.forRoot(appRoutes);
