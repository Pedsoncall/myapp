import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-fields',
  templateUrl: './search-fields.component.html',
  styleUrls: ['./search-fields.component.css']
})
export class SearchFieldsComponent implements OnInit {

  searchForm: FormGroup;
  listOfClients
  fetchingData = 0;
  constructor(private formbuilder: FormBuilder,
              private httpclient:HttpClient) { 
    this.fetchingData = 0;
    this.searchForm = this.formbuilder.group({
      nameSearch: [''],
      dobSearch: [''],
      pcpSearch: [''],
      phoneSearch: [''],
      pcp:[''],
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
    console.log(this.searchForm.value)
  }

  ngOnInit(): void {
  }

}
