import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';
import { FormGroup, Validators, FormBuilder,FormArray, FormControl } from '@angular/forms';
import { ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { PatientDetailsService } from '../patient-details.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {
  @Input() record : any
  
  constructor(
    private formBuilder: FormBuilder,
    private loginServ: PatientDetailsService,
    private router: Router,
    private httpclient: HttpClient,
    private cook: CookieService,
    private datepipe : DatePipe
  ) 
  { 
    
    this.fetchingData = 0;
    this.displayStruct = 'searchFields'
    this.username = this.cook.get('username')
    this.templateForm.personalDetails.providerName = this.username
    /*
    this.httpclient.get('http://0.0.0.0:5000/getClients')
    .toPromise()
    .then(response => {
    //console.log(response)
    this.listOfClients = response
    console.log(this.listOfClients.Clients)
    //this.fetchingData = 1
          
          })
    */
    this.httpclient.get('http://0.0.0.0:5000/getClientName')
      .toPromise()
      .then(response => {
      //console.log(response)
      this.listOfClientName = response
      console.log(this.listOfClientName.ClientName)
      this.fetchingData = 1
      
            
            })
    


    console.log("dk")
    this.httpclient.get('http://0.0.0.0:5000/diagCode')
    .toPromise()
    .then(response => {
      this.data1=response;
      this.data=this.data1.diagCode;
      //console.log(this.data);
      console.log("Data Returned")


      })

      this.viewVirtualScroll = false
      this.resultsOfVirtualScroll = false

  }


  listOfClients: any;
  listOfClientName
  username;
  fetchingData = 0;
  displayPCP = 0;
  displayCPTList = 0;
  displayStruct: string
  searchResults = false
  date = new Date().toLocaleString();
  //consultationStartDate:any
  consultationStartDate:any = this.datepipe.transform(new Date(),"M/d/yyyy hh:mm aa");
  //formattedConsultationStartDate = this.consultationStartDate | date:'short'
  list
  search 
  myForm
  myForm1
  myForm2

  data;
  data1;
  viewVirtualScroll : boolean;
  resultsOfVirtualScroll : boolean;

  resultOfCoding : boolean;

  templateForm = {
    personalDetails: {
      consultationStartTime:this.consultationStartDate,
      consultationEndTime:'',
      callerName:'',
      callerNumber:'',
      patientFirstName: '',
      patientLastName: '',
      providerName:this.username,
      dob:'',
      client:'',
      pcp:'',
    },
    medicalDetails: {
      allergies: '',
      meds: '',
      pmh:'',
      fh:'',
      sh:'',
      cc:'',
      hpi:'',
      ros:'',
      exam:'',
      plan:'',
      search:'',
      coding:'',
    },
  };

  endTime() {
    let endDate = this.datepipe.transform(new Date(),"M/d/yyyy hh:mm aa");
    this.templateForm.personalDetails.consultationEndTime = endDate
    this.record

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
  
  onSubmit(templateFormValues: {}) {
    this.router.navigate(['form'])
    console.log(templateFormValues)
    //console.log(this.data)
    this.loginServ.patientDetails(templateFormValues).subscribe((data) => {
      //this.apiret = data
      console.log(data)
    })
  }


  changePCP(client){
    this.httpclient.get('http://0.0.0.0:5000/getClients',{params:{clientName : client}})
      .toPromise()
      .then(response => {
      //console.log(response)
      this.listOfClients = response
      console.log(this.listOfClients.Clients)
      //this.fetchingData = 1
      this.displayPCP = 1
            
            })
  }

  onSubmit1(){
    this.router.navigate(['form'])
    this.templateForm.medicalDetails.search = this.myForm.controls.useremail.value
    console.log(this.templateForm)
    this.loginServ.patientDetails(this.templateForm).subscribe((data) => {
      //this.apiret = data
      console.log(data)
    })
  }

  myfunc()
  {

    this.search = this.templateForm.medicalDetails.search
    console.log(this.search)
    this.list=[]

    this.list = this.data.filter(item => { if(item.description.includes(this.search) || item.description.includes(this.search.toUpperCase() ) || item.codeid.includes(this.search)) { return item } });

    console.log(this.list)
    const emailFormArray = <FormArray>this.myForm1.controls.useremail;
    emailFormArray.clear()
    for(var i in this.list)
    {
       
        emailFormArray.push(new FormControl(this.list[i].codeid+" - "+this.list[i].description));
    }

    console.log(this.myForm1.controls.useremail.value)
    
    this.viewVirtualScroll = true

    
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

    this.myForm = this.formBuilder.group({
      useremail: this.formBuilder.array([]) });

      this.myForm1 = this.formBuilder.group({
      useremail: this.formBuilder.array([]) });

      this.myForm2 = this.formBuilder.group({
        useremail: this.formBuilder.array([]) });
      
      
      
      


  }


  codingFunc()
  {

    this.search=this.templateForm.medicalDetails.coding;

    console.log(this.search)

    this.list=[]

    this.list = this.data.filter(item => { if(item.description.includes(this.search) || item.description.includes(this.search.toUpperCase() ) || item.codeid.includes(this.search)) { return item } });

    console.log(this.list)
    const emailFormArray = <FormArray>this.myForm2.controls.useremail;
    emailFormArray.clear()
    for(var i in this.list)
    {
       
        emailFormArray.push(new FormControl(this.list[i].codeid+" - "+this.list[i].description));
    }

    console.log(this.myForm2.controls.useremail.value)
    
    this.resultOfCoding = true;
    this.displayCPTList = 1


  }
  changeViewOfCPT(){
    this.displayCPTList = 0
  }

  onChange3(data2, isChecked: boolean)
  {

  }




}
