import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listar-ins',
  templateUrl: './listar-ins.component.html',
  styleUrls: ['./listar-ins.component.css']
})
export class ListarInsComponent implements OnInit {

  constructor() { }
  listData:MatTableDataSource<any>;
  displayedColumns: string[] = ['Options','ID_PRODUCTO','ID_FAMILIA','Nombre','Marca','Proveedor','Codigo','Presentacion','RegINVIMA','ClasificacionRiesgo','TipoAlmacenamiento','ID_USUARIO','Activo']
  ngOnInit() {
  }

}
