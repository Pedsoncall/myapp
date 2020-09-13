import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SampleDashboardComponent } from './sample-dashboard/sample-dashboard.component';
import { AdminAuthGaurd } from './admin-auth.gaurd';
import { UserAuthGaurd } from './user-auth.gaurd';
import { MytableComponent } from './mytable/mytable.component';
import {AdminAccountComponent} from './admin-account/admin-account.component'
import { TestComponent } from './test/test.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component'
import { DisplayrecordComponent } from './displayrecord/displayrecord.component';
import { UserDashBoardNewComponent } from './user-dash-board-new/user-dash-board-new.component';
import { PatientRegisterNewComponent } from './patient-register-new/patient-register-new.component';

import {PreviewRecordComponent} from './preview-record/preview-record.component'
import { SearchFieldsNewComponent } from './search-fields-new/search-fields-new.component';
//import { ButtonViewComponent } from './mytable/mytable.component'
//import {BasicExampleButtonViewComponent} from './mytable/mytable.component'

const routes: Routes = [

  {
    path:'login',
    component:LoginComponent

  },

  {
    path:'register',
    component:RegisterComponent
  },

  {
    path:'reset_password',
    component:ResetPasswordComponent
  },

  
  {
    path:'user_dashboard',
    component:UserDashboardComponent,
    canActivate:[UserAuthGaurd],
    children:[
      
      {
        path:'record',
        component:DisplayrecordComponent
      },  

      /*
      {
        path:'',
        component:UserManagementComponent
      }*/


    ]
  },

  {
    path:'user_dashboard1/:master',
    component:UserDashboardComponent,
  },
  
  {
    path:'sampledb',
    component:SampleDashboardComponent
  },
  {
    path:'admin_dashboard',
    component:AdminDashboardComponent,
    canActivate:[AdminAuthGaurd],
    children:[
      
      {
        path:'user_management',
        component:UserManagementComponent,
        children:[
          {
            path:'mytable',
            component:MytableComponent,
          },
          {
            path:'',
            component:MytableComponent,
          }
        ]
      },
      
      {
        path:'myaccount',
        component:AdminAccountComponent,
      },

      {
        path:'',
        component:UserManagementComponent
      }


    ]
  },

  {
    path:'',
    component:LoginComponent
  },

  {
    path:'mytable',
    component:MytableComponent
  },

  {
    path:'dd',
    component:TestComponent
  },

  {
    path:'form',
    component: PatientRegisterComponent
  },

  //new routes start here

  {
    path :'user_dashboard_new',
    component : UserDashBoardNewComponent,
    children : [

      {
        path : 'register',
        component : PatientRegisterNewComponent,
        children : [
          {
            path : 'preview',
            component : PreviewRecordComponent
          }
        ]
      },
      {
        path : 'search',
        component : SearchFieldsNewComponent,
        children : [
          {
            path : 'display',
            component : DisplayrecordComponent
          }  

        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
