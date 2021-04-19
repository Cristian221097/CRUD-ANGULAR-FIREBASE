import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import {  Observable } from 'rxjs';
import { Empleado } from './Empleado.interfaces';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmpleadoSvcService {

  Empleados:Observable<Empleado[]>;
  EmpleadoCollection:AngularFirestoreCollection<Empleado>;

  constructor(private readonly afs:AngularFirestore) {
      this.EmpleadoCollection = this.afs.collection<any>('Empleados');
      this.getEmployee();
   }

    onSavesEmployee(Employee:Empleado,EmpId:string):Promise<void>
   {
      return new Promise(async (resolve,reject)=>{
        try{
          const id = EmpId || this.afs.createId();
          const data = {id, ...Employee};
          const result = await this.EmpleadoCollection.doc(id).set(data);
          resolve(result);

        }catch(err){
          reject(err);
        }

      } );
   }

   onDeleteEmployee(EmpId:string):Promise<void>{
     return new Promise(async(resolve,reject)=> {
       try{
        const id = EmpId;
        const result = this.EmpleadoCollection.doc(id).delete();
        resolve(result);
       }catch(err){
         reject(err);
       }
     });
   }

   private getEmployee():void{
     this.Empleados = this.EmpleadoCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Empleado))
     );
   }
}
