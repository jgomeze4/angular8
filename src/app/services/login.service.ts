import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/models/login-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient) { }
  formData: Login;
  readonly APIUrl="http://138.197.0.136:8082/api/security";
  doLogin(login:Login){
    login.contrasena = btoa(login.contrasena);
    return this.http.post(this.APIUrl+"/autenticar",login);
  }
}
