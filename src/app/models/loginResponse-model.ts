import { Response } from './Response-model';
import { Usuario } from './usuario-model';

export class LoginResponse extends Response{
    success:boolean;
    data:Usuario;
    message:string;
}