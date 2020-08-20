import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder,FormArray, FormControl } from '@angular/forms';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';
import { ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
  displayStruct: string
  searchResults = false

  list
  search 
  myForm
  myForm1

  data;
  data1;
  viewVirtualScroll : boolean;
  resultsOfVirtualScroll : boolean;

  constructor(private formBuilder: FormBuilder,
    private loginServ: PatientDetailsService,
    private router: Router,
    private httpclient: HttpClient,
    private cook: CookieService) 
    {
    this.fetchingData = 0;
    
    this.displayStruct = 'searchFields'
    this.username = this.cook.get('username')

    this.httpclient.get('http://0.0.0.0:5000/getClients')
      .toPromise()
      .then(response => {
      //console.log(response)
      this.listOfClients = response
      console.log(this.listOfClients.Clients)
      this.fetchingData = 1
            
            })
    
    


    console.log("dk")
      this.httpclient.get('http://0.0.0.0:5000/diagCode')
      .toPromise()
      .then(response => {
        this.data1=response;
        this.data=this.data1.diagCode;
        console.log(this.data);


      })

      this.viewVirtualScroll = false
      this.resultsOfVirtualScroll = false


            
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
        search:'',
        plan: [],
        coding:[],
      }),
      callDetails: this.formBuilder.group({
        startTime: [],
        endTime: [],
      }),
    });
  }





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


  myfunc()
  {
    this.search = this.form.controls.medicalDetails.get('search').value
    console.log(this.search)

    this.list=[]

    this.list = this.data.filter(item => { if(item.description.includes(this.search) || item.description.includes(this.search.toUpperCase() ) || item.codeid.includes(this.search)) { return item } });

    console.log(this.list)
    const emailFormArray = <FormArray>this.myForm1.controls.useremail;

    for(var i in this.list)
    {
       
        emailFormArray.push(new FormControl(this.list[i].codeid+" "+this.list[i].description));
    }

    console.log(this.myForm1.controls.useremail.value)
    
    this.viewVirtualScroll = true
    console.log(this.viewVirtualScroll)
    this.search = ''
  }

  
/*
  onChange(data, isChecked: boolean) {

    console.log(data.codeid)
    const emailFormArray = <FormArray>this.myForm.controls.useremail;

    if(isChecked) 
    {

        emailFormArray.push(new FormControl(data.codeid+" "+data.description));
       
    } 
    else 
    {
      let index = emailFormArray.controls.findIndex(x => x.value == data.codeid+" "+data.description )
      emailFormArray.removeAt(index);
    }

    console.log(emailFormArray.at(0).value)

    console.log(this.myForm.controls.useremail)


    

  }
  */
  onChange1(data1, isChecked: boolean) {

    console.log(data1)
    const emailFormArray = <FormArray>this.myForm.controls.useremail;

    const emailFormArray1 = <FormArray>this.myForm1.controls.useremail;

    
    if(!isChecked)
    {
      let index1 = emailFormArray.controls.findIndex(x => x.value == data1)
      console.log(index1)
      emailFormArray.removeAt(index1);

      emailFormArray1.push(new FormControl(data1));
      

    }

    

    console.log(this.myForm.controls.useremail)

  }

  onChange2(data2, isChecked: boolean) {

    console.log("on change 2")
    console.log(data2)
    this.resultsOfVirtualScroll = true
    const emailFormArray1 = <FormArray>this.myForm1.controls.useremail;

    const emailFormArray = <FormArray>this.myForm.controls.useremail;
    
    if(isChecked)
    {
      let index1 = emailFormArray1.controls.findIndex(x => x.value == data2)
      console.log(index1)
      emailFormArray1.removeAt(index1);

      emailFormArray.push(new FormControl(data2));
    }

    

    console.log(this.myForm.controls.useremail)

  }




  items = [];

  @ViewChild('scroll') scroller: VirtualScrollerComponent;









  ngOnInit(): void {
    //throw new Error("Method not implemented."); 
    this.myForm = this.formBuilder.group({
      useremail: this.formBuilder.array([]) });

      this.myForm1 = this.formBuilder.group({
      useremail: this.formBuilder.array([]) });

  }

}
