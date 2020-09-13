import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { PatientRegisterNewComponent } from '../patient-register-new/patient-register-new.component';

@Component({
  selector: 'app-preview-record',
  templateUrl: './preview-record.component.html',
  styleUrls: ['./preview-record.component.css']
})
export class PreviewRecordComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private router:Router,
    private register:PatientRegisterNewComponent
  ) { }



  record 
  visible ='false'
  message


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
    this.router.navigate(['user_dashboard_new/register']);
    this.register.displayStruct='patreg'
  }

  edit()
  {
    
    console.log(this.record)
    this.sharedService.nextMessage("true")
    this.sharedService.nextRecord(this.record);
    console.log("record sent");

    this.register.displayStruct='patreg'

    this.router.navigate(['/user_dashboard_new/register']);
  }

  submit()
  {
    this.record=this.register.templateForm
    this.register.onSubmit(this.record)
  }



}
