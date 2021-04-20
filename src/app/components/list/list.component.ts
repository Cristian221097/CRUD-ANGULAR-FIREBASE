import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoSvcService } from 'src/app/services/empleado-svc.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Empleados$ = this.empleadoSvc.Empleados;

  filtro = "";

  navigationState:NavigationExtras = {
    state:{
      value:null
    }
  };




  fakeData = [
    {
      nombre:'Cristian',
      apellido:'amancio',
      edad:'22',
      sueldo:'15,000'
    },
    {
      nombre:'emeli',
      apellido:'amancio',
      edad:'18',
      sueldo:'18,000'
    },
    {
      nombre:'yeraisy',
      apellido:'luna',
      edad:'21',
      sueldo:'25,000'
    },
    {
      nombre:'elvis',
      apellido:'santana',
      edad:'25',
      sueldo:'15,000'
    },
    {
      nombre:'yostin',
      apellido:'paulino',
      edad:'20',
      sueldo:'15,000'
    }
  ];


  

  constructor(private router:Router,private empleadoSvc:EmpleadoSvcService,private Toast:ToastrService) { 

   
  }

  ngOnInit(): void {
    
  }

  onGoEdit(data:any):void{
    this.navigationState.state = data;
    this.router.navigate(['create'], this.navigationState.state);
  }

 async onDelete(EmpId):Promise<void>{
  try{
      await  this.empleadoSvc.onDeleteEmployee(EmpId);
      this.Toast.info('Elminado correctamente');
  }catch(err){
    console.log(err);
  }
  }

}
