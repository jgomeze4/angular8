import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Inventario} from 'src/app/models/inventario-model';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http:HttpClient, private cookieService:CookieService) { }
  formData: Inventario;

  readonly APIUrl="http://138.197.0.136:8080/api/inventario";
  getInventarioList():Observable<Inventario[]>{
    var _data = atob(this.cookieService.get('session'));
    let id:string = _data.split(';')[0];
    let token:string = 'Bearer '+_data.split(';')[1];
    return this.http.get<Inventario[]>(this.APIUrl +"/listar",{headers:{'Content-Type':'application/json','Authorization':token,'id':id}});
  }
  addInventario(inv:Inventario){
    var _data = atob(this.cookieService.get('session'));
    let id:string = _data.split(';')[0];
    let token:string = 'Bearer '+_data.split(';')[1];
    const momentDate = new Date(inv.fechaVencimiento); // Replace event.value with your date value
    inv.fechaVencimiento = moment(momentDate).format("YYYY-MM-DD");
    console.log(inv);
    return this.http.post(this.APIUrl+"/ingresar",inv,{headers:{'Content-Type':'application/json','Authorization':token,'id':id}});
  }
}
