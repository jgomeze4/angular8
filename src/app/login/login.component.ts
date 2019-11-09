import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Usuario } from 'src/app/models/usuario-model';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:LoginService, public cookieService:CookieService) { }
  public success:boolean = false;
  public errorMsg:string ='';

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form != null)
    form.resetForm();

    this.service.formData ={
      email:null,
      contrasena:null,
    }
  }
  onSubmit(form:NgForm){

    this.service.doLogin(form.value).subscribe(res =>{
        if(res["success"]){
          var user:Usuario = res["data"];
          var cookieVal = user.id+';'+user.token+';'+user.nombre;
          cookieVal = btoa(cookieVal);
          this.cookieService.set('session',cookieVal);
        }
    }, error =>{
      this.cookieService.delete('session');
      if(error["status"]==401){
        this.errorMsg = error["error"]["message"];
      }else{
        this.errorMsg = "Ocurrió un error";
      }
    })
  }
}
