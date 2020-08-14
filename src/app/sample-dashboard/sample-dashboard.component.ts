import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientDetailsService } from '../patient-details.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sample-dashboard',
  templateUrl: './sample-dashboard.component.html',
  styleUrls: ['./sample-dashboard.component.css']
})
export class SampleDashboardComponent implements OnInit {

  form: FormGroup;
  timeForm: FormGroup;
  date = new Date().toLocaleString();
  listOfClients: any;
  username;
  fetchingData = 0;

  constructor(private formBuilder: FormBuilder,
    private loginServ: PatientDetailsService,
    private router: Router,
    private httpclient: HttpClient,
    private cook: CookieService) {
      this.fetchingData = 0;
    
    this.displayStruct = 'searchFields'
    this.username = this.cook.get('username')

      this.httpclient.get('http://127.0.0.1:5000/getClients')
            .toPromise()
            .then(response => {
              //console.log(response)
              this.listOfClients = response
              console.log(this.listOfClients.Clients)
              this.fetchingData = 1
              
            })
    
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


  displayStruct: string
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
