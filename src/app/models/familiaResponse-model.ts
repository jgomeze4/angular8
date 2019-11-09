import { Response } from './Response-model';
import { Familia } from './familia-model';

export class FamiliaResponse extends Response{
    success:boolean;
    data:Familia;
    message:string;
}