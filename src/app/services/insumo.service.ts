import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {InsumoResponse} from 'src/app/models/insumoResponse-model';
import { CookieService} from 'ngx-cookie-service';
import {Insumo} from 'src/app/models/insumo-model';
import {InsumoAdd} from 'src/app/models/insumoAdd-model';
import {Observable,Subject} from 'rxjs';
import { Familia } from '../models/familia-model';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  constructor(private http:HttpClient,private cookieService:CookieService) { }
  formData: InsumoAdd;

  readonly APIUrl="http://138.197.0.136:8081/api/insumo";
  readonly APIFUrl ="http://138.197.0.136:8081/api/familia";
  getInsumoList():Observable<any>{
    var _data = atob(this.cookieService.get('session'));
    let id:string = _data.split(';')[0];
    let token:string = 'Bearer '+_data.split(';')[1];
    console.log(id);
    console.log(token);
    const headers = new HttpHeaders().append('Authorization',token).append('id',id);
    console.log(headers);
    return this.http.get<InsumoResponse[]>(this.APIUrl +"/listar", {headers});
  }
  getFamiliaValues():Observable<any>{
    return this.http.get<Familia[]>(this.APIFUrl+"/listar");
  }
  addInsumo(ins:InsumoAdd){
    ins.activo = "A";
    return this.http.post(this.APIUrl+"/crear",ins);
  }
  private _listeners = new Subject<any>();
  listen():Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy:string){
    this._listeners.next(filterBy);
  }
}
