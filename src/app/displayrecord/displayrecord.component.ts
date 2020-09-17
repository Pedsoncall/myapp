import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { PatientRegisterNewComponent } from '../patient-register-new/patient-register-new.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-displayrecord',
  templateUrl: './displayrecord.component.html',
  styleUrls: ['./displayrecord.component.css']
})
export class DisplayrecordComponent implements OnInit {

  constructor(private sharedService: SharedService,
    private router:Router,
    private datepipe : DatePipe
    /*private register:PatientRegisterNewComponent*/ ) { }

  record 
  visible ='false'
  message
  consultationStartDate:any


  ngOnInit(): void {

        this.sharedService.sharedMessage.subscribe(message => this.message = message)
        if(this.message == 'false')
        {
          this.router.navigate(['user_dashboard_new/register']);
        }
        else if (this.message=='true')
        {
          
          this.sharedService.sharedRecord.subscribe(record => this.record = record)
          this.visible='true'
          
          
          
        }

  }

  close()
  {
    this.router.navigate(['user_dashboard_new/search']);
    //this.register.displayStruct='patreg'
  }
  
  encounterStart()  {
    this.consultationStartDate = this.datepipe.transform(new Date(),"M/d/yyyy hh:mm aa");
  }
  edit()
  {
    this.record.medicalDetails.search = '',
    this.record.medicalDetails.coding = '',
    this.encounterStart()
    this.record.personalDetails.consultationStartTime = this.consultationStartDate
    console.log(this.record)
    this.sharedService.nextMessage("true")
    this.sharedService.nextRecord(this.record);
    console.log("record sent");

    //this.register.displayStruct='patreg'

    this.router.navigate(['/user_dashboard_new/register']);
  }

}
