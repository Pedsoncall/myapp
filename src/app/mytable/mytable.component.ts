
import { Ng2SmartTableModule, LocalDataSource ,ViewCell } from 'ng2-smart-table';
import{Component ,OnInit, Input, Output, EventEmitter} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css']
})
export class MytableComponent implements OnInit {



  settings = {
    columns: {
      
      username: {
        title: 'User Name',
        filter: true
      },
      phone: {
        title: 'Phone',
        filter: true
      },
      email: {
        title: 'Email',
        filter: true,
        type:'html',
       
      },
      active: {
        title: 'Active',
        type: 'custom',
        filter: false,
        renderComponent: ButtonViewComponent2,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            //alert(`${row.active} !`)
          });
        }
      },
      role: {
        title: 'Role',
        type: 'custom',
        filter: false,
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
           // alert(`${row.username} !`)
          });
        }
      },
    
    },
    actions:
    {
      add:false,
      edit:false,
      delete:false,
    }

    
  };
  
  
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "sanjuravilla18@gmail"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      button:"user"
    },
    
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ]; 


  //data = [('1','2','nxka'),('ns','skc','scnk')]
  


  source: LocalDataSource;
  
  res

  constructor(private httpclient:HttpClient) {

    this.httpclient.get('http://44.230.62.224:5000/getall')
    .toPromise()
    .then(response => {

      this.res=response
      this.data=this.res.data
      this.source = new LocalDataSource(this.data);

    })


    
  }

  demo()
  {
    console.log("demo")
    this.httpclient.get('http://44.230.62.224:5000/getall')
    .toPromise()
    .then(response => {

      this.res=response
      this.data=this.res.data
      this.source = new LocalDataSource(this.data);})
  }

  ngOnInit(){


  }

  searchthis

  onSearch(query: string = this.searchthis) {

    console.log(query)
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

  

  //my code starts


}

//////////////////////////////////////////////////

@Component({
  selector: 'button-view',
  template: `
  
    <button (click)="onClick()"  class="btn btn-primary" >{{ renderValue}}</button>
    
  `,
  
})

export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {

   
      this.renderValue = this.rowData.role
    
  }

  constructor(private httpclient:HttpClient,private mytab:MytableComponent){}


  onClick() {

    console.log(this.rowData.role)
    this.save.emit(this.rowData);

    if(this.rowData.role=="admin")
    {
      this.httpclient.post('http://44.230.62.224:5000/make_user',{'username':this.rowData.username})
      .toPromise()
      .then(response => {

        console.log(response)
        this.mytab.demo()
  
      })
    }
    else if(this.rowData.role=="user")
    {
      this.httpclient.post('http://44.230.62.224:5000/make_admin',{'username':this.rowData.username})
      .toPromise()
      .then(response => {

        console.log(response)
        this.mytab.demo()
  
      })
    }

  }
}


/////////////////////////////////////////////

@Component({
  selector: 'button-view2',
  template: `
  
    <button (click)="onClick()"  class="btn btn-primary" >{{ renderValue }}</button>
    
  `,
  
})


export class ButtonViewComponent2 implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {

   
      this.renderValue = this.rowData.active
    
  }

  constructor(private httpclient:HttpClient,private mytab:MytableComponent){}

  onClick() {

    //let httpglient ;


    console.log(this.rowData.active)

    if(this.rowData.active==true)
    {
      this.httpclient.post('http://44.230.62.224:5000/make_in_active',{'username':this.rowData.username})
      .toPromise()
      .then(response => {

        console.log(response)
        this.mytab.demo()
      })
    }
    else if(this.rowData.active==false)
    {
      this.httpclient.post('http://44.230.62.224:5000/make_active',{'username':this.rowData.username})
      .toPromise()
      .then(response => {

        console.log(response)
        this.mytab.demo()
      })
    }

    this.save.emit(this.rowData);

    
    


    
  }
}
