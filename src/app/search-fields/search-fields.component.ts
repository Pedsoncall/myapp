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
  constructor(private formbuilder: FormBuilder,
              private httpclient:HttpClient) { 

    this.searchForm = this.formbuilder.group({
      nameSearch: [''],
      dobSearch: [''],
      pcpSearch: [''],
      phoneSearch: [''],
      pcp:[''],
    });

    this.httpclient.get('http://127.0.0.1:5000/getClients')
            .toPromise()
            .then(response => {
              //console.log(response)
              this.listOfClients = response
              console.log(this.listOfClients.Clients)
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
