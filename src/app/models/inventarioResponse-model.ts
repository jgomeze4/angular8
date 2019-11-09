import { ResponseModel } from './response-model';
import { Inventario } from './inventario-model';

export class InventarioResponse extends ResponseModel{
    data:Inventario;
}