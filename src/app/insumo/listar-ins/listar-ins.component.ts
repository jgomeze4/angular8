import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Insumo}  from "src/app/models/insumo-model";
import { InsumoService } from 'src/app/services/insumo.service';

@Component({
  selector: 'app-listar-ins',
  templateUrl: './listar-ins.component.html',
  styleUrls: ['./listar-ins.component.css']
})
export class ListarInsComponent implements OnInit {

  constructor(private service: InsumoService) { }
  listData:MatTableDataSource<any>;
  displayedColumns: string[] = ['Options','ID_PRODUCTO','ID_FAMILIA','Nombre','Marca','Proveedor','Codigo','Presentacion','RegINVIMA','ClasificacionRiesgo','TipoAlmacenamiento','ID_USUARIO','Activo']
  ngOnInit() {
    this.refreshInsList();
  }
  refreshInsList(){
    var dummyData =[{ID_PRODUCTO:1,ID_FAMILIA:1,Nombre:"prueba",Marca:"prueba",Proveedor:"prueba",Codigo:"prueba",Presentacion:"Prueba",RegINVIMA:"prueba",ClasificacionRiesgo:"prueba",TipoAlmacenamiento:"prueba",ID_USUARIO:1,Activo:1}]
    this.listData = new MatTableDataSource(dummyData);
    //this.service.getInsumoList().subscribe(data =>{
      //this.listData = new MatTableDataSource(data);
    //});
  }
  onEdit(insumo:Insumo){
    console.log(insumo);
  }
  onDelete(id:number){
    console.log(id);
  }
}
