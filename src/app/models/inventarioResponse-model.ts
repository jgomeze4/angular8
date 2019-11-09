import { Response } from './Response-model';
import { Inventario } from './inventario-model';

export class InventarioResponse extends Response{
    success:boolean;
    data:Inventario;
    message:string;
}