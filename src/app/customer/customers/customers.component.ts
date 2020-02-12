import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/common/Customer';
import { DataService } from 'src/common/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
  customers:Customer[]=[];
  mainCustomer:Customer[]=[];
  searchText:string="";
  mode:string="card";
  constructor(private dataService:DataService) {
   }

  ngOnInit(): void {

   this.dataService.getCustomers().subscribe(data=>{
     this.customers=this.mainCustomer=data;
   });
  }


  removeCustomer(id:number){
   
    //this.customers=this.mainCustomer=this.mainCustomer.filter(c=> (c.id !== id));

    this.searchText="";
    this.dataService.deleteCustomer(id).subscribe(data =>{
      console.log("deleted!!!");
    })
    this.dataService.getCustomers().subscribe(data=>{
      this.customers=this.mainCustomer=data;
    });
 
  }

  filterCustomers(){
   this.customers=this.mainCustomer.filter(c=>{
     return (c.firstName.toUpperCase().indexOf(this.searchText.toUpperCase())>=0) ||
     (c.lastName.toUpperCase().indexOf(this.searchText.toUpperCase())>=0)

   })
  }

  callMode(s:string){
    this.mode=s;
  }

}
