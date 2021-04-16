import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  EmployeesForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForms();
  }

  private initForms():void{
    this.EmployeesForm = this.fb.group({
      nombre:['hola',[Validators.required]],
      apellido:['asdsa',[Validators.required]],
      edad:['asfsa',[Validators.required]],
      sueldo:['asfsa',[Validators.required]],
      
    });
  }

  onSave():void{
    console.log('guardado correctamente',this.EmployeesForm.value);
  }

}
