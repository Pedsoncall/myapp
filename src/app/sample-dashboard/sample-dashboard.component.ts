import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientDetailsService } from '../patient-details.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sample-dashboard',
  templateUrl: './sample-dashboard.component.html',
  styleUrls: ['./sample-dashboard.component.css']
})
export class SampleDashboardComponent implements OnInit {

  form: FormGroup;
  date = new Date().toLocaleString();
  listOfClients

  constructor(private formBuilder: FormBuilder,
    private loginServ: PatientDetailsService,
    private router: Router,
    private httpclient: HttpClient) {
    
      this.displayStruct = 'searchFields'

      this.httpclient.get('http://localhost:5000/getClients')
            .toPromise()
            .then(response => {
              //console.log(response)
              this.listOfClients = response
              console.log(this.listOfClients.Clients)
            })
    
    this.form = this.formBuilder.group({
      personalDetails: this.formBuilder.group({
        patientName: ['', Validators.required],
        callerName: ['', Validators.required],
        providerName: ['', Validators.required],
        dob: ['', Validators.required],
        phoneNumber : ['',Validators.required],
        startTime: [this.date],
        endTime: [],
        pcp:[],
      }),
      medicalDetails: this.formBuilder.group({
        allergies: [],
        meds: [],
        pmh: [],
        fh: [],
        cc: [],
        hpi:[],
        ros: [],
        exam: [],
      }),
      callDetails: this.formBuilder.group({
        startTime: [],
        endTime: [],
      }),
    });
  }


  displayStruct
  searchResults = false


  displayMode() {
    this.displayStruct = 'patreg'
  }

  displayMode1() {
    this.displayStruct = 'searchFields'
    this.searchResults = true
  }

  diagCodeTest() {
    this.router.navigate(['/dd'])
  }
  
  onSubmit() {
    this.router.navigate(['sampledb'])
    console.log(this.form.value)
    //console.log(this.data)
    this.loginServ.patientDetails(this.form.value).subscribe((data) => {
      //this.apiret = data
      console.log(data)
    })

    /*
  submit() {
    console.log('Submission Details', this.form.value);
  }
*/
  }
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

}
