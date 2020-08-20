import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  
  constructor(private router:Router) {}

  @Input() result:any;

  record = null
  showRecord='false'
  editRecord='false'
  
  ngOnInit(): void {}

 
  display(one)
  {
    this.record = null
    this.showRecord='false'
    this.editRecord='false'

    this.record=one
    console.log(one);
    this.showRecord='true'
  }

  autoFormFill(record){

    this.record=record;
    console.log(record);
    this.editRecord='true'
    this.showRecord='false'
    
    
  }



}
