
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from '../shared.service'



@Component({
  selector: 'app-search-results-new',
  templateUrl: './search-results-new.component.html',
  styleUrls: ['./search-results-new.component.css']
})
export class SearchResultsNewComponent implements OnInit {

  constructor(
    private router:Router,
    private sharedService: SharedService
  ) { }

  @Input() result:any;

  record = null
  showRecord='false'
  editRecord='false'
  public master = 'hi'
  
  ngOnInit(): void {}

 
  display(one)
  {
    this.record = null
    this.showRecord='false'
    this.editRecord='false'

    this.record=one
    console.log(one);
    this.showRecord='true'

    this.sharedService.nextMessage("true")
    this.sharedService.nextRecord(this.record);
    console.log("record sent");

    this.router.navigate(['/user_dashboard_new/search/display']);
    console.log('print')


  }

  message:string = 'my message';

  autoFormFill(record){

    this.record=record;
    console.log(record);
    this.editRecord='true'
    this.showRecord='false'

    this.sharedService.nextMessage("true")
    console.log("set to true")

    this.sharedService.nextRecord(record);
    console.log("record sent");
    
    this.master=record.personalDetails.dob
    
    this.router.navigate(['/user_dashboard_new/register']);
    //this.patientRegister.displayMode();
    console.log('printed')

    
  }

}
