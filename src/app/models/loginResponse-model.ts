import { ResponseModel } from './Response-model';
import { Usuario } from './usuario-model';

export class LoginResponse extends ResponseModel{
    data:Usuario;
}