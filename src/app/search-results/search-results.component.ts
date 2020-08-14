import { Component, OnInit, Input } from '@angular/core';
import { PatientDetailsService } from '../patient-details.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  


  @Input() result:any;

  constructor(
    private loginServ : PatientDetailsService
  ) { 

    this.hehe1='kdjvsd';
  }

  searchRecords 

  hehe1="njh"



  ngOnInit(): void {
    
    

    //console.log(this.searchRecords)
  }

  change()
  {
    this.hehe1="ajay"
  }

  
  /*
  myfunc(hehe)
  {
    this.searchRecords=hehe;
    console.log(this.searchRecords);



    this.hehe1="jkjhi" // idi ratle maratle akkada
  }*/

}
