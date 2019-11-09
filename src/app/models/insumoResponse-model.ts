import { Response } from './Response-model';
import { Insumo } from './insumo-model';

export class InsumoResponse extends Response{
    success:boolean;
    data:Insumo;
    message:string;
}