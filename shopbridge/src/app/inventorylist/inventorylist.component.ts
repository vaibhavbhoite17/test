import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InventoryserviceService } from './inventoryservice.service';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrls: ['./inventorylist.component.scss']
})
export class InventorylistComponent implements OnInit {
  displayedColumns = ['id','name', 'description', 'price','edit'];


@ViewChild('TableOnePaginator' , { static: true }) tableOnePaginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
dataSource = new MatTableDataSource();
local_data:any;
title:any;

  constructor(private invservice:InventoryserviceService,private router:Router,
    private dialog: MatDialog) { 
      this.local_data={}
      this.title="Add Inventory"
    }

  ngOnInit(): void {


  this.getallList();
  }


  getallList(){
    this.invservice.getAllInventory().subscribe(res=>{

      console.log("res::"+JSON.stringify(res))
      ///this.dataSource=res;
      let data:any=res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.tableOnePaginator;
      this.dataSource.sort = this.sort;
    })

  }

  delete(id:any){
    //console.log("FF"+id)
       this.invservice.deleteinv(id).subscribe(res=>{
                this.getallList();
       })
  }

  
  newaccref:any;
  Addnewaccount(event:any) {
    this.newaccref = this.dialog.open(event, {
      width: "900px",
      disableClose: true,
      
    });
    this.newaccref.afterClosed().subscribe((result:any) => {

    });
  }

  close() {
    
    this.dialog.closeAll();
  }

  onSubmit(form:NgForm){

    if(form.valid)
    {

      if (form.value.id == null)
      {
        this.invservice.postdata(this.local_data).subscribe(res=>{
          alert("Data Submitted Successfully")
          this.close();
          this.getallList();
          form.value.reset();
        })
      }
      else
      {
   

         let obj={
           "id":form.value.id,
           "name":form.value.itemname,
           "description":form.value.description,
           "price":form.value.price
         }
         this.invservice.putData(form.value.id,obj).subscribe(res=>{

          alert("Data Updated Successfully")
            this.close();
            form.value.reset();
         })
      }
  
       
    }else{
      //return false;
    }
  }


  update(id:any,event:any){
    // console.log("ddds"+JSON.stringify(event))
    // event.description="ffff"
    this.title="Update Inventory"
    this.newaccref = this.dialog.open(id, {
      width: "900px",
      disableClose: true,
      //data:event

      
    });
    this.local_data=event;
    this.newaccref.afterClosed().subscribe((result:any) => {
      //alert("DD")
      this.local_data={ }
    });

  }
}
