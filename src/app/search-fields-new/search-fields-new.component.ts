
import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { PatientDetailsService } from '../patient-details.service';

import { BehaviorSubject } from 'rxjs';
import { DisplayrecordComponent } from '../displayrecord/displayrecord.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search-fields-new',
  templateUrl: './search-fields-new.component.html',
  styleUrls: ['./search-fields-new.component.css']
})
export class SearchFieldsNewComponent implements OnInit {


  show = 'false'
  
  result

  testData = new BehaviorSubject<Array<any>>([]);
  listOfClients
  searchResults
  searchResultsBody
  searchRecords
  fetchingData = 0;
  listOfClientName
  displayPCP = 0;

  searchForm = {
    patientFirstName : '',
    patientLastName : '',
    dob : '',
    clientName : '',
    pcpName : '',
    callerNumber : '',
  };

  constructor(
    private formbuilder: FormBuilder,
    private httpclient:HttpClient,
    private loginServ: PatientDetailsService,
    private sharedService: SharedService,
    
              
  ) { 

    this.fetchingData = 0;
   


    this.httpclient.get('http://44.230.62.224:5000/getClientName')
      .toPromise()
      .then(response => {
      //console.log(response)
      this.listOfClientName = response
      console.log(this.listOfClientName.ClientName)
      this.fetchingData = 1
      
            
            })
            /*
    this.httpclient.get('http://44.230.62.224:5000/getClients')
            .toPromise()
            .then(response => {
              //console.log(response)
              this.listOfClients = response
              console.log(this.listOfClients.Clients)
              this.fetchingData = 1
            })
            */
    console.log("hey there!")
    
  }


  changePCP(client){
    this.httpclient.get('http://44.230.62.224:5000/getClients',{params:{clientName : client}})
      .toPromise()
      .then(response => {
      //console.log(response)
      this.listOfClients = response
      console.log(this.listOfClients.Clients)
      //this.fetchingData = 1
      this.displayPCP = 1
            
            })
  }

  onSubmit() {

    this.show='false'
    this.sharedService.nextMessage('false')
    
    console.log(this.searchForm)

    this.httpclient.post('http://44.230.62.224:5000/searchPatient',this.searchForm)
            .toPromise()
            .then(response => {
              //console.log(response)
              this.searchResults = response
              console.log(this.searchResults.result)
              this.searchResultsBody=this.searchResults.result
              
              for(var x in this.searchResultsBody) {
                console.log(this.searchResultsBody[x])

                
              }

              this.testData = this.searchResults.result;

              this.result= this.searchResults.result;
              
              this.show='true'
              //this.sdb.displayStruct="searchResults"
              //this.fetchingData = 1
            })

            

            
  }
  

  getSearchRecords()
  {
    return this.searchRecords
  }


  /*
  
  onSubmit() {
    console.log(this.searchForm.value)
    this.loginServ.patientSearchDetails(this.searchForm.value).subscribe((data) => {
      //this.apiret = data
      this.searchResults = data
      console.log(data)
      this.searchResultsBody = this.searchResults.body
      //console.log(this.searchResultsBody)
      console.log(this.searchResultsBody)
      //console.log(this.searchResults.body())
    })
  }
*/
  ngOnInit(): void {
  }

}