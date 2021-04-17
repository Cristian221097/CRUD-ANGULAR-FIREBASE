import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  EmployeesForm:FormGroup;

  constructor(private fb:FormBuilder,private Toast:ToastrService) { }

  ngOnInit(): void {
    this.initForms();
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
      console.log('guardado correctamente',this.EmployeesForm.value);
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
