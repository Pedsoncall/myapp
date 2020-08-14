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
    TestComponent
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
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},AdminAuthGaurd,UserAuthGaurd,PatientDetailsService,SearchResultsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
