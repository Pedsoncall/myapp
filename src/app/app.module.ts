import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InterceptorService } from './interceptor.service'
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SampleDashboardComponent } from './sample-dashboard/sample-dashboard.component';
import { SearchFieldsComponent } from './search-fields/search-fields.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AdminAuthGaurd } from './admin-auth.gaurd'
import { UserAuthGaurd } from './user-auth.gaurd';
//import { ButtonViewComponent } from './mytable/mytable.component'
//import {BasicExampleButtonViewComponent} from './mytable/mytable.component'
import { MytableComponent } from './mytable/mytable.component'
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonModule } from '@angular/common';
import { PatientDetailsService } from './patient-details.service';
import { TestComponent } from './test/test.component';
import { PatientRecordComponent } from './patient-record/patient-record.component';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { Test2Component } from './test2/test2.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
//import { PhoneMaskDirective } from './phone-mask.directive';
import { DatePipe } from '@angular/common';
import { DisplayrecordComponent } from './displayrecord/displayrecord.component';
import { UserDashBoardNewComponent } from './user-dash-board-new/user-dash-board-new.component';
import { PatientRegisterNewComponent } from './patient-register-new/patient-register-new.component';
import { SearchFieldsNewComponent } from './search-fields-new/search-fields-new.component';
import { SearchResultsNewComponent } from './search-results-new/search-results-new.component';
import { PreviewRecordComponent } from './preview-record/preview-record.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    UserDashboardComponent,
    UserManagementComponent,
    AdminDashboardComponent,
    MytableComponent,
    SampleDashboardComponent,
    SearchFieldsComponent,
    SearchResultsComponent,
    TestComponent,
    PatientRecordComponent,
    Test2Component,
    //PhoneMaskDirective,
    PatientRegisterComponent,
    DisplayrecordComponent,
    UserDashBoardNewComponent,
    PatientRegisterNewComponent,
    SearchFieldsNewComponent,
    SearchResultsNewComponent,
    PreviewRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SmartTableModule,
    CommonModule,
    NgSelectModule,
    NgOptionHighlightModule,
    VirtualScrollerModule
    
  ],
  exports: [
    //PhoneMaskDirective
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},DatePipe,AdminAuthGaurd,UserAuthGaurd,PatientDetailsService,SearchResultsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
