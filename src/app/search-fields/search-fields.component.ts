import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { PatientDetailsService } from '../patient-details.service';
//import { SearchResultsComponent } from '../search-results/search-results.component';
//import { SampleDashboardComponent } from '../sample-dashboard/sample-dashboard.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-fields',
  templateUrl: './search-fields.component.html',
  styleUrls: ['./search-fields.component.css']
})
export class SearchFieldsComponent implements OnInit {
  
  
  show = 'false'
  result

  testData = new BehaviorSubject<Array<any>>([]);
  searchForm: FormGroup;
  listOfClients
  searchResults
  searchResultsBody
  searchRecords
  fetchingData = 0;
  constructor(private formbuilder: FormBuilder,
              private httpclient:HttpClient,
              private loginServ: PatientDetailsService,
              //private sr:SearchResultsComponent,
              //private sdb:SampleDashboardComponent
              ) { 



    

    this.fetchingData = 0;
    this.searchForm = this.formbuilder.group({
      patientFirstName: [''],
      patientLastName: [''],
      dobSearch: [''],
      pcpSearch: [''],
      phoneSearch: [''],
      
    });

    this.httpclient.get('http://44.230.62.224:5000/getClients')
            .toPromise()
            .then(response => {
              //console.log(response)
              this.listOfClients = response
              console.log(this.listOfClients.Clients)
              this.fetchingData = 1
            })

    console.log("hey there!")
    console.log(this.searchForm.value)
  }

  onSubmit() {

    this.show='false'

    this.httpclient.post('http://44.230.62.224:5000/searchPatient',this.searchForm.value)
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
