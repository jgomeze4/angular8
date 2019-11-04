import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { InsumoService } from 'src/app/services/insumo.service';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-agregar-ins',
  templateUrl: './agregar-ins.component.html',
  styleUrls: ['./agregar-ins.component.css']
})
export class AgregarInsComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<AgregarInsComponent>, public service:InsumoService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form != null)
    form.resetForm();

    this.service.formData ={
      idProducto:0,
      nombre:'',
      marca:'',
      proveedor:'',
      codigo:'',
      presentacion:'',
      regInvima:'',
      clasificacionRiesgo:'',
      tempAlmacenamiento:'',
      activo:'',
      idFamilia:1
    }
  }
  onClose(){
    this.dialogbox.close();
  }
  onSubmit(form:NgForm){
    console.log(form.value);
  }
}
