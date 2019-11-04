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

  constructor(public dialogbox:MatDialogRef<AgregarInsComponent>, private service:InsumoService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form != null)
    form.resetForm();

    this.service.formData ={
      ID_PRODUCTO:0,
      ID_FAMILIA:0,
      Nombre:'',
      Marca:'',
      Proveedor:'',
      Codigo:'',
      Presentacion:'',
      RegINVIMA:'',
      ClasificacionRiesgo:'',
      TipoAlmacenamiento:'',
      ID_USUARIO:0,
      Activo:false
    }
  }
  onClose(){
    this.dialogbox.close();
  }
  onSubmit(form:NgForm){
    console.log(form.value);
  }
}
