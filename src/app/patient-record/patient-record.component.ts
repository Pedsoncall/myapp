import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.css']
})
export class PatientRecordComponent implements OnInit {


  @Input() record:any;

  date=''
  username='username'

  form: FormGroup;
  timeForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder
  ) { 


    this.timeForm = this.formBuilder.group({
      startTime: [this.date],
      endTime:[''],
    })
    
    this.form = this.formBuilder.group({
        personalDetails: this.formBuilder.group({
        patientFirstName: ['', Validators.required],
        patientLastName: ['', Validators.required],
        callerName: ['', Validators.required],
        providerName: [this.username, Validators.required],
        dob: ['', Validators.required],
        phoneNumber : ['',Validators.required],
        startTime: [this.date],
        endTime: [],
        pcp:[],
      }),
      medicalDetails: this.formBuilder.group({
        allergies: ['',Validators.required],
        meds: [],
        pmh: [],
        fh: [],
        sh:[],
        cc: [],
        hpi:[],
        ros: [],
        exam: [],
        diagnosis: [],
        plan: [],
        coding:[],
      }),
      callDetails: this.formBuilder.group({
        startTime: [],
        endTime: [],
      }),
    });



  }

  ngOnInit(): void {

    console.log(this.record)

    this.form.get('personalDetails.patientFirstName').setValue(this.record.personalDetails.patientFirstName);
    this.form.get('personalDetails.patientLastName').setValue(this.record.patientLastName);
    this.form.get('personalDetails.callerName').setValue(this.record.personalDetails.callerName);
    this.form.get('personalDetails.dob').setValue(this.record.personalDetails.dob);
    this.form.get('personalDetails.phoneNumber').setValue(this.record.personalDetails.phoneNumber);
    


  }

  onSubmit()
  {

    console.log(this.form.value)
  }


}
