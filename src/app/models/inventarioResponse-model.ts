import { ResponseModel } from './Response-model';
import { Inventario } from './inventario-model';

export class InventarioResponse extends ResponseModel{
    data:Inventario;
}