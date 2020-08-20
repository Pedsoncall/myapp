import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

import { VirtualScrollerComponent } from 'ngx-virtual-scroller';

import { ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 

    people = [];
    selectedPeople = [];
    list
    search

    myForm
    myForm1

    data;
    data1;
    viewVirtualScroll : boolean;
    resultsOfVirtualScroll : boolean;
    //event: any;
    constructor(private httpclient:HttpClient,private fb: FormBuilder) {

      console.log("dk")
      this.httpclient.get('http://0.0.0.0:5000/diagCode')
      .toPromise()
      .then(response => {
        this.data1=response;
        this.data=this.data1.diagCode;
        //console.log(this.data);
    

      })

      this.viewVirtualScroll = false
      this.resultsOfVirtualScroll = false

    }

    ngOnInit() {

        this.myForm = this.fb.group({
        useremail: this.fb.array([]) });

        this.myForm1 = this.fb.group({
        useremail: this.fb.array([]) });

    }


  myfunc()
  {
    console.log(this.search)
    this.list=[]

    this.list = this.data.filter(item => { if(item.description.includes(this.search) || item.description.includes(this.search.toUpperCase() ) || item.codeid.includes(this.search)) { return item } });

    console.log(this.list)
    const emailFormArray = <FormArray>this.myForm1.controls.useremail;
    emailFormArray.clear()
    for(var i in this.list)
    {
       
        emailFormArray.push(new FormControl(this.list[i].codeid+" "+this.list[i].description));
    }

    console.log(this.myForm1.controls.useremail.value)
    
    this.viewVirtualScroll = true

    
  }

  

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



}
