import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { EmpleadoSvcService } from 'src/app/services/empleado-svc.service';
import { Empleado } from 'src/app/services/Empleado.interfaces';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  navigation:any;
  EmployeesForm:FormGroup;
 

  constructor(private fb:FormBuilder,private Toast:ToastrService,private route:Router,private empleadoSvc:EmpleadoSvcService) {
      this.navigation = this.route.getCurrentNavigation()?.extras;
     console.log(this.navigation);
     this.initForms();
     
}

  ngOnInit(): void {
    
    if(typeof this.navigation =='undefined'){
      this.route.navigate(['create']);
    }else{
      this.EmployeesForm.patchValue(this.navigation);
    }

    

  }

  private initForms():void{
    this.EmployeesForm = this.fb.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      edad:['',[Validators.required]],
      sueldo:['',[Validators.required]],
      
    });
  }

  onSave():void{
    if(this.EmployeesForm.valid){
      const empleData = this.EmployeesForm.value;
      const empId = this.navigation?.id || null;
      this.empleadoSvc.onSavesEmployee(empleData,empId);
     
      this.Toast.success('Guardado correctamente','Empleado');
      this.EmployeesForm.reset();
    }
    
  }

  isValidField(field:string):string{
    const validateField = this.EmployeesForm.get(field);
    return (!validateField.valid && validateField.touched)
    ? 'is-invalid': validateField.touched ? 'is-valid' :'';
  }

}
