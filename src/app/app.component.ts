import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CookieService} from 'ngx-cookie-service';
import { LoginService } from './services/login.service';
import { LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {

  private cookieValue:string;
  constructor(private cookieService:CookieService, private loginService:LoginService){};
  title = 'LABX';
  authorized = false;
  InsScreen = false;
  InvScreen = false;
  loginToken = null;

  public ngOnInit():void{
    var cookieVal = this.cookieService.get('session');
    if(cookieVal != ''){
      this.autoLogin(cookieVal);
    }
  }
  public ngAfterViewInit (){

  }
  autoLogin(rawData:string){
    var _data = atob(rawData);
    var result ="";
    this.loginToken= { id:_data.split(';')[0], token:_data.split(';')[1] };
    this.loginService.doLoginToken(this.loginToken).subscribe(res => {
      result = res.toString();
      return this.authorized = true;
    },error =>{
      result = "";
      return this.authorized =false;
    });
  }
  authChangedHandler(auth:boolean) {
    this.authorized = auth;
    console.log(auth);
  }
}
