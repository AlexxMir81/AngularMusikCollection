import { Datum } from 'src/app/models/deezerdatum';

export interface DeezerResponse
{
    data:Datum[]
    total:number;
    next:string;
    prev:string;
}