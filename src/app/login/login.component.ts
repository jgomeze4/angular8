import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:LoginService) { }
  public success:boolean = false;

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
        console.log(res);

    })
  }
}
